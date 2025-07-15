import { WsChannel } from './request';

export interface WsEvent {
  event:
    | 'error'
    | 'login'
    | 'subscribe'
    | 'unsubscribe'
    | 'channel-conn-count'
    | 'order'
    | 'batch-orders'
    | 'cancel-order'
    | 'batch-cancel-orders'
    | 'amend-order'
    | 'batch-amend-orders';
  code?: string;
  msg?: string;
  arg?: any;
  data?: any;
}

export interface WsOrderEvent {
  id: string;
  op:
    | 'order'
    | 'batch-orders'
    | 'cancel-order'
    | 'batch-cancel-orders'
    | 'amend-order'
    | 'batch-amend-orders';
  data: {
    clOrdId: string;
    ordId: string;
    tag: string;
    ts: string;
    sCode: string;
    sMsg: string;
  }[];
  code: string;
  msg: string;
  inTime: string;
  outTime: string;
}

export interface WsDataEvent<T = any> {
  arg: {
    channel: WsChannel;
    uid?: string;
    instId?: string;
    instFamily?: string;
  };
  data: T;
}

export interface WsLoginEvent extends WsEvent {
  event: 'login';
}

export interface WsChannelConnInfoEvent extends WsEvent {
  event: 'channel-conn-count';
  channel: string;
  connId: string;
  connCount: string;
}

export type WsResponse = WsEvent;
