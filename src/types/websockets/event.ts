import { WS_EVENT_CODE_ENUM } from '../../util';
import { WsChannel } from './request';

export interface WsEvent {
  event: 'error' | 'login' | 'subscribe' | 'unsubscribe' | 'channel-conn-count';
  code?: string;
  msg?: string;
  arg?: any;
  data?: any;
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
