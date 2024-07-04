export interface CreateSignalRequest {
  signalChanName: string;
  signalChanDesc?: string;
}

export interface GetSignalsRequest {
  signalSourceType: string;
  signalChanId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface EntrySettingParam {
  allowMultipleEntry?: string;
  entryType?: string;
  amt?: string;
  ratio?: { ratio: string }[];
}

export interface ExitSettingParam {
  tpSlType: string;
  tpPct?: string;
  slPct?: string;
}

export interface CreateSignalBotRequest {
  signalChanId: string;
  lever: string;
  investAmt: string;
  subOrdType: string;
  includeAll?: boolean;
  instIds?: string;
  ratio?: string;
  entrySettingParam?: EntrySettingParam;
  exitSettingParam?: ExitSettingParam;
}

export interface AdjustMarginBalanceRequest {
  algoId: string;
  type: 'add' | 'reduce';
  amt: string;
  allowReinvest?: boolean;
}

export interface AmendTPSLRequest {
  algoId: string;
  exitSettingParam: ExitSettingParam;
}

export interface SetSignalInstrumentsRequest {
  algoId: string;
  instIds: string[];
  includeAll: boolean;
}

export interface GetSignalBotRequest {
  algoOrdType: string;
  algoId: string;
  after: string;
  before?: string;
  limit?: string;
}

export interface GetSignalBotPositionHistoryRequest {
  algoId?: string;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface PlaceSubOrderRequest {
  instId: string;
  algoId: string;
  side: 'buy' | 'sell';
  ordType: 'market' | 'limit';
  sz: string;
  px?: string;
  reduceOnly?: boolean;
}

export interface CancelSubOrderRequest {
  algoId: string;
  instId: string;
  signalOrdId: string;
}

export interface GetSignalBotSubOrdersRequest {
  algoId: string;
  algoOrdType: 'contract';
  type?: 'live' | 'filled';
  clOrdId?: string;
  state?: 'live' | 'partially_filled' | 'filled' | 'cancelled';
  signalOrdId?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetSignalBotEventHistoryRequest {
  algoId: string;
  after?: string;
  before?: string;
  limit?: string;
}
