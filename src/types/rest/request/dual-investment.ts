export interface GetDcdProductsRequest {
  baseCcy: string;
  quoteCcy: string;
  optType: 'C' | 'P';
}

export interface RequestDcdQuoteRequest {
  productId: string;
  notionalSz: string;
  notionalCcy: string;
}

export interface SubmitDcdTradeRequest {
  quoteId: string;
}

export interface RequestDcdRedeemQuoteRequest {
  ordId: string;
}

export interface SubmitDcdRedeemRequest {
  ordId: string;
  quoteId: string;
}

export interface GetDcdOrderStatusRequest {
  ordId: string;
}

export type DcdOrderState =
  | 'initial'
  | 'live'
  | 'pending_settle'
  | 'settled'
  | 'pending_redeem'
  | 'redeemed'
  | 'rejected';

export interface GetDcdOrderHistoryRequest {
  ordId?: string;
  productId?: string;
  uly?: string;
  state?: DcdOrderState;
  beginId?: string;
  endId?: string;
  begin?: string;
  end?: string;
  limit?: string;
}
