import { InstrumentType } from '../shared';

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
