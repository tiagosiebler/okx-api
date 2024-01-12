import { InstrumentType, MarginMode, PositionSide } from '../shared';

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
