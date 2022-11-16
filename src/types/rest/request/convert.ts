export interface ConvertQuoteEstimateRequest {
  baseCcy: string;
  quoteCcy: string;
  side: string;
  rfqSz: string;
  rfqSzCcy: string;
  clTReqId?: string;
  tag?: string;
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
}
