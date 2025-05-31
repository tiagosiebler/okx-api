/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { EventEmitter } from 'events';
import WebSocket from 'isomorphic-ws';

import {
  APICredentials,
  WebsocketClientOptions,
  WsAuthRequest,
  WsAuthRequestArg,
  WsChannelSubUnSubRequestArg,
  WSClientConfigurableOptions,
  WsDataEvent,
  WsEvent,
  WsSubRequest,
  WsUnsubRequest,
} from './types';
import {
  DefaultLogger,
  getMaxTopicsPerSubscribeEvent,
  getWsKeyForTopicChannel,
  isConnCountEvent,
  isWsDataEvent,
  isWsErrorEvent,
  isWsLoginEvent,
  isWsOrderEvent,
  isWsPong,
  isWsSubscribeEvent,
  isWsUnsubscribeEvent,
  PRIVATE_WS_KEYS,
  PUBLIC_WS_KEYS,
  WS_KEY_MAP,
  WsConnectionStateEnum,
  WsStore,
} from './util';
import { signMessage } from './util/node-support';
import {
  getWsKeyForMarket,
  getWsUrlForWsKey,
  safeTerminateWs,
  WS_EVENT_CODE_ENUM,
  WsKey,
} from './util/websocket-util';

const loggerCategory = { category: 'okx-ws' };

export type WsClientEvent =
  | 'open'
  | 'update'
  | 'close'
  | 'error'
  | 'reconnect'
  | 'reconnected'
  | 'response';

type WsKeyObject = { wsKey: WsKey };

interface WebsocketClientEvents {
  /** Connection opened. If this connection was previously opened and reconnected, expect the reconnected event instead */
  open: (evt: { event: any } & WsKeyObject) => void;
  /** Reconnecting a dropped connection */
  reconnect: (evt: { event: any } & WsKeyObject) => void;
  /** Successfully reconnected a connection that dropped */
  reconnected: (evt: { event: any } & WsKeyObject) => void;
  /** Connection closed */
  close: (evt: { event: any } & WsKeyObject) => void;
  /** Received reply to websocket command (e.g. after subscribing to topics or authenticating) */
  response: (response: WsEvent & WsKeyObject) => void;
  /** Received data for a topic/channel */
  update: (response: WsDataEvent & WsKeyObject) => void;
  /** Exception from ws client OR custom listeners */
  error: (response: any) => void;
}

// Type safety for on and emit handlers: https://stackoverflow.com/a/61609010/880837
export declare interface WebsocketClient {
  on<U extends keyof WebsocketClientEvents>(
    event: U,
    listener: WebsocketClientEvents[U],
  ): this;

  emit<U extends keyof WebsocketClientEvents>(
    event: U,
    ...args: Parameters<WebsocketClientEvents[U]>
  ): boolean;
}

export class WebsocketClient extends EventEmitter {
  private logger: typeof DefaultLogger;

  private options: WebsocketClientOptions;

  private wsStore: WsStore<WsChannelSubUnSubRequestArg>;

  constructor(
    options: WSClientConfigurableOptions,
    logger?: typeof DefaultLogger,
  ) {
    super();

    this.logger = logger || DefaultLogger;
    this.wsStore = new WsStore(this.logger);

    this.options = {
      market: 'prod',
      pongTimeout: 2000,
      pingInterval: 10000,
      reconnectTimeout: 500,
      ...options,
    };

    // add default error handling so this doesn't crash node (if the user didn't set a handler)
    this.on('error', () => {});
  }

  /**
   * Subscribe to topics & track/persist them. They will be automatically resubscribed to if the connection drops/reconnects.
   * @param wsEvents topic or list of topics
   * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
   */
  public subscribe(
    wsEvents: WsChannelSubUnSubRequestArg[] | WsChannelSubUnSubRequestArg,
    isPrivateTopic?: boolean,
  ) {
    const wsEventArgs = Array.isArray(wsEvents) ? wsEvents : [wsEvents];

    wsEventArgs.forEach((wsEventArg) => {
      const wsKey = getWsKeyForTopicChannel(
        this.options.market,
        wsEventArg.channel,
        isPrivateTopic,
      );

      // Persist topic for reconnects
      this.wsStore.addComplexTopic(wsKey, wsEventArg);

      // if connected, send subscription request
      if (
        this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.CONNECTED)
      ) {
        return this.requestSubscribeTopics(wsKey, [wsEventArg]);
      }

      // start connection process if it hasn't yet begun. Topics are automatically subscribed to on-connect
      if (
        !this.wsStore.isConnectionState(
          wsKey,
          WsConnectionStateEnum.CONNECTING,
        ) &&
        !this.wsStore.isConnectionState(
          wsKey,
          WsConnectionStateEnum.RECONNECTING,
        )
      ) {
        return this.connect(wsKey);
      }
    });
  }

  /**
   * Unsubscribe from topics & remove them from memory. They won't be re-subscribed to if the connection reconnects.
   * @param wsTopics topic or list of topics
   * @param isPrivateTopic optional - the library will try to detect private topics, you can use this to mark a topic as private (if the topic isn't recognised yet)
   */
  public unsubscribe(
    wsTopics: WsChannelSubUnSubRequestArg[] | WsChannelSubUnSubRequestArg,
    isPrivateTopic?: boolean,
  ) {
    const wsEventArgs = Array.isArray(wsTopics) ? wsTopics : [wsTopics];
    wsEventArgs.forEach((wsEventArg) => {
      const wsKey = getWsKeyForTopicChannel(
        this.options.market,
        wsEventArg.channel,
        isPrivateTopic,
      );

      // Remove topic from persistence for reconnects
      this.wsStore.deleteComplexTopic(wsKey, wsEventArg);

      // unsubscribe request only necessary if active connection exists
      if (
        this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.CONNECTED)
      ) {
        this.requestUnsubscribeTopics(wsKey, [wsEventArg]);
      }
    });
  }

  /** Get the WsStore that tracks websocket & topic state */
  public getWsStore(): WsStore<WsChannelSubUnSubRequestArg> {
    return this.wsStore;
  }

  public close(wsKey: WsKey, force?: boolean) {
    this.logger.info('Closing connection', { ...loggerCategory, wsKey });
    this.wsStore.setConnectionState(wsKey, WsConnectionStateEnum.CLOSING);
    this.clearTimers(wsKey);

    const ws = this.wsStore.getWs(wsKey);
    ws?.close();
    if (force) {
      safeTerminateWs(ws);
    }
  }

  public closeAll(force?: boolean) {
    const keys = this.wsStore.getKeys();
    this.logger.info(`Closing all ws connections: ${keys}`);
    keys.forEach((key) => {
      this.close(key, force);
    });
  }

  /**
   * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
   */
  public connectAll(): Promise<WebSocket | undefined>[] {
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

  private async connect(wsKey: WsKey): Promise<WebSocket | undefined> {
    try {
      if (this.wsStore.isWsOpen(wsKey)) {
        this.logger.error(
          'Refused to connect to ws with existing active connection',
          { ...loggerCategory, wsKey },
        );
        return this.wsStore.getWs(wsKey);
      }

      if (
        this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.CONNECTING)
      ) {
        this.logger.error(
          'Refused to connect to ws, connection attempt already active',
          { ...loggerCategory, wsKey },
        );
        return;
      }

      if (
        !this.wsStore.getConnectionState(wsKey) ||
        this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.INITIAL)
      ) {
        this.wsStore.setConnectionState(
          wsKey,
          WsConnectionStateEnum.CONNECTING,
        );
      }

      const url = getWsUrlForWsKey(wsKey, this.options, this.logger);
      const ws = this.connectToWsUrl(url, wsKey);

      return this.wsStore.setWs(wsKey, ws);
    } catch (err) {
      this.parseWsError('Connection failed', err, wsKey);
      this.reconnectWithDelay(wsKey, this.options.reconnectTimeout);
    }
  }

  private parseWsError(context: string, error: any, wsKey: WsKey) {
    if (!error.message) {
      this.logger.error(`${context} due to unexpected error: `, error);
      this.emit('error', error);
      return;
    }

    switch (error.message) {
      default:
        if (
          this.wsStore.getConnectionState(wsKey) !==
          WsConnectionStateEnum.CLOSING
        ) {
          this.logger.error(
            `${context} due to unexpected response error: "${
              error?.msg || error?.message || error
            }"`,
            { ...loggerCategory, wsKey, error },
          );
          this.executeReconnectableClose(wsKey, 'unhandled onWsError');
        } else {
          this.logger.info(
            `${wsKey} socket forcefully closed. Will not reconnect.`,
          );
        }
        break;
    }
    this.emit('error', error);
  }

  /**
   * Return params required to make authorized request
   */
  private async getWsAuthRequest(
    wsKey: WsKey,
  ): Promise<WsAuthRequest | undefined> {
    const isPublicWsKey = PUBLIC_WS_KEYS.includes(wsKey);
    const accounts = this.options.accounts;
    const hasAccountsToAuth = !!accounts?.length;
    if (isPublicWsKey || !accounts || !hasAccountsToAuth) {
      this.logger.debug('Starting public only websocket client.', {
        ...loggerCategory,
        wsKey,
        isPublicWsKey,
        hasAccountsToAuth,
      });
      return;
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
        op: 'login',
        args: authRequests,
      };

      return authParams;
    } catch (e) {
      this.logger.error(e, { ...loggerCategory, wsKey });
      return;
    }
  }

  private async getWsAuthSignature(
    wsKey: WsKey,
    credentials: APICredentials,
  ): Promise<{ signature: string; timestamp: string }> {
    const { apiKey, apiSecret } = credentials;

    if (!apiKey || !apiSecret) {
      this.logger.warning(
        'Cannot authenticate websocket, either api or secret missing.',
        { ...loggerCategory, wsKey },
      );
      throw new Error(
        `Cannot auth - missing api or secret in config (key: ${apiKey})`,
      );
    }

    this.logger.debug("Getting auth'd request params", {
      ...loggerCategory,
      wsKey,
    });

    const timestamp = (Date.now() / 1000).toFixed(0);
    // const signatureExpiresAt = timestamp + 5;

    const signatureRequest = timestamp + 'GET' + '/users/self/verify';

    const signature = await signMessage(signatureRequest, apiSecret);

    return {
      signature,
      timestamp,
    };
  }

  private async sendAuthRequest(wsKey: WsKey): Promise<void> {
    const logContext = { ...loggerCategory, wsKey, method: 'sendAuthRequest' };
    this.logger.info('Sending auth request...', logContext);
    try {
      const authRequest = await this.getWsAuthRequest(wsKey);
      if (!authRequest) {
        throw new Error('Cannot authenticate this connection');
      }
      this.logger.info(
        `Sending authentication request on wsKey(${wsKey})`,
        logContext,
      );
      this.logger.silly(
        `Authenticating with event: ${JSON.stringify(
          authRequest,
          null,
          2,
        )} on wsKey(${wsKey})`,
        logContext,
      );
      return this.tryWsSend(wsKey, JSON.stringify(authRequest));
    } catch (e) {
      this.logger.error(e, logContext);
    }
  }

  private reconnectWithDelay(wsKey: WsKey, connectionDelayMs: number) {
    this.clearTimers(wsKey);

    if (
      this.wsStore.getConnectionState(wsKey) !==
      WsConnectionStateEnum.CONNECTING
    ) {
      this.wsStore.setConnectionState(
        wsKey,
        WsConnectionStateEnum.RECONNECTING,
      );
    }

    if (this.wsStore.get(wsKey)?.activeReconnectTimer) {
      this.clearReconnectTimer(wsKey);
    }

    this.wsStore.get(wsKey, true).activeReconnectTimer = setTimeout(() => {
      this.logger.info('Reconnecting to websocket', {
        ...loggerCategory,
        wsKey,
      });
      this.clearReconnectTimer(wsKey);
      this.connect(wsKey);
    }, connectionDelayMs);
  }

  private ping(wsKey: WsKey) {
    if (this.wsStore.get(wsKey, true).activePongTimer) {
      return;
    }

    this.clearPongTimer(wsKey);

    this.logger.silly('Sending ping', { ...loggerCategory, wsKey });
    this.tryWsSend(wsKey, 'ping');

    this.wsStore.get(wsKey, true).activePongTimer = setTimeout(
      () => this.executeReconnectableClose(wsKey, 'Pong timeout'),
      this.options.pongTimeout,
    );
  }

  /**
   * Closes a connection, if it's even open. If open, this will trigger a reconnect asynchronously.
   * If closed, trigger a reconnect immediately
   */
  private executeReconnectableClose(wsKey: WsKey, reason: string) {
    this.logger.info(`${reason} - closing socket to reconnect`, {
      ...loggerCategory,
      wsKey,
      reason,
    });

    const wasOpen = this.wsStore.isWsOpen(wsKey);
    if (wasOpen) {
      safeTerminateWs(this.wsStore.getWs(wsKey), true);
    }

    delete this.wsStore.get(wsKey, true).activePongTimer;
    this.clearPingTimer(wsKey);
    this.clearPongTimer(wsKey);

    if (!wasOpen) {
      this.logger.info(
        `${reason} - socket already closed - trigger immediate reconnect`,
        {
          ...loggerCategory,
          wsKey,
          reason,
        },
      );
      this.reconnectWithDelay(wsKey, this.options.reconnectTimeout);
    }
  }

  private clearTimers(wsKey: WsKey) {
    this.clearPingTimer(wsKey);
    this.clearPongTimer(wsKey);
    this.clearReconnectTimer(wsKey);
  }

  // Send a ping at intervals
  private clearPingTimer(wsKey: WsKey) {
    const wsState = this.wsStore.get(wsKey);
    if (wsState?.activePingTimer) {
      clearInterval(wsState.activePingTimer);
      wsState.activePingTimer = undefined;
    }
  }

  // Expect a pong within a time limit
  private clearPongTimer(wsKey: WsKey) {
    const wsState = this.wsStore.get(wsKey);
    if (wsState?.activePongTimer) {
      clearTimeout(wsState.activePongTimer);
      wsState.activePongTimer = undefined;
    }
  }

  private clearReconnectTimer(wsKey: WsKey) {
    const wsState = this.wsStore.get(wsKey);
    if (wsState?.activeReconnectTimer) {
      clearTimeout(wsState.activeReconnectTimer);
      wsState.activeReconnectTimer = undefined;
    }
  }

  /**
   * @private Use the `subscribe(topics)` method to subscribe to topics. Send WS message to subscribe to topics.
   */
  private requestSubscribeTopics(
    wsKey: WsKey,
    topics: WsChannelSubUnSubRequestArg[],
  ) {
    if (!topics.length) {
      return;
    }

    const maxTopicsPerEvent = getMaxTopicsPerSubscribeEvent(
      this.options.market,
    );
    if (maxTopicsPerEvent && topics.length > maxTopicsPerEvent) {
      this.logger.silly(
        `Subscribing to topics in batches of ${maxTopicsPerEvent}`,
      );
      for (let i = 0; i < topics.length; i += maxTopicsPerEvent) {
        const batch = topics.slice(i, i + maxTopicsPerEvent);
        this.logger.silly(`Subscribing to batch of ${batch.length}`);
        this.requestSubscribeTopics(wsKey, batch);
      }
      this.logger.silly(
        `Finished batch subscribing to ${topics.length} topics`,
      );
      return;
    }

    const request: WsSubRequest = {
      op: 'subscribe',
      args: topics,
    };

    const wsMessage = JSON.stringify(request);

    this.tryWsSend(wsKey, wsMessage);
  }

  /**
   * @private Use the `unsubscribe(topics)` method to unsubscribe from topics. Send WS message to unsubscribe from topics.
   */
  private requestUnsubscribeTopics(
    wsKey: WsKey,
    topics: WsChannelSubUnSubRequestArg[],
  ) {
    if (!topics.length) {
      return;
    }

    const maxTopicsPerEvent = getMaxTopicsPerSubscribeEvent(
      this.options.market,
    );
    if (maxTopicsPerEvent && topics.length > maxTopicsPerEvent) {
      this.logger.silly(
        `Unsubscribing to topics in batches of ${maxTopicsPerEvent}`,
      );
      for (let i = 0; i < topics.length; i += maxTopicsPerEvent) {
        const batch = topics.slice(i, i + maxTopicsPerEvent);
        this.logger.silly(`Unsubscribing to batch of ${batch.length}`);
        this.requestUnsubscribeTopics(wsKey, batch);
      }
      this.logger.silly(
        `Finished batch unsubscribing to ${topics.length} topics`,
      );
      return;
    }

    const request: WsUnsubRequest = {
      op: 'unsubscribe',
      args: topics,
    };

    const wsMessage = JSON.stringify(request);

    this.tryWsSend(wsKey, wsMessage);
  }

  public tryWsSend(wsKey: WsKey, wsMessage: string): void {
    try {
      this.logger.silly('Sending upstream ws message: ', {
        ...loggerCategory,
        wsMessage,
        wsKey,
      });
      if (!wsKey) {
        throw new Error(
          `Cannot send message (wsKey not provided: wsKey(${wsKey}))`,
        );
      }

      const ws = this.wsStore.getWs(wsKey);
      if (!ws) {
        throw new Error(
          `${wsKey} socket not connected yet, call "connect(${wsKey}) first then try again when the "open" event arrives`,
        );
      }
      ws.send(wsMessage);
    } catch (e) {
      this.logger.error('Failed to send WS message', {
        ...loggerCategory,
        wsMessage,
        wsKey,
        exception: e,
      });
    }
  }

  private connectToWsUrl(url: string, wsKey: WsKey): WebSocket {
    this.logger.silly(`Opening WS connection to URL: ${url}`, {
      ...loggerCategory,
      wsKey,
    });

    const agent = this.options.requestOptions?.agent;
    const ws = new WebSocket(url, undefined, agent ? { agent } : undefined);
    ws.onopen = (event) => this.onWsOpen(event, wsKey);
    ws.onmessage = (event) => this.onWsMessage(event, wsKey);
    ws.onerror = (event) =>
      this.parseWsError('Websocket onWsError', event, wsKey);
    ws.onclose = (event) => this.onWsClose(event, wsKey);

    return ws;
  }

  private async onWsOpen(event: unknown, wsKey: WsKey) {
    if (
      this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.CONNECTING)
    ) {
      this.logger.info('Websocket connected', {
        ...loggerCategory,
        wsKey,
        market: this.options.market,
      });
      this.emit('open', { wsKey, event });
    } else if (
      this.wsStore.isConnectionState(wsKey, WsConnectionStateEnum.RECONNECTING)
    ) {
      this.logger.info('Websocket reconnected', { ...loggerCategory, wsKey });
      this.emit('reconnected', { wsKey, event });
    }

    this.wsStore.setConnectionState(wsKey, WsConnectionStateEnum.CONNECTED);
    this.wsStore.get(wsKey, true)!.activePingTimer = setInterval(
      () => this.ping(wsKey),
      this.options.pingInterval,
    );

    // Private websockets require an auth packet to be sent after opening the connection
    if (PRIVATE_WS_KEYS.includes(wsKey)) {
      // Any requested private topics will be subscribed to once authentication succeeds (in onWsMessage handler)
      await this.sendAuthRequest(wsKey);

      // Private topics will be subscribed to once authentication is confirmed as successful
      return;
    }

    // Public topics can be subscribed to immediately
    const topics = [
      ...this.wsStore.getTopics(wsKey),
    ] as WsChannelSubUnSubRequestArg[];

    // Since public channels have their own ws key, these topics must be public ones already
    this.requestSubscribeTopics(wsKey, topics);
  }

  private onWsMessage(event: any, wsKey: WsKey) {
    const logContext = { ...loggerCategory, wsKey, method: 'onWsMessage' };

    try {
      // any message can clear the pong timer - wouldn't get a message if the ws dropped
      this.clearPongTimer(wsKey);

      if (isWsPong(event)) {
        this.logger.silly('Received pong', logContext);
        return;
      }

      const msg = JSON.parse(event?.data || event);

      if (isWsErrorEvent(msg)) {
        this.logger.error('WS error event: ', { ...msg, wsKey });
        return this.emit('error', { ...msg, wsKey });
      }

      if (isWsDataEvent(msg)) {
        return this.emit('update', { ...msg, wsKey });
      }

      if (isWsLoginEvent(msg)) {
        // Successfully authenticated
        if (msg.code === WS_EVENT_CODE_ENUM.OK) {
          this.logger.info(
            `Authenticated successfully on wsKey(${wsKey})`,
            logContext,
          );
          this.emit('response', { ...msg, wsKey });

          const topics = [
            ...this.wsStore.getTopics(wsKey),
          ] as WsChannelSubUnSubRequestArg[];

          // Since private topics have a dedicated WsKey, these are automatically all private topics (no filtering required before the subscribe call)
          this.requestSubscribeTopics(wsKey, topics);

          return;
        }

        this.logger.error('Authentication failed: ', {
          ...logContext,
          ...msg,
          wsKey,
        });
        return this.emit('error', { ...msg, wsKey });
      }

      if (isWsSubscribeEvent(msg) || isWsUnsubscribeEvent(msg)) {
        // this.logger.silly(`Ws subscribe reply:`, { ...msg, wsKey });
        return this.emit('response', { ...msg, wsKey });
      }

      if (isConnCountEvent(msg)) {
        return this.emit('response', { ...msg, wsKey });
      }

      if (isWsOrderEvent(msg)) {
        return this.emit('response', {
          data: msg.data,
          event: msg.op,
          code: msg.code,
          msg: msg.msg,
          arg: {
            uid: msg.id,
          },
          wsKey,
        });
      }

      this.logger.error('Unhandled/unrecognised ws event message', {
        ...logContext,
        eventName: msg.event,
        msg: JSON.stringify(msg, null, 2),
        wsKey,
      });
    } catch (e) {
      this.logger.error('Failed to parse ws event message', {
        ...logContext,
        error: e,
        event,
        wsKey,
      });
    }
  }

  private onWsClose(event, wsKey: WsKey) {
    this.logger.info('Websocket connection closed', {
      ...loggerCategory,
      wsKey,
    });

    if (
      this.wsStore.getConnectionState(wsKey) !== WsConnectionStateEnum.CLOSING
    ) {
      this.reconnectWithDelay(wsKey, this.options.reconnectTimeout);
      this.emit('reconnect', { wsKey, event });
    } else {
      this.wsStore.setConnectionState(wsKey, WsConnectionStateEnum.INITIAL);
      this.emit('close', { wsKey, event });
    }
  }
}
