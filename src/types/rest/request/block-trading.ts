import { OrderSide, RFQLeg } from '../shared.js';

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

export interface CreateBlockQuoteLeg {
  px: string;
  sz: string;
  instId: string;
  side: OrderSide;
  tgtCcy?: 'base_ccy' | 'quote_ccy';
}

export interface CreateBlockQuoteRequest {
  rfqId: string;
  clQuoteId?: string;
  quoteSide: OrderSide;
  anonymous?: boolean;
  expiresIn?: string;
  legs: CreateBlockQuoteLeg[];
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

export interface MakerInstrumentData {
  uly?: string;
  instId?: string;
  maxBlockSz?: string;
  makerPxBand?: string;
}

export interface SetQuoteProductsRequest {
  instType: string;
  includeAll?: boolean;
  data: MakerInstrumentData[];
}

export interface SetMmpConfigRequest {
  timeInterval: string;
  frozenInterval: string;
  countLimit: string;
}
