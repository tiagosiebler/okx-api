export interface EconomicCalendarRequest {
  region?: string;
  importance?: '1' | '2' | '3';
  before?: string;
  after?: string;
  limit?: string;
}

export interface UnitConvertRequest {
  type?: '1' | '2';
  instId: string;
  sz: string;
  px?: string;
  unit?: 'coin' | 'usds';
  opType: 'open' | 'close';
}

export interface GetPremiumHistoryRequest {
  instId: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetContractOpenInterestHistoryRequest {
  instId: string;
  period?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetContractTakerVolumeRequest {
  instId: string;
  period?: string;
  unit?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetTopTradersContractLongShortRatioRequest {
  instId: string;
  period?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetOptionTradesRequest {
  instId?: string;
  instFamily?: string;
  optType?: 'C' | 'P';
}
