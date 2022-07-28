import { RFQLeg, RFQQuoteLegExtended } from '../shared';

export interface BlockCounterParty {
  traderName: string;
  traderCode: string;
  type: never; // Currently not live
}

export interface CreateRFQResult {
  cTime: string;
  uTime: string;
  traderCode: string;
  rfqId: string;
  clRfqId: string;
  state: string;
  validUntil: string;
  counterparties: string[];
  legs: Required<RFQLeg>[];
}

export interface CancelBlockRFQResult {
  rfqId: string;
  clRfqId: string;
  sCode: string;
  sMsg: string;
}

export interface ExecuteBlockQuoteResult {
  blockTdId: string;
  rfqId: string;
  clRfqId: string;
  quoteId: string;
  clQuoteId: string;
  tTraderCode: string;
  mTraderCode: string;
  cTime: string;
  legs: RFQQuoteLegExtended[];
}

export interface CreateBlockQuoteResult {
  cTime: string;
  uTime: string;
  quoteId: string;
  clQuoteId: string;
  rfqId: string;
  quoteSide: string;
  state: string;
  validUntil: string;
  legs: CreatedBlockQuoteLeg[];
}

export interface CreatedBlockQuoteLeg {
  px: string;
  sz: string;
  instId: string;
  side: string;
  tgtCcy: string;
}

export interface CancelBlockQuoteResult {
  rfqId: string;
  clQuoteId: string;
  sCode: string;
  sMsg: string;
}

export interface BlockRFQResult {
  rfqId: string;
  clRfqId: string;
  traderCode: string;
  validUntil: string;
  state: string;
  counterparties: string[];
  legs: Required<RFQLeg>[];
  cTime: string;
  uTime: string;
}

export interface BlockQuoteLeg {
  px: string;
  sz: string;
  instId: string;
  side: string;
  tgtCcy: string;
}

export interface GetBlockQuoteResult {
  validUntil: string;
  uTime: string;
  cTime: string;
  legs: BlockQuoteLeg[];
  quoteId: string;
  rfqId: string;
  quoteSide: string;
  state: string;
  clQuoteId: string;
  clRfqId: string;
  traderCode: string;
}
