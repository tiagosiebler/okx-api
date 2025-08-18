import { WS_KEY_MAP, WsKey } from '../../util/websocket-util.js';
import { OrderIdRequest } from '../rest/request/trade.js';
import { OrderResult } from '../rest/response/private-trade.js';
import { numberInString } from '../rest/shared.js';
import {
  WSAPIAmendOrderRequestV5,
  WSAPIAmendSpreadOrderRequestV5,
  WSAPICancelSpreadOrderRequestV5,
  WSAPIMassCancelOrdersRequestV5,
  WSAPIPlaceOrderRequestV5,
  WSAPIPlaceSpreadOrderRequestV5,
  WSAPISpreadMassCancelOrdersRequestV5,
} from './ws-api-request.js';
import {
  WSAPICancelOrderResultV5,
  WSAPISpreadAmendOrderResultV5,
  WSAPISpreadCancelOrderResultV5,
  WSAPISpreadPlaceOrderResultV5,
} from './ws-api-response.js';
import { WsAuthRequestArg, WsChannelSubUnSubRequestArg } from './ws-request.js';

export interface WSAPIRequestFlags {
  /** If true, will skip auth requirement for WS API connection */
  authIsOptional?: boolean | undefined;
  /**
   * Request effective deadline. Unix timestamp format in milliseconds, e.g. 1597026383085
   *
   * Only applies for order placement and order amend (batch commands included)
   */
  expTime?: numberInString;
}

export type WSOperation = 'subscribe' | 'unsubscribe' | 'login';

/**
 *
 * Top level requests with args
 *
 */

/**

/**
 * request looks like this:
{
  "id": "1512",
  "op": "subscribe",
  "args": [
    {
      "channel": "tickers",
      "instId": "BTC-USDT"
    }
  ]
}
 */
export interface WsRequestOperationOKX<TWSRequestArg> {
  id: string;
  op: WSOperation;
  args?: TWSRequestArg[];
}

export interface WsSubRequest
  extends WsRequestOperationOKX<WsChannelSubUnSubRequestArg> {
  op: 'subscribe';
}

export interface WsUnsubRequest
  extends WsRequestOperationOKX<WsChannelSubUnSubRequestArg> {
  op: 'unsubscribe';
}

export interface WsAuthRequest extends WsRequestOperationOKX<WsAuthRequestArg> {
  op: 'login';
}

export type WSAPIPrivateOperations =
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
  | 'order'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
  | 'batch-orders'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-order
  | 'cancel-order'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-multiple-orders
  | 'batch-cancel-orders'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-order
  | 'amend-order'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-multiple-orders
  | 'batch-amend-orders'
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-mass-cancel-order
  | 'mass-cancel';

export type WSAPIBusinessOperations =
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-place-order
  | 'sprd-order'
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-amend-order
  | 'sprd-amend-order'
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-order
  | 'sprd-cancel-order'
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-order
  | 'sprd-mass-cancel';

// When new WS API operations are added, make sure to also update WS_API_Operations[] below
export type WSAPIOperation = WSAPIPrivateOperations | WSAPIBusinessOperations;

export const WS_API_Operations: WSAPIOperation[] = [
  'order',
  'batch-orders',
  'cancel-order',
  'batch-cancel-orders',
  'amend-order',
  'batch-amend-orders',
  'mass-cancel',
  'sprd-order',
  'sprd-amend-order',
  'sprd-cancel-order',
  'sprd-mass-cancel',
];

export const WS_API_PRIVATE_OPERATIONS: WSAPIPrivateOperations[] = [
  'order',
  'batch-orders',
  'cancel-order',
  'batch-cancel-orders',
  'amend-order',
  'batch-amend-orders',
  'mass-cancel',
];

export const WS_API_BUSINESS_OPERATIONS: WSAPIBusinessOperations[] = [
  'sprd-order',
  'sprd-amend-order',
  'sprd-cancel-order',
  'sprd-mass-cancel',
];

export const WS_API_TAG_OPERATIONS: WSAPIOperation[] = [
  'order',
  'batch-orders',
  'sprd-order',
];

export interface WSAPIRequestOKX<TRequestParams> {
  id: numberInString;
  op: WSAPIOperation;
  expTime?: numberInString;
  args: TRequestParams[];
}

export interface WSAPIResponse<
  TResponseData extends object = object,
  TOperation extends WSAPIOperation = WSAPIOperation,
> {
  wsKey: WsKey;
  id: numberInString;
  op: TOperation;
  code: numberInString;
  msg: string;
  data: TResponseData[];
  inTime: numberInString;
  outTime: numberInString;
}

export interface WSOperationLoginParams {
  apiKey: string;
  passphrase: string;
  timestamp: number;
  sign: string;
}

export type Exact<T> = {
  // This part says: if there's any key that's not in T, it's an error
  [K: string]: never;
} & {
  [K in keyof T]: T[K];
};

/**
 * List of operations supported for this WsKey (connection)
 */
export interface WsAPIWsKeyTopicMap {
  // Global
  [WS_KEY_MAP.prodPrivate]: WSAPIPrivateOperations;
  [WS_KEY_MAP.prodDemoPrivate]: WSAPIPrivateOperations;

  [WS_KEY_MAP.prodBusiness]: WSAPIBusinessOperations;
  [WS_KEY_MAP.prodDemoBusiness]: WSAPIBusinessOperations;

  // [WS_KEY_MAP.prodPublic]: never;
  // [WS_KEY_MAP.prodDemoPublic]: never;

  // EEA
  [WS_KEY_MAP.eeaLivePrivate]: WSAPIPrivateOperations;
  [WS_KEY_MAP.eeaDemoPrivate]: WSAPIPrivateOperations;

  // [WS_KEY_MAP.eeaLiveBusiness]: never;
  // [WS_KEY_MAP.eeaDemoBusiness]: never;

  // [WS_KEY_MAP.eeaLivePublic]: never;
  // [WS_KEY_MAP.eeaDemoPublic]: never;

  // US
  [WS_KEY_MAP.usLivePrivate]: WSAPIPrivateOperations;
  [WS_KEY_MAP.usDemoPrivate]: WSAPIPrivateOperations;

  // [WS_KEY_MAP.usLiveBusiness]: never;
  // [WS_KEY_MAP.usDemoBusiness]: never;

  // [WS_KEY_MAP.usLivePublic]: never;
  // [WS_KEY_MAP.usDemoPublic]: never;
}

/**
 * Request parameters expected per operation
 */
export interface WsAPITopicRequestParamMap {
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
  order: WSAPIPlaceOrderRequestV5;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
  'batch-orders': WSAPIPlaceOrderRequestV5[];
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-order
  'cancel-order': OrderIdRequest;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-multiple-orders
  'batch-cancel-orders': OrderIdRequest[];
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-order
  'amend-order': WSAPIAmendOrderRequestV5;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-multiple-orders
  'batch-amend-orders': WSAPIAmendOrderRequestV5[];
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-mass-cancel-order
  'mass-cancel': WSAPIMassCancelOrdersRequestV5;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-place-order
  'sprd-order': WSAPIPlaceSpreadOrderRequestV5;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-amend-order
  'sprd-amend-order': WSAPIAmendSpreadOrderRequestV5;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-order
  'sprd-cancel-order': WSAPICancelSpreadOrderRequestV5;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-all-orders
  'sprd-mass-cancel': WSAPISpreadMassCancelOrdersRequestV5;
}

/**
 * Response structure expected for each operation
 */
export interface WsAPIOperationResponseMap {
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
  order: WSAPIResponse<[OrderResult], 'order'>;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
  'batch-orders': WSAPIResponse<OrderResult[], 'batch-orders'>;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-order
  'cancel-order': WSAPIResponse<[WSAPICancelOrderResultV5], 'cancel-order'>;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-multiple-orders
  'batch-cancel-orders': WSAPIResponse<
    WSAPICancelOrderResultV5[],
    'batch-cancel-orders'
  >;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-order
  'amend-order': WSAPIResponse<[OrderResult], 'amend-order'>;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-amend-multiple-orders
  'batch-amend-orders': WSAPIResponse<[OrderResult], 'batch-amend-orders'>;
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-mass-cancel-order
  'mass-cancel': WSAPIResponse<[{ result: boolean }], 'mass-cancel'>;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-place-order
  'sprd-order': WSAPIResponse<[WSAPISpreadPlaceOrderResultV5], 'sprd-order'>;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-amend-order
  'sprd-amend-order': WSAPIResponse<
    [WSAPISpreadAmendOrderResultV5],
    'sprd-amend-order'
  >;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-order
  'sprd-cancel-order': WSAPIResponse<
    [WSAPISpreadCancelOrderResultV5],
    'sprd-cancel-order'
  >;
  // https://www.okx.com/docs-v5/en/#spread-trading-websocket-trade-api-ws-cancel-all-orders
  'sprd-mass-cancel': WSAPIResponse<[{ result: boolean }], 'sprd-mass-cancel'>;
}
