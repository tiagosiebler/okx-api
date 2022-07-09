import { InstrumentType, numberInString } from '../shared';

export interface APIResponse<T> {
  code: '0';
  msg: '';
  data: T;
}

export interface Ticker {
  instType: InstrumentType;
  instId: string;
  last: numberInString;
  lastSz: numberInString;
  askPx: numberInString;
  askSz: numberInString;
  bidPx: numberInString;
  bidSz: numberInString;
  open24h: numberInString;
  high24h: numberInString;
  low24h: numberInString;
  volCcy24h: numberInString;
  vol24h: numberInString;
  sodUtc0: numberInString;
  sodUtc8: numberInString;
  ts: numberInString;
}
