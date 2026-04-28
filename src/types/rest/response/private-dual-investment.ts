export interface DcdCurrencyPair {
  baseCcy: string;
  quoteCcy: string;
  optType: 'C' | 'P';
  uly: string;
}

export interface DcdProduct {
  absYield: string;
  annualizedYield: string;
  baseCcy: string;
  quoteCcy: string;
  expTime: string;
  interestAccrualTime: string;
  listTime: string;
  maxSize: string;
  minSize: string;
  notionalCcy: string;
  optType: 'C' | 'P';
  productId: string;
  quoteTime: string;
  redeemEndTime: string;
  redeemStartTime: string;
  stepSz: string;
  tradeEndTime: string;
  strike: string;
  uly: string;
}

export interface DcdQuote {
  absYield: string;
  annualizedYield: string;
  interestAccrualTime: string;
  notionalSz: string;
  notionalCcy: string;
  productId: string;
  quoteId: string;
  validUntil: string;
  idxPx: string;
}

export type DcdTradeOrderState =
  | 'initial'
  | 'pending_book'
  | 'live'
  | 'rejected';

export interface DcdTradeResult {
  quoteId: string;
  ordId: string;
  state: DcdTradeOrderState;
}

export interface DcdRedeemQuote {
  ordId: string;
  quoteId: string;
  redeemCcy: string;
  redeemSz: string;
  termRate: string;
  validUntil: string;
}

export type DcdRedeemConfirmState =
  | 'pending_redeem_booking'
  | 'pending_redeem'
  | 'redeeming'
  | 'redeemed';

export interface DcdRedeemResult {
  ordId: string;
  state: DcdRedeemConfirmState;
}

export type DcdOrderStatusState =
  | 'initial'
  | 'live'
  | 'pending_settle'
  | 'settled'
  | 'pending_redeem'
  | 'redeemed'
  | 'rejected';

export interface DcdOrderStatus {
  ordId: string;
  state: DcdOrderStatusState;
}

export interface DcdOrderHistoryItem {
  ordId: string;
  quoteId: string;
  state: DcdOrderStatusState;
  productId: string;
  baseCcy: string;
  quoteCcy: string;
  uly: string;
  strike: string;
  notionalSz: string;
  notionalCcy: string;
  absYield: string;
  annualizedYield: string;
  yieldSz: string;
  yieldCcy: string;
  settleSz: string;
  settleCcy: string;
  settlePx: string;
  settleTime: string;
  expTime: string;
  redeemStartTime: string;
  redeemEndTime: string;
  cTime: string;
  uTime: string;
}
