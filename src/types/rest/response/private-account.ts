import {
  AccountLevel,
  MarginMode,
  PositionSide,
  WithdrawState,
} from '../shared.js';

export interface AccountBalanceDetail {
  availBal: string;
  availEq: string;
  cashBal: string;
  ccy: string;
  crossLiab: string;
  disEq: string;
  eq: string;
  eqUsd: string;
  frozenBal: string;
  interest: string;
  isoEq: string;
  isoLiab: string;
  isoUpl: string;
  liab: string;
  maxLoan: string;
  mgnRatio: string;
  notionalLever: string;
  ordFrozen: string;
  twap: string;
  uTime: string;
  upl: string;
  uplLiab: string;
  stgyEq: string;
  spotBal: string; // Spot balance. The unit is currency, e.g. BTC.
  openAvgPx: string[]; // Spot average cost price. The unit is USD.
  accAvgPx: string[]; // Spot accumulated cost price. The unit is USD.
  spotUpl: string; // Spot unrealized profit and loss. The unit is USD.
  spotUplRatio: string; // Spot unrealized profit and loss ratio.
  totalPnl: string; // Spot accumulated profit and loss. The unit is USD.
  totalPnlRatio: string; // Spot accumulated profit and loss ratio.
}

export interface AccountBalance {
  adjEq: string;
  details: AccountBalanceDetail[];
  imr: string;
  isoEq: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  notionalUsdForBorrow: string;
  notionalUsdForFutures: string;
  notionalUsdForOption: string;
  notionalUsdForSwap: string;
  ordFroz: string;
  totalEq: string;
  uTime: string;
  spotCopyTradingEq: string;
  upl: string;
  frpType?: string;
  // Delta neutral strategy fields
  delta: string; // Delta (USD)
  deltaLever: string; // Delta neutral strategy account level delta leverage (deltaLever = delta / totalEq)
  deltaNeutralStatus: string; // Delta risk status: 0=normal, 1=transfer restricted, 2=delta reducing
}

export interface AccountPosition {
  adl: string;
  availPos: string;
  avgPx: string;
  cTime: string;
  ccy: string;
  deltaBS: string;
  deltaPA: string;
  gammaBS: string;
  gammaPA: string;
  imr: string;
  instId: string;
  instType: string;
  interest: string;
  usdPx: string;
  last: string;
  lever: string;
  liab: string;
  liabCcy: string;
  liqPx: string;
  markPx: string;
  margin: string;
  mgnMode: MarginMode;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  optVal: string;
  pTime: string;
  pos: string;
  hedgedPos: string; // Hedged position size. Only returned for accounts in delta neutral strategy (stgyType:1). Returns "" for accounts in general strategy.
  posCcy: string;
  posId: string;
  posSide: PositionSide;
  thetaBS: string;
  thetaPA: string;
  tradeId: string;
  uTime: string;
  upl: string;
  uplRatio: string;
  vegaBS: string;
  vegaPA: string;
}

export interface HistoricAccountPosition {
  cTime: string;
  ccy: string;
  closeAvgPx: string;
  closeTotalPos: string;
  instId: string;
  instType: string;
  lever: string;
  mgnMode: MarginMode;
  openAvgPx: string;
  openMaxPos: string;
  pnl: string;
  pnlRatio: string;
  posId: string;
  posSide: PositionSide;
  triggerPx: string;
  type: string;
  uTime: string;
  uly: string;
}

export interface AccountBalanceRiskData {
  ccy: string;
  disEq: string;
  eq: string;
}

export interface AccountPositionRiskData {
  baseBal: string;
  ccy: string;
  instId: string;
  instType: string;
  mgnMode: MarginMode;
  notionalCcy: string;
  notionalUsd: string;
  pos: string;
  posCcy: string;
  posId: string;
  posSide: PositionSide;
  quoteBal: string;
}

export interface AccountPositionRisk {
  adjEq: string;
  balData: AccountBalanceRiskData[];
  posData: AccountPositionRiskData[];
  ts: string;
}

export interface AccountBill {
  bal: string;
  balChg: string;
  billId: string;
  ccy: string;
  execType: string;
  fee: string;
  from: string;
  instId: string;
  instType: string;
  mgnMode: MarginMode;
  notes: string;
  ordId: string;
  pnl: string;
  posBal: string;
  posBalChg: string;
  subType: string;
  sz: string;
  to: string;
  ts: string;
  type: string;
  earnAmt?: string;
  earnApr?: string;
}

export interface AccountHistoryBill {
  fileHref: string;
  result: string;
  ts: string;
}

export interface AccountConfiguration {
  acctLv: string;
  autoLoan: boolean;
  ctIsoMode: string;
  greeksType: string;
  level: string;
  levelTmp: string;
  mgnIsoMode: string;
  posMode: string;
  spotOffsetType: string;
  stgyType: string; // Strategy type: 0=general strategy, 1=delta neutral strategy
  uid: string;
  label: string;
  roleType: string;
  traderInsts: any[];
  spotRoleType: string;
  spotTraderInsts: any[];
  opAuth: string;
  kycLv: string;
  ip: string;
  perm: string;
  mainUid: string;
  discountType: '0' | '1';
  enableSpotBorrow: boolean;
  spotBorrowAutoRepay: boolean;
  feeType: string;
  settleCcy: string;
  settleCcyList: string[];
}

export interface AccountPositionModeResult {
  posMode: string;
}

export interface AccountModeResult {
  acctLv: AccountLevel;
}

export interface AutoLoanResult {
  autoLoan: boolean;
}

export interface AccountLeverageResult {
  lever: string;
  mgnMode: MarginMode;
  instId: string;
  posSide: PositionSide;
}

export interface AccountMaxOrderAmount {
  ccy: string;
  instId: string;
  maxBuy: string;
  maxSell: string;
}

export interface AccountMaxTradableAmount {
  instId: string;
  availBuy: string;
  availSell: string;
}

export interface AccountChangeMarginResult {
  amt: string;
  ccy: string;
  instId: string;
  leverage: string;
  posSide: PositionSide;
  type: string;
}

export interface AccountLeverage {
  instId: string;
  mgnMode: MarginMode;
  posSide: PositionSide;
  lever: string;
}

export interface AccountMaxLoan {
  instId: string;
  mgnMode: MarginMode;
  mgnCcy: string;
  maxLoan: string;
  ccy: string;
  side: string;
}

export interface AccountFeeRate {
  category: never;
  delivery: string;
  exercise: string;
  instType: string;
  level: string;
  maker: string;
  makerU: string;
  taker: string;
  takerU: string;
  ts: string;
  ruleType: string;
}

export interface AccountIsolatedMode {
  isoMode: 'autonomy' | 'automatic';
}

export interface AdjustLeverageInfo {
  estAvailQuoteTrans: string;
  estAvailTrans: string;
  estLiqPx: string;
  estMgn: string;
  estQuoteMgn: string;
  estMaxAmt: string;
  estQuoteMaxAmt: string;
  existOrd: boolean;
  maxLever: string;
  minLever: string;
}

export interface InterestAccrued {
  type: '1' | '2';
  ccy: string;
  instId: string;
  mgnMode: MarginMode;
  interest: string;
  interestRate: string;
  liab: string;
  ts: string;
}

export interface InterestRate {
  interestRate: string;
  ccy: string;
}

export interface Greeks {
  greeksType: string;
}

export interface MaxWithdrawal {
  ccy: string;
  maxWd: string;
  maxWdEx: string;
  spotOffsetMaxWd: string;
  spotOffsetMaxWdEx: string;
}

export interface AccountRiskState {
  atRisk: string;
  atRiskIdx: string;
  atRiskMgn: string;
  ts: string;
}

export interface WithdrawalHistory {
  ccy: string;
  chain: string;
  nonTradableAsset: boolean;
  amt: string;
  ts: string;
  from: string;
  areaCodeFrom: string;
  to: string;
  areaCodeTo: string;
  tag: string;
  pmtId: string;
  memo: string;
  addrExt: any;
  txId: string;
  fee: string;
  feeCcy: string;
  state: WithdrawState;
  wdId: string;
  clientId: string;
}

export interface AccountInstrument {
  baseCcy: string;
  ctMult: string;
  ctType: string;
  ctVal: string;
  ctValCcy: string;
  expTime: string;
  instFamily: string;
  instId: string;
  instType: string;
  lever: string;
  listTime: string;
  contTdSwTime: string; // Continuous trading switch time. The switch time from call auction/prequote to continuous trading. Unix timestamp format in milliseconds.
  preMktSwTime: string; // The time premarket swap switched to normal swap. Unix timestamp format in milliseconds. Only applicable to premarket SWAP.
  lotSz: string;
  maxIcebergSz: string;
  maxLmtAmt: string;
  maxLmtSz: string;
  maxMktAmt: string;
  maxMktSz: string;
  maxStopSz: string;
  maxTriggerSz: string;
  maxTwapSz: string;
  minSz: string;
  optType: string;
  openType: string; // Open type: fix_price (fix price opening), pre_quote (pre-quote), call_auction (call auction). Only applicable to SPOT/MARGIN.
  quoteCcy: string;
  tradeQuoteCcyList: string[]; // List of quote currencies available for trading, e.g. ["USD", "USDC"]
  settleCcy: string;
  state: string;
  stk: string;
  tickSz: string;
  ruleType: string;
  auctionEndTime: string;
  futureSettlement: boolean; // Whether daily settlement for expiry feature is enabled. Applicable to FUTURES cross.
  instIdCode: number; // Instrument ID code. For simple binary encoding, must use instIdCode instead of instId.
  posLmtAmt: string; // Maximum position value (USD) for this instrument at the user level. Applicable to SWAP/FUTURES.
  posLmtPct: string; // Maximum position ratio (e.g., 30 for 30%) a user may hold relative to platform's current total position value. Applicable to SWAP/FUTURES.
  maxPlatOILmt: string; // Platform-wide maximum position value (USD) for this instrument. Applicable to SWAP/FUTURES.
}

export interface QuickMarginBorrowRepayResult {
  instId: string;
  ccy: string;
  side: 'borrow' | 'repay';
  amt: string;
  posSide: string;
  ts: string;
}

export interface QuickMarginBorrowRepayRecord {
  instId: string;
  ccy: string;
  side: 'borrow' | 'repay';
  accBorrowed: string;
  amt: string;
  refId: string;
  ts: string;
}

export interface VIPInterest {
  ordId: string;
  ccy: string;
  interest: string;
  interestRate: string;
  liab: string;
  ts: string;
}

export interface VIPLoanOrder {
  ts: string;
  nextRefreshTime: string;
  ccy: string;
  ordId: string;
  state: '1' | '2' | '3' | '4' | '5';
  origRate: string;
  curRate: string;
  dueAmt: string;
  borrowAmt: string;
  repayAmt: string;
}

export interface VIPLoanOrderDetail {
  amt: string;
  ccy: string;
  failReason: string;
  rate: string;
  ts: string;
  type: '1' | '2' | '3' | '4';
}

export interface FixedLoanBorrowingLimitDetail {
  ccy: string;
  used: string;
  borrowed: string;
  availBorrow: string;
  minBorrow: string;
  term: string;
}

export interface FixedLoanBorrowingLimit {
  totalBorrowLmt: string;
  totalAvailBorrow: string;
  borrowed: string;
  used: string;
  availRepay: string;
  details: FixedLoanBorrowingLimitDetail[];
  ts: string;
}

export interface FixedLoanBorrowQuote {
  ccy: string;
  term: string;
  estAvailBorrow: string;
  estRate: string;
  estInterest: string;
  penaltyInterest: string;
  ts: string;
}

export interface SetMMPConfigResult {
  instFamily: string;
  timeInterval: string;
  frozenInterval: string;
  qtyLimit: string;
}

export interface MMPConfig {
  frozenInterval: string;
  instFamily: string;
  mmpFrozen: boolean;
  mmpFrozenUntil: string;
  qtyLimit: string;
  timeInterval: string;
}

export interface BorrowRepayHistoryItem {
  ccy: string;
  type: 'auto_borrow' | 'auto_repay' | 'manual_borrow' | 'manual_repay';
  amt: string;
  accBorrowed: string;
  ts: string;
}

export interface SetCollateralAssetsResult {
  type: 'all' | 'custom';
  ccyList: string[];
  collateralEnabled: boolean;
}

export interface GetCollateralAssetsResult {
  ccy: string;
  collateralEnabled: boolean;
}

export interface SetSettleCurrencyResult {
  settleCcy: string;
}

export interface SetFeeTypeResult {
  feeType: string;
}

export interface SetTradingConfigResult {
  type: string; // Trading config type
  stgyType: string; // Strategy type
}

export interface UnmatchedInfo {
  type: string; // Unmatched information type: spot_mode, futures_mode, isolated_margin, isolated_contract, positions_options, isolated_pending_orders, pending_orders_options, trading_bot, repay_borrowings, loan, delta_risk, collateral_all
  deltaLever?: string; // Delta leverage. Applicable when type is delta_risk
  ordList?: string[]; // Unmatched order list, order ID. Applicable when type is isolated_pending_orders/pending_orders_options
  posList?: string[]; // Unmatched position list, position ID. Applicable when type is isolated_margin/isolated_contract/positions_options
}

export interface PrecheckSetDeltaNeutralResult {
  unmatchedInfoCheck: UnmatchedInfo[];
}
