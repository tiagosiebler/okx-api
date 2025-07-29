import {
  numberInString,
  OrderSide,
  OrderType,
  PositionSide,
  TradeMode,
} from '../rest';

export interface WSAPIPlaceOrderRequestV5 {
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
  px?: numberInString;
  pxUsd?: numberInString;
  pxVol?: numberInString;
  reduceOnly?: boolean;
  /** A spot buy on BTC-USDT with "base_ccy" would mean the QTY (sz) is in USDT */
  tgtCcy?: 'base_ccy' | 'quote_ccy';
  banAmend?: boolean;
  tradeQuoteCcy?: string;
  stpMode?: 'cancel_maker' | 'cancel_taker' | 'cancel_both';
}

export interface WSAPIAmendOrderRequestV5 {
  instId: string;
  cxlOnFail?: boolean;
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
  newPxUsd?: string;
  newPxVol?: string;
}

export interface WSAPIMassCancelOrdersRequestV5 {
  instType: string;
  instFamily: string;
  lockInterval?: string;
}

export interface WSAPIPlaceSpreadOrderRequestV5 {
  sprdId: string;
  clOrdId?: string;
  tag?: string;
  side: OrderSide;
  ordType: OrderType;
  sz: numberInString;
  px?: numberInString;
}

export interface WSAPIAmendSpreadOrderRequestV5 {
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
}

export interface WSAPICancelSpreadOrderRequestV5 {
  ordId?: string;
  clOrdId?: string;
}

export interface WSAPISpreadMassCancelOrdersRequestV5 {
  sprdId?: string;
}
