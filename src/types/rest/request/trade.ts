import {
  TradeMode,
  OrderSide,
  PositionSide,
  AlgoOrderType,
  numberInString,
  PriceTriggerType,
  OrderType,
  MarginMode,
  InstrumentType,
  AlgoOrderState,
  AlgoPositionSide,
} from '../shared';

export interface AlgoRecentHistoryRequest {
  ordType: AlgoOrderType;
  algoId?: string;
  instType?: InstrumentType;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AlgoLongHistoryRequest {
  ordType: AlgoOrderType;
  state?: AlgoOrderState;
  algoId?: string;
  instType?: InstrumentType;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AlgoOrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  side: OrderSide;
  posSide?: AlgoPositionSide;
  ordType: AlgoOrderType;
  algoClOrdId?: string;
  sz: numberInString;
  tag?: string;
  reduceOnly?: boolean;
  tgtCcy?: string;

  tpTriggerPx?: numberInString;
  tpTriggerPxType?: PriceTriggerType;
  tpOrdPx?: numberInString;

  slTriggerPx?: numberInString;
  slTriggerPxType?: PriceTriggerType;
  slOrdPx?: numberInString;

  triggerPx?: numberInString;
  triggerPxType?: PriceTriggerType;
  orderPx?: numberInString;

  callbackRatio?: numberInString;
  callbackSpread?: numberInString;
  activePx?: numberInString;

  pxVar?: numberInString;
  pxSpread?: numberInString;
  szLimit?: numberInString;
  pxLimit?: numberInString;

  timeInterval?: string;
}

export interface AmendOrderRequest {
  instId: string;
  cxlOnFail?: boolean;
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
}

export type AlgoOrderDetailsRequest =
  | {
      algoId: string;
    }
  | {
      algoClOrdId: string;
    };

interface AlgoTriggerOrder {
  newTpTriggerPx?: string;
  newTpTriggerPxType?: 'last' | 'index' | 'mark';
  newTpOrdPx?: string;
  newSlTriggerPx?: string;
  newSlTriggerPxType?: 'last' | 'index' | 'mark';
  newSlOrdPx?: string;
}

export interface AmendAlgoOrderRequest {
  instId: string;
  algoId?: string;
  algoClOrdId?: string;
  cxlOnFail?: boolean;
  reqId?: string;
  newSz?: string;
  newTpTriggerPx?: string;
  newTpOrdPx?: string;
  newSlTriggerPx?: string;
  newSlOrdPx?: string;
  newTpTriggerPxType?: 'last' | 'index' | 'mark';
  newSlTriggerPxType?: 'last' | 'index' | 'mark';
  newTriggerPx: string;
  newOrdPx: string;
  newTriggerPxType?: 'last' | 'index' | 'mark';
  attachAlgoOrds?: AlgoTriggerOrder[];
}

export interface CancelAlgoOrderRequest {
  algoId: string;
  instId: string;
}

export interface ClosePositionRequest {
  instId: string;
  posSide?: PositionSide;
  mgnMode: MarginMode;
  ccy?: string;
  autoCxl?: boolean;
  clOrdId?: string;
  tag?: string;
}

export interface FillsHistoryRequest {
  instType?: InstrumentType;
  uly?: string;
  instId?: string;
  ordId?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface OrderIdRequest {
  instId: string;
  ordId?: string;
  clOrdId?: string;
}

export interface OrderHistoryRequest {
  instType: InstrumentType;
  uly?: string;
  instId?: string;
  ordType?: OrderType;
  state?: string;
  category?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface OrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  clOrdId?: string;
  tag?: string;
  side: OrderSide;
  posSide?: PositionSide;
  ordType: OrderType;
  /** Quantity to buy or sell */
  sz: numberInString;
  px?: string;
  reduceOnly?: boolean;
  /** A spot buy on BTC-USDT with "base_ccy" would mean the QTY (sz) is in USDT */
  tgtCcy?: 'base_ccy' | 'quote_ccy';
  banAmend?: boolean;
  /** Take Profit & Stop Loss params */
  tpTriggerPx?: string;
  tpOrdPx?: string;
  slTriggerPx?: string;
  slOrdPx?: string;
  tpTriggerPxType?: PriceTriggerType;
  slTriggerPxType?: PriceTriggerType;
  /** Quick margin type */
  quickMgnType?: 'manual' | 'auto_borrow' | 'auto_repay';
}

export interface GetTransactionDetailsArchiveRequest {
  year: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
}

export interface OrderPrecheckRequest {
  instId: string;
  tdMode: string;
  side: string;
  posSide?: string;
  ordType: string;
  sz: string;
  px?: string;
  reduceOnly?: boolean;
  tgtCcy?: string;
  attachAlgoOrds?: {
    attachAlgoClOrdId?: string;
    tpTriggerPx?: string;
    tpOrdPx?: string;
    tpOrdKind?: string;
    slTriggerPx?: string;
    slOrdPx?: string;
    tpTriggerPxType?: string;
    slTriggerPxType?: string;
    sz?: string;
  }[];
}
