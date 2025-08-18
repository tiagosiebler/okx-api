/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */

import { APICredentials } from './types/shared.js';
import {
  WsAPIOperationResponseMap,
  WSAPIRequestFlags,
  WSAPIRequestOKX,
  WsAPITopicRequestParamMap,
  WsAPIWsKeyTopicMap,
  WsAuthRequest,
  WSOperation,
  WsRequestOperationOKX,
} from './types/websockets/ws-api.js';
import { MessageEventLike, WsDataEvent } from './types/websockets/ws-events.js';
import { WSClientConfigurableOptions } from './types/websockets/ws-general.js';
import {
  WsAuthRequestArg,
  WsChannelSubUnSubRequestArg,
} from './types/websockets/ws-request.js';
import {
  BaseWebsocketClient,
  EmittableEvent,
  MidflightWsRequestEvent,
  WSClientEventMap,
} from './util/BaseWSClient.js';
import { DefaultLogger } from './util/logger.js';
import {
  isConnCountEvent,
  isWSAPIResponse,
  isWsDataEvent,
  isWsErrorEvent,
  isWsLoginEvent,
  isWsSubscribeEvent,
  isWsUnsubscribeEvent,
  neverGuard,
} from './util/typeGuards.js';
import {
  SignAlgorithm,
  SignEncodeMethod,
  signMessage,
} from './util/webCryptoAPI.js';
import {
  getDemoWsKey,
  getPromiseRefForWSAPIRequest,
  getWsKeyForMarket,
  getWsKeyForTopicChannel,
  getWsUrlForWsKey,
  isWsPong,
  PRIVATE_WS_KEYS,
  PUBLIC_WS_KEYS,
  requiresWSAPITag,
  validateWSAPITag,
  WS_EVENT_CODE_ENUM,
  WS_KEY_MAP,
  WS_LOGGER_CATEGORY,
  WsKey,
  WsTopicRequest,
} from './util/websocket-util.js';
import { WSConnectedResult } from './util/WsStore.types.js';

// Type safety for on and emit handlers: https://stackoverflow.com/a/61609010/880837
export declare interface WebsocketClient {
  on<U extends keyof WSClientEventMap<WsKey, WsDataEvent>>(
    event: U,
    listener: WSClientEventMap<WsKey>[U],
  ): this;

  emit<U extends keyof WSClientEventMap<WsKey, WsDataEvent>>(
    event: U,
    ...args: Parameters<WSClientEventMap<WsKey>[U]>
  ): boolean;
}

export class WebsocketClient extends BaseWebsocketClient<
  WsKey,
  WsRequestOperationOKX<object>
> {
  constructor(options?: WSClientConfigurableOptions, logger?: DefaultLogger) {
    super(options, logger);

    if ((this.options.market as any) === 'demo') {
      throw new Error(
        'ERROR: to use demo trading, set the "demoTrading: true" flag in the constructor. The "demo" market is not valid any more.',
      );
    }
  }

  /**
   * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
   */
  public connectAll(): Promise<WSConnectedResult | undefined>[] {
    return [this.connectPublic(), this.connectPrivate()];
  }

  public connectPublic(
    businessEndpoint?: boolean,
  ): Promise<WSConnectedResult | undefined> {
    const isPrivate = false;
    const wsKey = getWsKeyForMarket(
      this.options.market,
      isPrivate,
      !!businessEndpoint,
    );
    return this.connect(WS_KEY_MAP[wsKey]);
  }

  public connectPrivate(
    businessEndpoint?: boolean,
  ): Promise<WSConnectedResult | undefined> {
    const isPrivate = true;
    const wsKey = getWsKeyForMarket(
      this.options.market,
      isPrivate,
      !!businessEndpoint,
    );
    return this.connect(WS_KEY_MAP[wsKey]);
  }

  /**
   * Ensures the WS API connection is active and ready.
   *
   * You do not need to call this, but if you call this before making any WS API requests,
   * it can accelerate the first request (by preparing the connection in advance).
   */
  public connectWSAPI(): Promise<unknown[]> {
    /** This call automatically ensures the connection is active AND authenticated before resolving */
    return Promise.allSettled([
      this.assertIsAuthenticated(this.getMarketWsKey('private')),
      this.assertIsAuthenticated(this.getMarketWsKey('business')),
    ]);
  }

  /**
   * Subscribe to topics & track/persist them. They will be automatically resubscribed to if the connection drops/reconnects.
   * @param wsEvents topic or list of topics
   * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
   */
  public subscribe(
    wsEvents: WsChannelSubUnSubRequestArg[] | WsChannelSubUnSubRequestArg,
    isPrivateTopic?: boolean,
  ): Promise<unknown>[] {
    const wsEventArgs = Array.isArray(wsEvents) ? wsEvents : [wsEvents];

    const topicRequestsByWsKey: Record<
      WsKey | string,
      WsTopicRequest<string, object>[]
    > = {};

    // Format and batch topic requests by WsKey (resolved dynamically)
    wsEventArgs.forEach((wsEvent) => {
      const { channel, ...payload } = wsEvent;

      const normalisedEvent: WsTopicRequest<string, object> = {
        topic: channel,
        payload,
      };

      const wsKey = getWsKeyForTopicChannel(
        this.options.market,
        channel,
        isPrivateTopic,
      );

      // Arrange into per-wsKey sorted lists
      if (!topicRequestsByWsKey[wsKey]) {
        topicRequestsByWsKey[wsKey] = [];
      }

      topicRequestsByWsKey[wsKey].push(normalisedEvent);
    });

    const subscribeRequestPromises: Promise<unknown>[] = [];
    for (const wsKeyUntyped in topicRequestsByWsKey) {
      subscribeRequestPromises.push(
        this.subscribeTopicsForWsKey(
          topicRequestsByWsKey[wsKeyUntyped],
          wsKeyUntyped as WsKey,
        ),
      );
    }

    return subscribeRequestPromises;
  }

  /**
   * Unsubscribe from topics & remove them from memory. They won't be re-subscribed to if the connection reconnects.
   * @param wsTopics topic or list of topics
   * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
   */
  public unsubscribe(
    wsEvents: WsChannelSubUnSubRequestArg[] | WsChannelSubUnSubRequestArg,
    isPrivateTopic?: boolean,
  ) {
    const wsEventArgs = Array.isArray(wsEvents) ? wsEvents : [wsEvents];

    const topicRequestsByWsKey: Record<
      WsKey | string,
      WsTopicRequest<string, object>[]
    > = {};

    // Format and batch topic requests by WsKey (resolved dynamically)
    wsEventArgs.forEach((wsEvent) => {
      const { channel, ...payload } = wsEvent;

      const normalisedEvent: WsTopicRequest<string, object> = {
        topic: channel,
        payload,
      };

      const wsKey = getWsKeyForTopicChannel(
        this.options.market,
        channel,
        isPrivateTopic,
      );

      // Arrange into per-wsKey sorted lists
      if (!topicRequestsByWsKey[wsKey]) {
        topicRequestsByWsKey[wsKey] = [];
      }

      topicRequestsByWsKey[wsKey].push(normalisedEvent);
    });

    const unsubscribeRequestPromises: Promise<unknown>[] = [];
    for (const wsKeyUntyped in topicRequestsByWsKey) {
      unsubscribeRequestPromises.push(
        this.unsubscribeTopicsForWsKey(
          topicRequestsByWsKey[wsKeyUntyped],
          wsKeyUntyped as WsKey,
        ),
      );
    }

    return unsubscribeRequestPromises;
  }

  /**
   *
   *
   * Internal methods required to integrate with the BaseWSClient
   *
   *
   */

  public getMarketWsKey(type: 'private' | 'business'): WsKey {
    // returns private or business ws key for the active api market
    // defaults to global
    // automatically resolves to demo trading wsKeys under the hood (WSClient)

    const isPrivateType = type === 'private';
    const isBusinessType = type === 'business';

    switch (this.options.market) {
      case 'EEA': {
        return isPrivateType
          ? WS_KEY_MAP.eeaLivePrivate
          : isBusinessType
            ? WS_KEY_MAP.eeaLiveBusiness
            : WS_KEY_MAP.eeaLivePublic;
      }
      case undefined:
      case 'prod':
      case 'GLOBAL': {
        return isPrivateType
          ? WS_KEY_MAP.eeaLivePrivate
          : isBusinessType
            ? WS_KEY_MAP.eeaLiveBusiness
            : WS_KEY_MAP.eeaLivePublic;
      }
      case 'US': {
        return isPrivateType
          ? WS_KEY_MAP.usLivePrivate
          : isBusinessType
            ? WS_KEY_MAP.usLiveBusiness
            : WS_KEY_MAP.usLivePublic;
      }

      default: {
        throw neverGuard(
          this.options.market,
          `Unhandled market type "${this.options.market}"`,
        );
      }
    }
  }

  protected sendPingEvent(wsKey: WsKey): void {
    this.tryWsSend(wsKey, 'ping');
  }

  protected sendPongEvent(wsKey: WsKey): void {
    this.tryWsSend(wsKey, 'pong');
  }

  protected isWsPing(data: any): boolean {
    if (data?.data === 'ping') {
      return true;
    }
    return false;
  }

  protected isWsPong(data: any): boolean {
    return isWsPong(data);
  }

  protected isPrivateTopicRequest(
    _request: WsTopicRequest<string>,
    wsKey: WsKey,
  ): boolean {
    return PRIVATE_WS_KEYS.includes(wsKey);
  }

  protected getPrivateWSKeys(): WsKey[] {
    return PRIVATE_WS_KEYS;
  }

  protected isAuthOnConnectWsKey(wsKey: WsKey): boolean {
    return PRIVATE_WS_KEYS.includes(wsKey);
  }

  protected async getWsUrl(wsKey: WsKey): Promise<string> {
    return getWsUrlForWsKey(wsKey, this.options, this.logger);
  }

  protected getMaxTopicsPerSubscribeEvent(): number | null {
    return null;
  }

  /**
   * @returns one or more correctly structured request events for performing a operations over WS. This can vary per exchange spec.
   */
  protected async getWsRequestEvents(
    operation: WSOperation,
    requests: WsTopicRequest<string, object>[],
  ): Promise<MidflightWsRequestEvent<WsRequestOperationOKX<object>>[]> {
    const wsRequestBuildingErrors: unknown[] = [];

    const topics = requests.map(
      (r) => r.topic + ',' + Object.values(r.payload || {}).join(','),
    );

    // Previously used to track topics in a request. Keeping this for subscribe/unsubscribe requests, no need for incremental values
    const req_id =
      ['subscribe', 'unsubscribe'].includes(operation) && topics.length
        ? topics.join(',')
        : this.getNewRequestId().toFixed();

    /**
      {
        "op":"subscribe",
        "args":[
            {
              "channel": "tickers",
              "instId": "BTC-USDT"
            },
            {
              "channel": "tickers",
              "instId": "BTC-USDT"
            }
        ]
      }
    */
    const wsEvent: WsRequestOperationOKX<object> = {
      id: `${this.getNewRequestId()}`,
      op: operation,
      args: requests.map((request) => {
        // const request = {
        //   topic: 'tickers',
        //   payload: { instId: 'BTC-USDT' },
        // };
        // becomes:
        // const request = {
        //   channel: 'ticker',
        //   instId: 'BTC-USDT',
        // };
        return {
          channel: request.topic,
          ...request.payload,
        };
      }),
    };

    const midflightWsEvent: MidflightWsRequestEvent<
      WsRequestOperationOKX<object>
    > = {
      requestKey: req_id,
      requestEvent: wsEvent,
    };

    if (wsRequestBuildingErrors.length) {
      const label =
        wsRequestBuildingErrors.length === requests.length ? 'all' : 'some';

      this.logger.error(
        `Failed to build/send ${wsRequestBuildingErrors.length} event(s) for ${label} WS requests due to exceptions`,
        {
          ...WS_LOGGER_CATEGORY,
          wsRequestBuildingErrors,
          wsRequestBuildingErrorsStringified: JSON.stringify(
            wsRequestBuildingErrors,
            null,
            2,
          ),
        },
      );
    }

    return [midflightWsEvent];
  }

  private async signMessage(
    paramsStr: string,
    secret: string,
    method: SignEncodeMethod,
    algorithm: SignAlgorithm,
  ): Promise<string> {
    if (typeof this.options.customSignMessageFn === 'function') {
      return this.options.customSignMessageFn(paramsStr, secret);
    }
    return await signMessage(paramsStr, secret, method, algorithm);
  }

  protected async getWsAuthRequestEvent(
    wsKey: WsKey,
  ): Promise<WsRequestOperationOKX<WsAuthRequestArg>> {
    const isPublicWsKey = PUBLIC_WS_KEYS.includes(wsKey);
    const accounts = this.options.accounts;
    const hasAccountsToAuth = !!accounts?.length;
    if (isPublicWsKey || !accounts || !hasAccountsToAuth) {
      this.logger.trace('Starting public only websocket client.', {
        ...WS_LOGGER_CATEGORY,
        wsKey,
        isPublicWsKey,
        hasAccountsToAuth,
      });
      throw new Error('Cannot auth - missing api or secret or pass in config');
    }

    try {
      const authAccountRequests = accounts.map(async (credentials) => {
        try {
          const { signature, timestamp } = await this.getWsAuthSignature(
            wsKey,
            credentials,
          );

          return {
            apiKey: credentials.apiKey,
            passphrase: credentials.apiPass,
            timestamp: timestamp,
            sign: signature,
          };
        } catch (e: any) {
          this.logger.error(
            `Account with key ${credentials.apiKey} could not be authenticated: ${e}`,
            e?.stack,
          );
        }
        return;
      });

      const signedAuthAccountRequests = await Promise.all(authAccountRequests);

      // Filter out failed accounts
      const authRequests: WsAuthRequestArg[] = signedAuthAccountRequests.filter(
        (request): request is WsAuthRequestArg => !!request,
      );

      const authParams: WsAuthRequest = {
        id: `${this.getNewRequestId()}`,
        op: 'login',
        args: authRequests,
      };

      return authParams;
    } catch (e) {
      this.logger.error({
        ...WS_LOGGER_CATEGORY,
        wsKey,
        error: e,
      });
      throw e;
    }
  }

  private async getWsAuthSignature(
    wsKey: WsKey,
    credentials: APICredentials,
  ): Promise<{ signature: string; timestamp: string }> {
    const { apiKey, apiSecret } = credentials;

    if (!apiKey || !apiSecret) {
      this.logger.info(
        'Cannot authenticate websocket, either api or secret missing.',
        { ...WS_LOGGER_CATEGORY, wsKey },
      );
      throw new Error(
        `Cannot auth - missing api or secret in config (key: ${apiKey})`,
      );
    }

    this.logger.trace("Getting auth'd request params", {
      ...WS_LOGGER_CATEGORY,
      wsKey,
    });

    const timestamp = (Date.now() / 1000).toFixed(0);
    // const signatureExpiresAt = timestamp + 5;

    const signatureRequest = timestamp + 'GET' + '/users/self/verify';

    const signature = await this.signMessage(
      signatureRequest,
      apiSecret,
      'base64',
      'SHA-256',
    );

    return {
      signature,
      timestamp,
    };
  }

  /**
   * Abstraction called to sort ws events into emittable event types (response to a request, data update, etc)
   */
  protected resolveEmittableEvents(
    wsKey: WsKey,
    event: MessageEventLike,
  ): EmittableEvent[] {
    const results: EmittableEvent[] = [];

    const logContext = {
      ...WS_LOGGER_CATEGORY,
      wsKey,
      method: 'resolveEmittableEvents',
    };

    try {
      const msg = JSON.parse(event.data);
      const emittableEvent = { ...msg, wsKey };

      /**
       * WS API response handling
       */
      if (isWSAPIResponse(emittableEvent)) {
        // const eg1 = {
        //   id: '2',
        //   op: 'order',
        //   code: '1',
        //   msg: '',
        //   data: [
        //     {
        //       tag: '159881cb7207BCDE',
        //       ts: '1753783406701',
        //       ordId: '',
        //       clOrdId: '',
        //       sCode: '51008',
        //       sMsg: 'Order failed. Insufficient USDT balance in account.',
        //     },
        //   ],
        //   inTime: '1753783406701275',
        //   outTime: '1753783406702251',
        //   wsKey: 'prodPrivate',
        // };

        const retCode = emittableEvent.code;
        const reqId = emittableEvent.id;
        const isError = retCode !== '0';

        // check getPromiseRefForWSAPIRequest
        const promiseRef = [emittableEvent.id, emittableEvent.op].join('_');

        const loggableContext = {
          wsKey,
          promiseRef,
          parsedEvent: emittableEvent,
        };

        if (!reqId) {
          this.logger.error(
            'WS API response is missing reqId - promisified workflow could get stuck. If this happens, please get in touch with steps to reproduce. Trace:',
            loggableContext,
          );
        }

        if (isError) {
          try {
            this.getWsStore().rejectDeferredPromise(
              wsKey,
              promiseRef,
              emittableEvent,
              true,
            );
          } catch (e) {
            this.logger.error('Exception trying to reject WSAPI promise', {
              ...loggableContext,
              error: e,
            });
          }

          results.push({
            eventType: 'exception',
            event: emittableEvent,
            isWSAPIResponse: true,
          });
          return results;
        }

        // WS API Success
        try {
          this.getWsStore().resolveDeferredPromise(
            wsKey,
            promiseRef,
            emittableEvent,
            true,
          );
        } catch (e) {
          this.logger.error('Exception trying to resolve WSAPI promise', {
            ...loggableContext,
            error: e,
          });
        }

        results.push({
          eventType: 'response',
          event: emittableEvent,
          isWSAPIResponse: true,
        });

        return results;
      }

      if (isWsErrorEvent(msg)) {
        this.logger.error('WS Error received', {
          ...logContext,
          wsKey,
          message: msg || 'no message',
          // messageType: typeof msg,
          // messageString: JSON.stringify(msg),
          event,
        });
        results.push({
          eventType: 'exception',
          event: emittableEvent,
        });
        return results;
      }

      if (isWsDataEvent(msg)) {
        results.push({
          eventType: 'update',
          event: emittableEvent,
        });
        return results;
      }

      if (isWsLoginEvent(msg)) {
        // Successfully authenticated
        if (msg.code === WS_EVENT_CODE_ENUM.OK) {
          this.logger.info(
            `Authenticated successfully on wsKey(${wsKey})`,
            logContext,
          );

          results.push({
            eventType: 'response',
            event: emittableEvent,
          });
          results.push({
            eventType: 'authenticated',
            event: emittableEvent,
          });
          return results;
        }

        this.logger.error('Authentication failed: ', {
          ...logContext,
          ...msg,
          wsKey,
        });
        results.push({
          eventType: 'exception',
          event: emittableEvent,
        });
        return results;
      }

      if (isWsSubscribeEvent(msg) || isWsUnsubscribeEvent(msg)) {
        results.push({
          eventType: 'response',
          event: emittableEvent,
        });
        // this.logger.trace(`Ws subscribe reply:`, { ...msg, wsKey });
        return results;
      }

      if (isConnCountEvent(msg)) {
        results.push({
          eventType: 'response',
          event: emittableEvent,
        });
        return results;
      }

      this.logger.info('Unhandled/unrecognised ws event message', {
        ...WS_LOGGER_CATEGORY,
        message: msg || 'no message',
        // messageType: typeof msg,
        // messageString: JSON.stringify(msg),
        event,
        wsKey,
      });

      // fallback emit anyway
      results.push({
        eventType: 'update',
        event: emittableEvent,
      });
      return results;
    } catch (e) {
      this.logger.error('Failed to parse ws event message', {
        ...WS_LOGGER_CATEGORY,
        error: e,
        event,
        wsKey,
      });
    }

    return results;
  }

  /**
   * OKX supports order placement via WebSockets. This is the WS API:
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
   *
   * For convenient promise-wrapped usage of the WS API, instance the WebsocketAPIClient class exported by this SDK.
   *
   * For demo trading, set demoTrading:true in the WS Client config.
   *
   * @returns a promise that resolves/rejects when a matching response arrives
   */
  async sendWSAPIRequest<
    TWSKey extends keyof WsAPIWsKeyTopicMap,
    TWSOperation extends WsAPIWsKeyTopicMap[TWSKey],
    TWSParams extends WsAPITopicRequestParamMap[TWSOperation],
    TWSAPIResponse extends
      WsAPIOperationResponseMap[TWSOperation] = WsAPIOperationResponseMap[TWSOperation],
  >(
    rawWsKey: WsKey,
    operation: TWSOperation,
    params: TWSParams & { signRequest?: boolean },
    requestFlags?: WSAPIRequestFlags,
  ): Promise<TWSAPIResponse> {
    // If demo trading, enforce demo wskey for WS API calls
    const wsKey = this.options.demoTrading ? getDemoWsKey(rawWsKey) : rawWsKey;

    this.logger.trace(`sendWSAPIRequest(): assert "${wsKey}" is connected`);

    await this.assertIsConnected(wsKey);
    this.logger.trace('sendWSAPIRequest()->assertIsConnected() ok');

    if (requestFlags?.authIsOptional !== true) {
      this.logger.trace(
        'sendWSAPIRequest(): assertIsAuthenticated(${wsKey})...',
      );
      await this.assertIsAuthenticated(wsKey);
      this.logger.trace(
        'sendWSAPIRequest(): assertIsAuthenticated(${wsKey}) ok',
      );
    }

    const request: WSAPIRequestOKX<object> = {
      id: `${this.getNewRequestId()}`,
      op: operation,
      // Ensure "args" is always wrapped as array
      args: Array.isArray(params) ? params : [params],
    };

    if (requestFlags?.expTime) {
      request.expTime = requestFlags.expTime;
    }

    if (requiresWSAPITag(operation, wsKey)) {
      validateWSAPITag(request, wsKey);
    }

    // Store deferred promise, resolved within the "resolveEmittableEvents" method while parsing incoming events
    const promiseRef = getPromiseRefForWSAPIRequest(request);

    // Enriched WS API response includes wsKey & the request that was connected to the response
    type DeferredWSAPIResponse = TWSAPIResponse & {
      request: WSAPIRequestOKX<object> & { wsKey: WsKey };
    };

    const deferredPromise =
      this.getWsStore().createDeferredPromise<DeferredWSAPIResponse>(
        wsKey,
        promiseRef,
        false,
      );

    // Enrich returned promise with request context for easier debugging
    deferredPromise.promise
      ?.then((res) => {
        if (!Array.isArray(res)) {
          res.request = {
            wsKey,
            ...request,
          };
        }

        return res;
      })
      .catch((e) => {
        if (typeof e === 'string') {
          this.logger.error('Unexpected string thrown without Error object:', {
            e,
            wsKey,
            request,
          });
          return e;
        }
        e.request = {
          wsKey,
          operation,
          params: params,
        };
        // throw e;
        return e;
      });

    this.logger.trace(
      `sendWSAPIRequest(): sending raw request: ${JSON.stringify(request, null, 2)}`,
    );

    // Send event
    const throwExceptions = false;
    this.tryWsSend(wsKey, JSON.stringify(request), throwExceptions);

    this.logger.trace(
      `sendWSAPIRequest(): sent "${operation}" event with promiseRef(${promiseRef})`,
    );

    // Return deferred promise, so caller can await this call
    return deferredPromise.promise!;
  }
}
