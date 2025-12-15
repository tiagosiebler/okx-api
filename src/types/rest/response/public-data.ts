import { InstrumentType, numberInString } from '../shared.js';

export interface Ticker {
  instType: InstrumentType;
  instId: string;
  last: numberInString;
  lastSz: numberInString;
  askPx: numberInString;
  askSz: numberInString;
  bidPx: numberInString;
  bidSz: numberInString;
  open24h: numberInString;
  high24h: numberInString;
  low24h: numberInString;
  volCcy24h: numberInString;
  vol24h: numberInString;
  sodUtc0: numberInString;
  sodUtc8: numberInString;
  ts: numberInString;
}

export interface IndexTicker {
  instId: string;
  idxPx: string;
  high24h: string;
  sodUtc0: string;
  open24h: string;
  low24h: string;
  sodUtc8: string;
  ts: string;
}

type OBPrice = string;
type OBAssetQty = string;
type OBOrderCount = string;
type OrderBookLevel = [OBPrice, OBAssetQty, '0', OBOrderCount];

export interface OrderBook {
  asks: OrderBookLevel[];
  bids: OrderBookLevel[];
  ts: string;
}

type timestamp = string;
type openPrice = string;
type highPrice = string;
type lowPrice = string;
type closePrice = string;
type vol = string;
type volCcy = string;
type volCcyQuote = string;
type confirm = string;

export type Candle = [
  timestamp,
  openPrice,
  highPrice,
  lowPrice,
  closePrice,
  vol,
  volCcy,
  volCcyQuote,
  confirm,
];

export type CandleNoVolume = [
  timestamp,
  openPrice,
  highPrice,
  lowPrice,
  closePrice,
];

export interface Trade {
  instId: string;
  side: string;
  sz: string;
  px: string;
  tradeId: string;
  ts: string;
  source?: string;
}

export interface Instrument {
  instType: InstrumentType;
  instId: string;
  uly: string;
  instFamily: string;
  category: string;
  baseCcy: string;
  quoteCcy: string;
  settleCcy: string;
  ctVal: string;
  ctMult: string;
  ctValCcy: string;
  optType: string;
  stk: string;
  listTime: string;
  contTdSwTime?: string; // Continuous trading switch time. The switch time from call auction/prequote to continuous trading. Unix timestamp format in milliseconds.
  preMktSwTime?: string; // The time premarket swap switched to normal swap. Unix timestamp format in milliseconds. Only applicable to premarket SWAP.
  expTime: string;
  lever: string;
  tickSz: string;
  lotSz: string;
  minSz: string;
  ctType: string;
  alias: string;
  state: string;
  openType?: string; // Open type: fix_price (fix price opening), pre_quote (pre-quote), call_auction (call auction). Only applicable to SPOT/MARGIN.
  maxLmtSz: string;
  maxLmtAmt?: string; // Max USD amount for a single limit order
  maxMktSz: string;
  maxMktAmt?: string; // Max USD amount for a single market order. Only applicable to SPOT/MARGIN.
  maxTwapSz: string;
  maxIcebergSz: string;
  maxTriggerSz: string;
  maxStopSz: string;
  ruleType: string;
  auctionEndTime: string;
  futureSettlement?: boolean; // Whether daily settlement for expiry feature is enabled. Applicable to FUTURES cross.
  tradeQuoteCcyList?: string[]; // List of quote currencies available for trading, e.g. ["USD", "USDC"]
  instIdCode?: number; // Instrument ID code. For simple binary encoding, must use instIdCode instead of instId.
  posLmtAmt?: string; // Maximum position value (USD) for this instrument at the user level. Applicable to SWAP/FUTURES.
  posLmtPct?: string; // Maximum position ratio (e.g., 30 for 30%) a user may hold relative to platform's current total position value. Applicable to SWAP/FUTURES.
  maxPlatOILmt?: string; // Platform-wide maximum position value (USD) for this instrument. Applicable to SWAP/FUTURES.
  groupId?: string; // Instrument trading fee group ID
}

export interface EconomicCalendarData {
  calendarId: string;
  date: string;
  region: string;
  category: string;
  event: string;
  refDate: string;
  actual: string;
  previous: string;
  forecast: string;
  dateSpan: string;
  importance: string;
  uTime: string;
  prevInitial: string;
  ccy: string;
  unit: string;
}

export interface UnitConvertData {
  type: '1' | '2';
  instId: string;
  px: string;
  sz: string;
  unit: 'coin' | 'usds';
}

export interface FundingRateHistory {
  instType: string;
  instId: string;
  fundingRate: string;
  realizedRate: string;
  fundingTime: string;
  method: string;
}

export interface SystemTime {
  ts: string;
}

export interface OptionsTradeInfo {
  instId: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  ts: string;
}

export interface OptionTrade {
  vol24h: string;
  optType: 'C' | 'P';
  tradeInfo: OptionsTradeInfo[];
}

export interface OptionTrades {
  instId: string;
  instFamily: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  optType: 'C' | 'P';
  fillVol: string;
  fwdPx: string;
  idxPx: string;
  markPx: string;
  ts: string;
}

export interface Announcement {
  annType: string;
  pTime: string; // The actual time the announcement was first published. Unix timestamp format in milliseconds, e.g. 1597026383085
  businessPTime: string; // The time displayed on the announcement page for user reference. Unix timestamp format in milliseconds, e.g. 1597026383085
  title: string;
  url: string;
}

export interface BasicInterestRate {
  ccy: string; // Currency
  rate: string; // Daily borrowing rate
  quota: string; // Max borrow
}

export interface VIPInterestInfo {
  level: string; // VIP Level, e.g. VIP1
  loanQuotaCoef: string; // Loan quota coefficient. Loan quota = quota * level
  irDiscount: string; // Interest rate discount (Deprecated)
}

export interface RegularUserInterestInfo {
  level: string; // Regular user Level, e.g. Lv1
  loanQuotaCoef: string; // Loan quota coefficient. Loan quota = quota * level
  irDiscount: string; // Interest rate discount (Deprecated)
}

export interface ConfigCcyItem {
  ccy: string; // Currency
  rate: string; // Daily rate
}

export interface LoanQuotaConfig {
  ccy: string; // Currency
  stgyType: string; // Strategy type: 0=general strategy, 1=delta neutral strategy. If only 0 is returned, loan quota is shared between strategies
  quota: string; // Loan quota in absolute value
  level: string; // VIP level
}

export interface InterestRateAndLoanQuota {
  basic: BasicInterestRate[];
  vip: VIPInterestInfo[];
  regular: RegularUserInterestInfo[];
  configCcyList: ConfigCcyItem[]; // Currencies that have loan quota configured using customized absolute value
  config: LoanQuotaConfig[]; // The currency details of loan quota configured using customized absolute value
}
