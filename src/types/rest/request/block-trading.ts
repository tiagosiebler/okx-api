import { OrderSide, RFQLeg } from '../shared';

export interface CreateBlockRFQRequest {
  counterparties: string[];
  anonymous?: boolean;
  clRfqId?: string;
  legs: RFQLeg[];
}

export interface CancelBlockRFQRequest {
  rfqId?: string;
  clRfqId?: string;
}

export interface CancelMultipleBlockRFQRequest {
  rfqIds?: string[];
  clRfqIds?: string[];
}

export interface ExecuteBlockQuoteRequest {
  rfqId: string;
  quoteId: string;
}

export interface CreateBlockQuoteRequest {
  rfqId: string;
  clQuoteId?: string;
  quoteSide: OrderSide;
  anonymous?: boolean;
  expiresIn?: string;
  legs: CreateBlockQuoteLeg[];
}

export interface CreateBlockQuoteLeg {
  px: string;
  sz: string;
  instId: string;
  side: OrderSide;
  tgtCcy?: 'base_ccy' | 'quote_ccy';
}

export interface CancelBlockQuoteRequest {
  quoteId?: string;
  clQuoteId?: string;
}

export interface CancelMultipleBlockQuoteRequest {
  quoteIds?: string[];
  clQuoteIds?: string[];
}

export interface GetBlockRFQSParams {
  rfqId?: string;
  clRfqId?: string;
  state?: string;
  beginId?: string;
  endId?: string;
  limit?: string;
}

export interface GetBlockQuoteParams {
  rfqId?: string;
  clRfqId?: string;
  quoteId?: string;
  clQuoteId?: string;
  state?: string;
  beginId?: string;
  endId?: string;
  limit?: string;
}

