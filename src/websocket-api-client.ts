import {
  OrderIdRequest,
  OrderResult,
  WSAPIResponse,
  WSClientConfigurableOptions,
} from './types';
import {
  WSAPIAmendOrderRequestV5,
  WSAPIAmendSpreadOrderRequestV5,
  WSAPICancelSpreadOrderRequestV5,
  WSAPIMassCancelOrdersRequestV5,
  WSAPIPlaceOrderRequestV5,
  WSAPIPlaceSpreadOrderRequestV5,
  WSAPISpreadMassCancelOrdersRequestV5,
} from './types/websockets/ws-api-request';
import {
  WSAPICancelOrderResultV5,
  WSAPISpreadAmendOrderResultV5,
  WSAPISpreadCancelOrderResultV5,
  WSAPISpreadPlaceOrderResultV5,
} from './types/websockets/ws-api-response';
import { DefaultLogger } from './util';
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
      this.getWSClient().getMarketWsKey('private'),
      'order',
      params,
    );
  }

  /**
   * Submit multiple orders in a batch
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
   */
  submitMultipleOrders(
    params: WSAPIPlaceOrderRequestV5[],
  ): Promise<WSAPIResponse<OrderResult[], 'batch-orders'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'batch-orders',
      params,
    );
  }

  /**
   * Cancel a single order
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-order
   */
  cancelOrder(
    params: OrderIdRequest,
  ): Promise<WSAPIResponse<[WSAPICancelOrderResultV5], 'cancel-order'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'cancel-order',
      params,
    );
  }

  /**
   * Cancel multiple orders
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-multiple-orders
   */
  cancelMultipleOrders(
    params: OrderIdRequest[],
  ): Promise<WSAPIResponse<WSAPICancelOrderResultV5[], 'batch-cancel-orders'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'batch-cancel-orders',
      params,
    );
  }

  /**
   * Amend a single order
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-order
   */
  amendOrder(
    params: WSAPIAmendOrderRequestV5,
  ): Promise<WSAPIResponse<[OrderResult], 'amend-order'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'amend-order',
      params,
    );
  }

  /**
   * Amend multiple orders
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-multiple-orders
   */
  amendMultipleOrders(
    params: WSAPIAmendOrderRequestV5[],
  ): Promise<WSAPIResponse<[OrderResult], 'batch-amend-orders'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'batch-amend-orders',
      params,
    );
  }

  /**
   * Mass cancel orders
   *
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-mass-cancel-order
   */
  massCancelOrders(
    params: WSAPIMassCancelOrdersRequestV5,
  ): Promise<WSAPIResponse<[{ result: boolean }], 'mass-cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('private'),
      'mass-cancel',
      params,
    );
  }

  /**
   * Submit a new spread order
   *
   * https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-place-order
   */
  submitSpreadOrder(
    params: WSAPIPlaceSpreadOrderRequestV5,
  ): Promise<WSAPIResponse<[WSAPISpreadPlaceOrderResultV5], 'sprd-order'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('business'),
      'sprd-order',
      params,
    );
  }

  /**
   * Amend a spread order
   *
   * https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-amend-order
   */
  amendSpreadOrder(
    params: WSAPIAmendSpreadOrderRequestV5,
  ): Promise<
    WSAPIResponse<[WSAPISpreadAmendOrderResultV5], 'sprd-amend-order'>
  > {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('business'),
      'sprd-amend-order',
      params,
    );
  }

  /**
   * Cancel a spread order
   *
   * https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-order
   */
  cancelSpreadOrder(
    params: WSAPICancelSpreadOrderRequestV5,
  ): Promise<
    WSAPIResponse<[WSAPISpreadCancelOrderResultV5], 'sprd-cancel-order'>
  > {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('business'),
      'sprd-cancel-order',
      params,
    );
  }

  /**
   * Mass cancel spread orders
   *
   * https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-all-orders
   */
  massCancelSpreadOrders(
    params: WSAPISpreadMassCancelOrdersRequestV5,
  ): Promise<WSAPIResponse<[{ result: boolean }], 'sprd-mass-cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      this.getWSClient().getMarketWsKey('business'),
      'sprd-mass-cancel',
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
