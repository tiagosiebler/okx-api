export interface CurrentSubposition{
  algoId: string;
  ccy: string;
  instId: string;
  instType: string;
  lever: string;
  margin: string;
  markPx: string;
  mgnMode: string;
  openAvgPx: string;
  openOrdId: string;
  openTime: string;
  posSide: string;
  slOrdPx: string;
  slTriggerPx: string;
  subPos: string;
  subPosId: string;
  tpOrdPx: string;
  tpTriggerPx: string;
  uniqueCode: string;
  upl: string;
  uplRatio: string;
  availSubPos: string;
}

export interface SubpositionsHistory{
  ccy: string;
  closeAvgPx: string;
  closeTime: string;
  instId: string;
  instType: string;
  lever: string;
  margin: string;
  markPx: string;
  mgnMode: string;
  openAvgPx: string;
  openOrdId: string;
  openTime: string;
  pnl: string;
  pnlRatio: string;
  posSide: string;
  profitSharingAmt: string;
  subPos: string;
  closeSubPos: string;
  type: string;
  subPosId: string;
  uniqueCode: string;
}

export interface PlaceCTAlgoOrderResult {
  subPosId: string;
  tag: string;
}

export interface GetCTProfitDetailsResult {
  ccy: string;
  nickName: string;
  profitSharingAmt: string;
  profitSharingId: string;
  portLink: string;
  ts: string;
  instType: string;
}

export interface GetCTTotalProfitResult {
  ccy: string;
  totalProfitSharingAmt: string;
  instType: string;
}

export interface GetCTUnrealizedProfitResult {
  ccy: string;
  nickName: string;
  portLink: string;
  ts: string;
  unrealizedProfitSharingAmt: string;
  instType: string;
}

export interface AccountConfigurationDetails {
  copyTraderNum: string;
  instType: 'SPOT' | 'SWAP';
  maxCopyTraderNum: string;
  profitSharingRatio: string;
  roleType: '0' | '1' | '2';
}

export interface GetAccountConfigurationResult {
  uniqueCode: string;
  nickName: string;
  portLink: string;
  details: AccountConfigurationDetails[];
}

export interface CopySettingsInstId {
  instId: string;
  enabled: string;
}

export interface GetCopySettingsResult {
  ccy: string;
  copyAmt: string;
  copyInstIdType: 'custom' | 'copy';
  copyMgnMode: 'cross' | 'isolated' | 'copy';
  copyMode: 'fixed_amount' | 'ratio_copy';
  copyRatio: string;
  copyState: '0' | '1';
  copyTotalAmt: string;
  instIds: CopySettingsInstId[];
  slRatio: string;
  slTotalAmt: string;
  subPosCloseType: 'market_close' | 'copy_close' | 'manual_close';
  tpRatio: string;
}

export interface LeverageInfo {
  lever: string;
  posSide: 'long' | 'short';
}

export interface GetCTBatchLeverageInfoResult {
  instId: string;
  mgnMode: 'cross' | 'isolated';
  leadTraderLevers: LeverageInfo[];
  myLevers: LeverageInfo[];
}

export interface SetCTBatchLeverageResult {
  succInstId: string;
  failInstId: string;
  result: '0' | '1' | '2';
}

export interface GetCTMyLeadTradersResult {
  portLink: string;
  nickName: string;
  margin: string;
  copyTotalAmt: string;
  copyTotalPnl: string;
  uniqueCode: string;
  ccy: string;
  profitSharingRatio: string;
  beginCopyTime: string;
  upl: string;
  todayPnl: string;
  leadMode: 'public' | 'private';
}

export interface GetCTHistoryLeadTradersResult {
  portLink: string;
  nickName: string;
  uniqueCode: string;
  copyNum: string;
  copyTotalAmt: string;
  copyTotalPnl: string;
  copyAmt: string;
  copyMode: 'fixed_amount' | 'ratio_copy';
  copyRatio: string;
  ccy: string;
  profitSharingRatio: string;
  beginCopyTime: string;
  endCopyTime: string;
  copyRelId: string;
  copyState: '0' | '1';
  leadMode: 'public' | 'private';
}

export interface GetCopyTradingConfigResult {
  maxCopyAmt: string;
  minCopyAmt: string;
  maxCopyTotalAmt: string;
  minCopyRatio: string;
  maxCopyRatio: string;
  maxTpRatio: string;
  maxSlRatio: string;
}

export interface PnlRatio {
  beginTs: string;
  pnlRatio: string;
}

export interface LeadTraderRank {
  accCopyTraderNum: string;
  aum: string;
  ccy: string;
  copyState: '0' | '1';
  copyTraderNum: string;
  leadDays: string;
  maxCopyTraderNum: string;
  nickName: string;
  pnl: string;
  pnlRatio: string;
  pnlRatios: PnlRatio[];
  portLink: string;
  traderInsts: string[];
  uniqueCode: string;
  winRatio: string;
}

export interface GetLeadTraderRanksResult {
  dataVer: string;
  ranks: LeadTraderRank[];
  totalPage: string;
}

export interface LeadTraderPnl {
  beginTs: string;
  pnl: string;
  pnlRatio: string;
}

export interface LeadTraderStats {
  avgSubPosNotional: string;
  ccy: string;
  curCopyTraderPnl: string;
  investAmt: string;
  lossDays: string;
  profitDays: string;
  winRatio: string;
}

export interface LeadTraderPreference {
  ccy: string;
  ratio: string;
}

export interface LeadTraderCurrentPosition {
  ccy: string;
  instId: string;
  instType: string;
  lever: string;
  margin: string;
  markPx: string;
  mgnMode: string;
  openAvgPx: string;
  openTime: string;
  posSide: string;
  subPos: string;
  subPosId: string;
  uniqueCode: string;
  upl: string;
  uplRatio: string;
}

export interface LeadTraderPositionHistory {
  ccy: string;
  closeAvgPx: string;
  closeTime: string;
  instId: string;
  instType: string;
  lever: string;
  margin: string;
  mgnMode: string;
  openAvgPx: string;
  openTime: string;
  pnl: string;
  pnlRatio: string;
  posSide: string;
  subPos: string;
  subPosId: string;
  uniqueCode: string;
}

export interface CopyTraderInfo {
  beginCopyTime: string;
  nickName: string;
  portLink: string;
  pnl: string;
}

export interface GetCopyTradersResult {
  copyTotalPnl: string;
  ccy: string;
  copyTraderNumChg: string;
  copyTraderNumChgRatio: string;
  copyTraders: CopyTraderInfo[];
}

export interface GetPrivateLeadTraderRanksRequest {
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

export interface GetPrivateLeadTraderRanksResult {
  dataVer: string;
  chanType: 'OKX' | 'ND';
  ranks: LeadTraderRank[];
  totalPage: string;
}
