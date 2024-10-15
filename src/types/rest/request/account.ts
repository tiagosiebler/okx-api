import {
  InstrumentType,
  MarginMode,
  PositionSide,
  WithdrawState,
} from '../shared';

export interface SetLeverageRequest {
  instId?: string;
  ccy?: string;
  lever: string;
  mgnMode: MarginMode;
  posSide?: 'long' | 'short';
}

export interface ChangePositionMarginRequest {
  instId: string;
  posSide: PositionSide;
  type: 'add' | 'reduce';
  amt: string;
  ccy?: string;
  auto?: boolean;
  loanTrans?: boolean;
}

export interface GetPositionsParams {
  instType?: InstrumentType;
  instId?: string;
  posId?: string;
}

export interface GetHistoricPositionParams {
  instType?: InstrumentType;
  instId?: string;
  mgnMode?: string;
  type?: string;
  posId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface WithdrawalHistoryRequest {
  ccy?: string;
  wdId?: string;
  clientId?: string;
  txId?: string;
  type?: '3' | '4';
  state?: WithdrawState;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetInstrumentsRequest {
  instType: 'SPOT' | 'MARGIN' | 'SWAP' | 'FUTURES' | 'OPTION';
  uly?: string;
  instFamily?: string;
  instId?: string;
}

export interface QuickMarginBorrowRepayRequest {
  instId: string;
  ccy: string;
  side: 'borrow' | 'repay';
  amt: string;
  posSide?: 'long' | 'short';
}

export interface GetQuickMarginBorrowRepayHistoryRequest {
  instId?: string;
  ccy?: string;
  side?: 'borrow' | 'repay';
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetVIPInterestRequest {
  ccy?: string;
  ordId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetVIPLoanOrderListRequest {
  ordId?: string;
  state?: '1' | '2' | '3' | '4' | '5';
  ccy?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetVIPLoanOrderDetailRequest {
  ordId: string;
  ccy?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetFixedLoanBorrowQuoteRequest {
  type: 'normal' | 'reborrow';
  ccy?: string;
  amt?: string;
  maxRate?: string;
  term?: string;
  ordId?: string;
}

export interface SubmitFixedLoanBorrowingOrderRequest {
  ccy: string;
  amt: string;
  maxRate: string;
  term: string;
  reborrow?: boolean;
  reborrowRate?: string;
}

export interface UpdateFixedLoanBorrowingOrderRequest {
  ordId: string;
  reborrow?: boolean;
  renewMaxRate?: string;
}

export interface GetFixedLoanBorrowingOrdersListRequest {
  ordId?: string;
  ccy?: string;
  state?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
  after?: string;
  before?: string;
  limit?: string;
  term?: string;
}

export interface GetBorrowRepayHistoryRequest {
  ccy?: string;
  type?: 'auto_borrow' | 'auto_repay' | 'manual_borrow' | 'manual_repay';
  after?: string;
  before?: string;
  limit?: string;
}

export interface PositionBuilderRequest {
  inclRealPosAndEq?: boolean;
  spotOffsetType?: '1' | '2' | '3';
  simPos?: {
    instId: string;
    pos: string;
  }[];
  simAsset?: {
    ccy: string;
    amt: string;
  }[];
  greeksType?: 'BS' | 'PA' | 'CASH';
}

export interface SetMMPConfigRequest {
  instFamily: string;
  timeInterval: string;
  frozenInterval: string;
  qtyLimit: string;
}
