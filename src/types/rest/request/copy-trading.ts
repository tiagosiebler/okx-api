export interface GetCurrentSubpositionsRequest {
  instType?: 'SPOT' | 'SWAP';
  instId?: string;
  uniqueCode?: string;
  subPosType?: 'lead' | 'copy';
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetSubpositionsHistoryRequest {
  instType?: 'SPOT' | 'SWAP';
  instId?: string;
  subPosType?: 'lead' | 'copy';
  after?: string;
  before?: string;
  limit?: string;
}

export interface PlaceCTAlgoOrderRequest {
  instType?: 'SPOT' | 'SWAP';
  subPosId: string;
  tpTriggerPx?: string;
  slTriggerPx?: string;
  tpOrdPx?: string;
  slOrdPx?: string;
  tpTriggerPxType?: 'last' | 'index' | 'mark';
  slTriggerPxType?: 'last' | 'index' | 'mark';
  tag?: string;
  subPosType?: 'lead' | 'copy';
}

export interface CloseSubpositionRequest {
  instType?: 'SPOT' | 'SWAP';
  subPosType?: 'lead' | 'copy';
  subPosId: string;
  ordType?: 'market' | 'limit';
  px?: string;
  tag?: string;
}

export interface GetCTProfitDetailsRequest {
  instType?: 'SPOT' | 'SWAP';
  after?: string;
  before?: string;
  limit?: string;
}

export interface CopySettingsRequest {
  instType?: 'SWAP';
  uniqueCode: string;
  copyMgnMode: 'cross' | 'isolated' | 'copy';
  copyInstIdType: 'custom' | 'copy';
  instId?: string;
  copyMode?: 'fixed_amount' | 'ratio_copy';
  copyTotalAmt: string;
  copyAmt?: string;
  copyRatio?: string;
  tpRatio?: string;
  slRatio?: string;
  slTotalAmt?: string;
  subPosCloseType: 'market_close' | 'copy_close' | 'manual_close';
}

export interface GetCTBatchLeverageInfoRequest {
  mgnMode: 'cross' | 'isolated';
  uniqueCode: string;
  instId?: string;
}

export interface SetCTBatchLeverageRequest {
  mgnMode: 'cross' | 'isolated';
  lever: string;
  instId: string;
}

export interface GetCTHistoryLeadTradersRequest {
  instType?: 'SWAP';
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetLeadTraderRanksRequest {
  instType?: 'SWAP';
  sortType?:
    | 'overview'
    | 'pnl'
    | 'aum'
    | 'win_ratio'
    | 'pnl_ratio'
    | 'current_copy_trader_pnl';
  state?: '0' | '1';
  minLeadDays?: '1' | '2' | '3' | '4';
  minAssets?: string;
  maxAssets?: string;
  minAum?: string;
  maxAum?: string;
  dataVer?: string;
  page?: string;
  limit?: string;
}

export interface GetLeadTraderStatsRequest {
  instType?: 'SWAP';
  uniqueCode: string;
  lastDays: '1' | '2' | '3' | '4';
}

export interface GetLeadTraderPositionsRequest {
  instType?: 'SWAP';
  uniqueCode: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetCopyTradersRequest {
  instType?: 'SWAP';
  uniqueCode: string;
  limit?: string;
}
