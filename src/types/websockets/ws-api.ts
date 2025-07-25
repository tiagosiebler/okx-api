import { WS_KEY_MAP, WsKey } from '../../util';

export interface WSAPIRequestFlags {
  /** If true, will skip auth requirement for WS API connection */
  authIsOptional?: boolean | undefined;
}

export type WSOperation = 'subscribe' | 'unsubscribe' | 'login';

// When new WS API operations are added, make sure to also update WS_API_Operations[] below
export type WSAPIOperation =
  | 'place-order'
  | 'batch-place'
  | 'cancel-order'
  | 'batch-cancel';

export const WS_API_Operations: WSAPIOperation[] = [
  'place-order',
  'batch-place',
  'cancel-order',
  'batch-cancel',
];

export interface WSAPIRequestOKX<TSomething> {
  id: 1;
  empty: TSomething;
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
  [WS_KEY_MAP.prodPrivate]: WSAPIOperation;
}

/**
 * Request parameters expected per operation
 */
export interface WsAPITopicRequestParamMap {
  // https://www.bitget.com/api-doc/uta/websocket/private/Place-Order-Channel#request-parameters
  'place-order': unknown;
}

/**
 * Response structure expected for each operation
 */
export interface WsAPIOperationResponseMap {
  // https://www.bitget.com/api-doc/uta/websocket/private/Place-Order-Channel#request-parameters
  'place-order': WSAPIResponse<[unknown], 'place-order'>;
}
