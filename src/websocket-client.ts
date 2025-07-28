/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { EventEmitter } from 'events';
import WebSocket from 'isomorphic-ws';

import {
  APICredentials,
  MessageEventLike,
  WebsocketClientOptions,
  WsAuthRequestArg,
  WsChannelSubUnSubRequestArg,
  WSClientConfigurableOptions,
  WsDataEvent,
  WsSubRequest,
  WsUnsubRequest,
} from './types';
import {
  WsAuthRequest,
  WSOperation,
  WsRequestOperationOKX,
} from './types/websockets/ws-api';
import {
  DefaultLogger,
  getMaxTopicsPerSubscribeEventForMarket,
  getWsKeyForTopicChannel,
  isConnCountEvent,
  isWsDataEvent,
  isWsErrorEvent,
  isWsLoginEvent,
  isWsPong,
  isWsSubscribeEvent,
  isWsUnsubscribeEvent,
  PRIVATE_WS_KEYS,
  PUBLIC_WS_KEYS,
  WS_KEY_MAP,
} from './util';
import {
  BaseWebsocketClient,
  EmittableEvent,
  MidflightWsRequestEvent,
  WSClientEventMap,
} from './util/BaseWSClient';
import {
  SignAlgorithm,
  SignEncodeMethod,
  signMessage,
} from './util/webCryptoAPI';
import {
  getNormalisedTopicRequests,
  getWsKeyForMarket,
  getWsUrlForWsKey,
  safeTerminateWs,
  WS_EVENT_CODE_ENUM,
  WS_LOGGER_CATEGORY,
  WsKey,
  WsTopicRequest,
} from './util/websocket-util';
import WsStore from './util/WsStore';
import { WSConnectedResult, WsConnectionStateEnum } from './util/WsStore.types';

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
  // private wsStore: WsStore<WsKey, WsChannelSubUnSubRequestArg>;

  constructor(options: WSClientConfigurableOptions, logger?: DefaultLogger) {
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
  ): Promise<WebSocket | undefined> {
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
  ): Promise<WebSocket | undefined> {
    const isPrivate = true;
    const wsKey = getWsKeyForMarket(
      this.options.market,
      isPrivate,
      !!businessEndpoint,
    );
    return this.connect(WS_KEY_MAP[wsKey]);
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

  protected getMaxTopicsPerSubscribeEvent(wsKey: WsKey): number | null {
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

    console.log('Prepared wsEVENT: ', wsEvent);

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
        } catch (e) {
          this.logger.error(
            `Account with key ${credentials.apiKey} could not be authenticateD: ${e}`,
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
      this.logger.error(e, { ...WS_LOGGER_CATEGORY, wsKey });
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
      // if (isWSAPIResponse(emittableEvent)) {
      //   // const eg1 = {
      //   //   event: 'error',
      //   //   id: '1',
      //   //   code: '43012',
      //   //   msg: 'Insufficient balance',
      //   // };

      //   const retCode = emittableEvent.code;
      //   const reqId = emittableEvent.id;
      //   const isError = retCode !== '0';

      //   const promiseRef = [emittableEvent.id].join('_');

      //   const loggableContext = {
      //     wsKey,
      //     promiseRef,
      //     parsedEvent: emittableEvent,
      //   };

      //   if (!reqId) {
      //     this.logger.error(
      //       'WS API response is missing reqId - promisified workflow could get stuck. If this happens, please get in touch with steps to reproduce. Trace:',
      //       loggableContext,
      //     );
      //   }

      //   if (isError) {
      //     try {
      //       this.getWsStore().rejectDeferredPromise(
      //         wsKey,
      //         promiseRef,
      //         emittableEvent,
      //         true,
      //       );
      //     } catch (e) {
      //       this.logger.error('Exception trying to reject WSAPI promise', {
      //         ...loggableContext,
      //         error: e,
      //       });
      //     }

      //     results.push({
      //       eventType: 'exception',
      //       event: emittableEvent,
      //       isWSAPIResponse: true,
      //     });
      //     return results;
      //   }

      //   // WS API Success
      //   try {
      //     this.getWsStore().resolveDeferredPromise(
      //       wsKey,
      //       promiseRef,
      //       emittableEvent,
      //       true,
      //     );
      //   } catch (e) {
      //     this.logger.error('Exception trying to resolve WSAPI promise', {
      //       ...loggableContext,
      //       error: e,
      //     });
      //   }

      //   results.push({
      //     eventType: 'response',
      //     event: emittableEvent,
      //     isWSAPIResponse: true,
      //   });

      //   return results;
      // }

      if (isWsErrorEvent(msg)) {
        this.logger.error('WS error event: ', { ...msg, wsKey });

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

  async sendWSAPIRequest(wsKey: WsKey): Promise<unknown> {
    throw new Error('not supported yet');
  }

  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  // private parseWsError(context: string, error: any, wsKey: WsKey) {
  //   if (!error.message) {
  //     this.logger.error(`${context} due to unexpected error: `, error);
  //     this.emit('exception', error);
  //     return;
  //   }

  //   switch (error.message) {
  //     default:
  //       if (
  //         this.getWsStore().getConnectionState(wsKey) !==
  //         WsConnectionStateEnum.CLOSING
  //       ) {
  //         this.logger.error(
  //           `${context} due to unexpected response error: "${
  //             error?.msg || error?.message || error
  //           }"`,
  //           { ...WS_LOGGER_CATEGORY, wsKey, error },
  //         );
  //         this.executeReconnectableClose(wsKey, 'unhandled onWsError');
  //       } else {
  //         this.logger.info(
  //           `${wsKey} socket forcefully closed. Will not reconnect.`,
  //         );
  //       }
  //       break;
  //   }
  //   this.emit('exception', error);
  // }

  // /**
  //  * Return params required to make authorized request
  //  */
  // private async getWsAuthRequest(
  //   wsKey: WsKey,
  // ): Promise<WsAuthRequest | undefined> {
  //   const isPublicWsKey = PUBLIC_WS_KEYS.includes(wsKey);
  //   const accounts = this.options.accounts;
  //   const hasAccountsToAuth = !!accounts?.length;
  //   if (isPublicWsKey || !accounts || !hasAccountsToAuth) {
  //     this.logger.trace('Starting public only websocket client.', {
  //       ...WS_LOGGER_CATEGORY,
  //       wsKey,
  //       isPublicWsKey,
  //       hasAccountsToAuth,
  //     });
  //     return;
  //   }

  //   try {
  //     const authAccountRequests = accounts.map(async (credentials) => {
  //       try {
  //         const { signature, timestamp } = await this.getWsAuthSignature(
  //           wsKey,
  //           credentials,
  //         );

  //         return {
  //           apiKey: credentials.apiKey,
  //           passphrase: credentials.apiPass,
  //           timestamp: timestamp,
  //           sign: signature,
  //         };
  //       } catch (e) {
  //         this.logger.error(
  //           `Account with key ${credentials.apiKey} could not be authenticateD: ${e}`,
  //         );
  //       }
  //       return;
  //     });

  //     const signedAuthAccountRequests = await Promise.all(authAccountRequests);

  //     // Filter out failed accounts
  //     const authRequests: WsAuthRequestArg[] = signedAuthAccountRequests.filter(
  //       (request): request is WsAuthRequestArg => !!request,
  //     );

  //     const authParams: WsAuthRequest = {
  //       id: `${this.getNewRequestId()}`,
  //       op: 'login',
  //       args: authRequests,
  //     };

  //     return authParams;
  //   } catch (e) {
  //     this.logger.error(e, { ...WS_LOGGER_CATEGORY, wsKey });
  //     return;
  //   }
  // }

  // private async sendAuthRequest(wsKey: WsKey): Promise<void> {
  //   const logContext = {
  //     ...WS_LOGGER_CATEGORY,
  //     wsKey,
  //     method: 'sendAuthRequest',
  //   };
  //   this.logger.info('Sending auth request...', logContext);
  //   try {
  //     const authRequest = await this.getWsAuthRequest(wsKey);
  //     if (!authRequest) {
  //       throw new Error('Cannot authenticate this connection');
  //     }
  //     this.logger.info(
  //       `Sending authentication request on wsKey(${wsKey})`,
  //       logContext,
  //     );
  //     this.logger.trace(
  //       `Authenticating with event: ${JSON.stringify(
  //         authRequest,
  //         null,
  //         2,
  //       )} on wsKey(${wsKey})`,
  //       logContext,
  //     );
  //     return this.tryWsSend(wsKey, JSON.stringify(authRequest));
  //   } catch (e) {
  //     this.logger.error(e, logContext);
  //   }
  // }
}
