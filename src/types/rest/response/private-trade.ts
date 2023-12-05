import { AlgoOrderState, AlgoOrderType, AlgoPositionSide, OrderState, OrderType, PositionSide, numberInString } from '../shared';

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
  posSide: PositionSide;
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
  ordType: OrderType;
  side: string;
  posSide: PositionSide;
  tdMode: string;
  accFillSz: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillTime: string;
  state: OrderState;
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
  ordType: OrderType;
  pnl: string;
  posSide: PositionSide;
  px: string;
  pxUsd: string;
  pxVol: string;
  pxType: string;
  rebate: string;
  rebateCcy: string;
  side: string;
  attachAlgoClOrdId: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  attachAlgoOrds: any[];
  state: OrderState;
  stpId: string;
  stpMode: string;
  sz: string;
  tag: string;
  tgtCcy: string;
  tdMode: string;
  source: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tradeId: string;
  reduceOnly: string;
  quickMgnType: string;
  algoClOrdId: string;
  algoId: string;
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
  pxUsd: string;
  pxVol: string;
  pxType: string;
  sz: string;
  ordType: OrderType;
  side: string;
  posSide: PositionSide;
  tdMode: string;
  accFillSz: string;
  fillPx: string;
  tradeId: string;
  fillSz: string;
  fillTime: string;
  state: OrderState;
  avgPx: string;
  lever: string;
  attachAlgoClOrdId: string;
  tpTriggerPx: string;
  tpTriggerPxType: string;
  tpOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  slOrdPx: string;
  attachAlgoOrds: any[];
  stpId: string;
  stpMode: string;
  feeCcy: string;
  fee: string;
  rebateCcy: string;
  source: string;
  rebate: string;
  tgtCcy: string;
  pnl: string;
  category: string;
  reduceOnly: string;
  cancelSource: string;
  cancelSourceReason: string;
  algoClOrdId: string;
  algoId: string;
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
  posSide: PositionSide;
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
  activePx: string;
  actualPx: string;
  actualSide: string;
  actualSz: string;
  algoId: string;
  attachAlgoOrds: any[];
  cTime: string;
  callbackRatio: string;
  callbackSpread: string;
  ccy: string;
  clOrdId: string;
  instId: string;
  instType: string;
  lever: string;
  moveTriggerPx: string;
  ordId: string;
  ordIdList: any[];
  ordPx: string;
  ordType: AlgoOrderType;
  posSide: AlgoPositionSide;
  pxLimit: string;
  pxSpread: string;
  pxVar: string;
  side: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType: string;
  state: AlgoOrderState;
  sz: string;
  closeFraction: string;
  szLimit: string;
  tag: string;
  tdMode: string;
  tgtCcy: string;
  timeInterval: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType:  string;
  triggerPx: string;
  reduceOnly: string;
  triggerPxType: string;
  quickMgnType: string;
  last: string;
  failCode: string;
  algoClOrdId: string;
  triggerTime: string;
  amendPxOnTriggerType: string;
}


export interface HistoricAlgoOrder {
  activePx: string;
  actualPx: string;
  actualSide: string;
  actualSz: string;
  algoClOrdId: string;
  algoId:string;
  attachAlgoOrds: any[];
  cTime: string;
  callbackRatio: string;
  callbackSpread: string;
  ccy:string;
  clOrdId: string;
  closeFraction: string;
  failCode: string;
  instId:string;
  instType: string;
  last: string;
  lever: string;
  moveTriggerPx: string;
  ordId: string;
  ordIdList:string[];
  ordPx: string;
  ordType: AlgoOrderType;
  posSide: AlgoPositionSide;
  pxLimit: string;
  pxSpread: string;
  pxVar: string;
  quickMgnType:string;
  reduceOnly: string;
  side: string;
  slOrdPx: string;
  slTriggerPx: string;
  slTriggerPxType:string;
  state: AlgoOrderState;
  sz: string;
  szLimit: string;
  tag:string;
  tdMode:string;
  tgtCcy:string;
  timeInterval:string;
  tpOrdPx: string;
  tpTriggerPx: string;
  tpTriggerPxType:string;
  triggerPx:string;
  triggerPxType: string;
  triggerTime: string;
  amendPxOnTriggerType: string;
}

