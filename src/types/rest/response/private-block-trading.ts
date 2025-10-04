import { RFQLeg, RFQQuoteLegExtended } from '../shared.js';

export interface BlockCounterParty {
  traderName: string;
  traderCode: string;
  type: never; // Currently not live
}
export interface AccountAllocationLegResult {
  instId: string;
  sz: string;
  tdMode: string;
  ccy: string;
  posSide: string;
}
export interface AccountAllocationResult {
  acct: string;
  sCode: string;
  sMsg: string;
  legs: AccountAllocationLegResult[];
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
  groupId?: string;
  acctAlloc?: AccountAllocationResult[];
}

export interface CancelBlockRFQResult {
  rfqId: string;
  clRfqId: string;
  sCode: string;
  sMsg: string;
}

export interface AccountAllocationLegExecutionResult {
  instId: string;
  sz: string;
  fee: string;
  feeCcy: string;
  tradeId: string;
}

export interface AccountAllocationExecutionResult {
  acct: string;
  blockTdId: string;
  sCode: string;
  sMsg: string;
  legs: AccountAllocationLegExecutionResult[];
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
  tag?: string;
  legs: RFQQuoteLegExtended[];
  acctAlloc?: AccountAllocationExecutionResult[];
}

export interface CreatedBlockQuoteLeg {
  px: string;
  sz: string;
  instId: string;
  side: string;
  tgtCcy: string;
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
  allowPartialExecution?: boolean;
  groupId?: string;
  acctAlloc?: AccountAllocationResult[];
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

export interface BlockMakerInstrumentData {
  uly?: string;
  instId?: string;
  maxBlockSz?: string;
  makerPxBand?: string;
}

export interface AccountAllocationTradeLegResult {
  instId: string;
  sz: string;
  tradeId: string;
  fee: string;
  feeCcy: string;
}
export interface AccountAllocationTradeResult {
  blockTdId: string;
  errorCode: string;
  acct: string;
  legs: AccountAllocationTradeLegResult[];
}

export interface BlockTradeLeg {
  instId: string;
  side: string;
  sz: string;
  px: string;
  tradeId: string;
  fee: string;
  feeCcy: string;
  tradeQuoteCcy?: string;
}

export interface BlockTradeResult {
  rfqId: string;
  clRfqId: string;
  quoteId: string;
  clQuoteId: string;
  blockTdId: string;
  tag: string;
  isSuccessful: boolean;
  errorCode: string;
  cTime: string;
  tTraderCode: string;
  mTraderCode: string;
  legs: BlockTradeLeg[];
  groupId?: string;
  acctAlloc?: AccountAllocationTradeResult[];
}

export interface BlockMakerInstrumentSettings {
  instType: string;
  includeALL: boolean;
  data: BlockMakerInstrumentData[];
}

export interface SetMmpConfigResult {
  timeInterval: string;
  frozenInterval: string;
  countLimit: string;
}

export interface BlockMMPConfig {
  frozenInterval: string;
  mmpFrozen: boolean;
  mmpFrozenUntil: string;
  countLimit: string;
  timeInterval: string;
}

export interface PublicBlockTradeLeg {
  instId: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
}

export interface PublicBlockTrade {
  blockTdId: string;
  groupId?: string;
  legs: PublicBlockTradeLeg[];
  strategy?: string;
  cTime: string;
}
