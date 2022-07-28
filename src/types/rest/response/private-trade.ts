import { numberInString } from '../shared';

export interface OrderResult {
  clOrdId: string;
  ordId: string;
  tag: string;
  sCode: numberInString;
  sMsg: string;
}

export interface CancelledOrderResult {
  clOrdId: string;
  ordId: string;
  sCode: string;
  sMsg: string;
}

export interface AmendedOrder {
  clOrdId: string;
  ordId: string;
  reqId: string;
  sCode: string;
  sMsg: string;
}
export interface ClosedPositions {
  instId: string;
  posSide: string;
}

export interface OrderDetails {
  instType: string;
  instId: string;
  ccy: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  px: string;
  sz: string;
  pnl: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  accFillSz: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillTime: string;
  state: string;
  avgPx: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  rebate: string;
  tgtCcy: string;
  category: string;
  uTime: string;
  cTime: string;
}

export interface OrderListItem {
  accFillSz: string;
  avgPx: string;
  cTime: string;
  category: string;
  ccy: string;
  clOrdId: string;
  fee: string;
  feeCcy: string;
  fillPx: string;
  fillSz: string;
  fillTime: string;
  instId: string;
  instType: string;
  lever: string;
  ordId: string;
  ordType: string;
  pnl: string;
  posSide: string;
  px: string;
  rebate: string;
  rebateCcy: string;
  side: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  state: string;
  sz: string;
  tag: string;
  tgtCcy: string;
  tdMode: string;
  source: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tradeId: string;
  uTime: string;
}

export interface HistoricOrder {
  instType: string;
  instId: string;
  ccy: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  px: string;
  sz: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  accFillSz: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillTime: string;
  state: string;
  avgPx: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  source: string;
  rebate: string;
  tgtCcy: string;
  pnl: string;
  category: string;
  uTime: string;
  cTime: string;
}

export interface OrderFill {
  instType: string;
  instId: string;
  tradeId: string;
  ordId: string;
  clOrdId: string;
  billId: string;
  tag: string;
  fillPx: string;
  fillSz: string;
  side: string;
  posSide: string;
  execType: string;
  feeCcy: string;
  fee: string;
  ts: string;
}

export interface AlgoOrderResult {
  algoId: string;
  sCode: string;
  sMsg: string;
}

export interface AlgoOrderListItem {
  instType: string;
  instId: string;
  ordId: string;
  ccy: string;
  algoId: string;
  sz: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  tgtCcy: string;
  state: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  triggerPx: string;
  triggerPxType: string;
  ordPx: string;
  actualSz: string;
  actualPx: string;
  actualSide: string;
  pxVar: string;
  pxSpread: string;
  pxLimit: string;
  szLimit: string;
  timeInterval: string;
  triggerTime: string;
  callbackRatio: string;
  callbackSpread: string;
  activePx: string;
  moveTriggerPx: string;
  cTime: string;
}

export interface HistoricAlgoOrder {
  instType: string;
  instId: string;
  ordId: string;
  ccy: string;
  algoId: string;
  sz: string;
  ordType: string;
  side: string;
  posSide: string;
  tdMode: string;
  tgtCcy: string;
  state: string;
  lever: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  triggerPx: string;
  triggerPxType: string;
  ordPx: string;
  actualSz: string;
  actualPx: string;
  actualSide: string;
  pxVar: string;
  pxSpread: string;
  pxLimit: string;
  szLimit: string;
  timeInterval: string;
  callbackRatio: string;
  callbackSpread: string;
  activePx: string;
  moveTriggerPx: string;
  triggerTime: string;
  cTime: string;
}
