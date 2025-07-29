import { WSAPIResponse, WsDataEvent, WsEvent, WsLoginEvent } from '../types';
import { APIResponse } from '../types/rest';

export function isRawAPIResponse(
  response: unknown,
): response is APIResponse<unknown> {
  if (typeof response !== 'object' || !response) {
    return false;
  }

  if ('code' in response && 'msg' in response && 'data' in response) {
    return true;
  }

  return false;
}

/** Simple type guard that a websocket event extends a known event schema */
export function isWsEvent(evtData: unknown): evtData is WsEvent {
  if (typeof evtData !== 'object' || !evtData) {
    return false;
  }

  if ('event' in evtData) {
    return true;
  }

  return false;
}

export function isWsDataEvent(evtData: unknown): evtData is WsDataEvent {
  if (typeof evtData !== 'object' || !evtData) {
    return false;
  }

  if ('arg' in evtData && 'data' in evtData) {
    return true;
  }
  return false;
}

export function isWsErrorEvent(evt: unknown): boolean {
  return isWsEvent(evt) && evt.event === 'error';
}

/** Usually a response to authenticating over ws */
export function isWsLoginEvent(evt: unknown): evt is WsLoginEvent {
  return isWsEvent(evt) && evt.event === 'login';
}

/** A response to subscribing to a channel */
export function isWsSubscribeEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'subscribe';
}

/** A response to unsubscribing from a channel */
export function isWsUnsubscribeEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'unsubscribe';
}

/** Information event */
export function isConnCountEvent(evtData: unknown): boolean {
  return isWsEvent(evtData) && evtData.event === 'channel-conn-count';
}

/** Simple typescript guard never expecting code to reach it (will throw typescript error if called) */
export function neverGuard(x: never, msg: string): Error {
  return new Error(`Unhandled value exception "${x}", ${msg}`);
}

export function isWSAPIResponse(
  msg: unknown,
): msg is Omit<WSAPIResponse, 'wsKey'> {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const response = msg as WSAPIResponse;
  /**
   * Very simple type guard around this structure. Could also just check the "op" is a known WS API operation, but this might be slightly faster as the list of operations grows:
    {
      id: '2',
      op: 'order',
      code: '1',
      msg: '',
      data: [
        {
          tag: '159881cb7207BCDE',
          ts: '1753783406701',
          ordId: '',
          clOrdId: '',
          sCode: 'asdfasfsafdasf',
          sMsg: 'adsfadsfasdf'
        }
      ],
      inTime: '1753783406701275',
      outTime: '1753783406702251',
      wsKey: 'prodPrivate',
      isWSAPIResponse: false
    }
   */
  if (typeof response.id !== 'string' || typeof response.inTime !== 'string') {
    return false;
  }

  return true;
}
