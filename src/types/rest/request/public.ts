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
