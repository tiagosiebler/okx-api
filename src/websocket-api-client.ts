import {
  OrderResult,
  WSAPIResponse,
  WSClientConfigurableOptions,
} from './types';
import { WSAPIPlaceOrderRequestV5 } from './types/websockets/ws-api-request';
import { DefaultLogger, neverGuard, WS_KEY_MAP, WsKey } from './util';
import { WebsocketClient } from './websocket-client';

/**
 * Configurable options specific to only the REST-like WebsocketAPIClient
 */
export interface WSAPIClientConfigurableOptions {
  /**
   * Default: true
   *
   * Attach default event listeners, which will console log any high level
   * events (opened/reconnecting/reconnected/etc).
   *
   * If you disable this, you should set your own event listeners
   * on the embedded WS Client `wsApiClient.getWSClient().on(....)`.
   */
  attachEventListeners: boolean;
}

/**
 * This is a minimal Websocket API wrapper around the WebsocketClient. It allows you to use the WebSocket API in a promise-driven way, send a request and await the response.
 *
 * Note: You can also directly use the sendWSAPIRequest() method to make WS API calls, but some
 * may find the below methods slightly more intuitive.
 *
 * Refer to the WS API promises example for a more detailed example on using sendWSAPIRequest() directly:
 * https://github.com/tiagosiebler/okx-api/blob/master/examples/ws-api-trade-raw.ts
 */
export class WebsocketAPIClient {
  private wsClient: WebsocketClient;

  private options: WSClientConfigurableOptions & WSAPIClientConfigurableOptions;

  constructor(
    options?: WSClientConfigurableOptions &
      Partial<WSAPIClientConfigurableOptions>,
    logger?: DefaultLogger,
  ) {
    this.wsClient = new WebsocketClient(options, logger);

    this.options = {
      attachEventListeners: true,
      ...options,
    };

    this.setupDefaultEventListeners();
  }

  public getWSClient(): WebsocketClient {
    return this.wsClient;
  }

  public setTimeOffsetMs(newOffset: number): void {
    return this.getWSClient().setTimeOffsetMs(newOffset);
  }

  private getMarketWsKey(type: 'private' | 'business'): WsKey {
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

  /**
   *
   *
   * OKX WebSocket API Methods
   *
   *
   */

  /**
   * Submit a new order
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
   */
  submitNewOrder(
    params: WSAPIPlaceOrderRequestV5,
  ): Promise<WSAPIResponse<[OrderResult], 'order'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getMarketWsKey('private'),
      'order',
      params,
    );
  }

  /**
   *
   *
   *
   *
   *
   *
   *
   * Private methods for handling some of the convenience/automation provided by the WS API Client
   *
   *
   *
   *
   *
   *
   *
   */

  private setupDefaultEventListeners() {
    if (this.options.attachEventListeners) {
      /**
       * General event handlers for monitoring the WebsocketClient
       */
      this.wsClient
        .on('open', (data) => {
          console.log(new Date(), 'ws connected', data.wsKey);
        })
        .on('reconnect', ({ wsKey }) => {
          console.log(new Date(), 'ws automatically reconnecting.... ', wsKey);
        })
        .on('reconnected', (data) => {
          console.log(new Date(), 'ws has reconnected ', data?.wsKey);
        })
        .on('authenticated', (data) => {
          console.info(new Date(), 'ws has authenticated ', data?.wsKey);
        })
        .on('exception', (data) => {
          console.error(new Date(), 'ws exception: ', JSON.stringify(data));
        });
    }
  }
}
