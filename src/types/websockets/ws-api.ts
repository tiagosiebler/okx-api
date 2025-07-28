import { WS_KEY_MAP, WsKey } from '../../util';
import { WsAuthRequestArg, WsChannelSubUnSubRequestArg } from './request';

export interface WSAPIRequestFlags {
  /** If true, will skip auth requirement for WS API connection */
  authIsOptional?: boolean | undefined;
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

export interface WSAPIRequestOKX<TSomething> {
  id: string;
  op: WSAPIOperation;
  expTime?: string; // request effective deadline
  args: TSomething[];
}

export interface WSAPIResponse<
  TResponseData extends object = object,
  TOperation extends WSAPIOperation = WSAPIOperation,
> {
  wsKey: WsKey;
  /** Auto-generated */
  id: string;
  event: 'trade';
  topic: TOperation;
  args: TResponseData;
  code: '0' | string;
  msg: 'success' | string;
  ts: string;
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

  [WS_KEY_MAP.prodPublic]: never;
  [WS_KEY_MAP.prodDemoPublic]: never;

  // EEA
  [WS_KEY_MAP.eeaLivePrivate]: WSAPIPrivateOperations;
  [WS_KEY_MAP.eeaDemoPrivate]: WSAPIPrivateOperations;

  [WS_KEY_MAP.eeaLiveBusiness]: never;
  [WS_KEY_MAP.eeaDemoBusiness]: never;

  [WS_KEY_MAP.eeaLivePublic]: never;
  [WS_KEY_MAP.eeaDemoPublic]: never;

  // US
  [WS_KEY_MAP.usLivePrivate]: WSAPIPrivateOperations;
  [WS_KEY_MAP.usDemoPrivate]: WSAPIPrivateOperations;

  [WS_KEY_MAP.usLiveBusiness]: never;
  [WS_KEY_MAP.usDemoBusiness]: never;

  [WS_KEY_MAP.usLivePublic]: never;
  [WS_KEY_MAP.usDemoPublic]: never;
}

/**
 * Request parameters expected per operation
 */
export interface WsAPITopicRequestParamMap {
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
  order: unknown;
}

/**
 * Response structure expected for each operation
 */
export interface WsAPIOperationResponseMap {
  // https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
  order: WSAPIResponse<[unknown], 'order'>;
}
