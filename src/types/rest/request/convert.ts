export interface ConvertQuoteEstimateRequest {
  baseCcy: string;
  quoteCcy: string;
  side: string;
  rfqSz: string;
  rfqSzCcy: string;
  clTReqId?: string;
  tag?: string;
  /** 0: standard convert (default), 1: large order convert for VIP */
  convertMode?: '0' | '1';
}
export interface ConvertTradeRequest {
  quoteId: string;
  baseCcy: string;
  quoteCcy: string;
  side: string;
  sz: string;
  szCcy: string;
  clTReqId?: string;
  tag?: string;
  /** 0: standard convert (default), 1: large order convert for VIP */
  convertMode?: '0' | '1';
}
