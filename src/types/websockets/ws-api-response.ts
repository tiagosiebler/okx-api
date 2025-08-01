import { numberInString } from '../rest/shared.js';

export interface WSAPICancelOrderResultV5 {
  clOrdId: string;
  ordId: string;
  ts: numberInString;
  sCode: string;
  sMsg: string;
}

export interface WSAPISpreadPlaceOrderResultV5 {
  clOrdId: string;
  ordId: string;
  tag: string;
  sCode: numberInString;
  sMsg: string;
}

export interface WSAPISpreadAmendOrderResultV5 {
  clOrdId: string;
  ordId: string;
  reqId: string;
  sCode: string;
  sMsg: string;
}

export interface WSAPISpreadCancelOrderResultV5 {
  clOrdId: string;
  ordId: string;
  sCode: string;
  sMsg: string;
}
