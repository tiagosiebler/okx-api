import { InstrumentType, numberInString } from '../shared';

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
  confirm
];

export type CandleNoVolume = [
  timestamp,
  openPrice,
  highPrice,
  lowPrice,
  closePrice
];

export interface Trade {
  instId: string;
  side: string;
  sz: string;
  px: string;
  tradeId: string;
  ts: string;
}

export interface Instrument {
  instType: InstrumentType;
  instId: string;
  uly: string;
  instFamily: string;
  category: string;
  baseCcy: string;
  quoteCcy: string;
  settCcy: string;
  ctVal: string;
  ctMult: string;
  ctValCcy: string;
  optType: string;
  stk: string;
  listTime: string;
  expTime: string;
  lever: string;
  tickSz: string;
  lotSz: string;
  minSz: string;
  ctType: string;
  alias: string;
  state: string;
  maxLmtSz: string;
  maxMktSz: string;
  maxTwapSz: string;
  maxIcebergSz: string;
  maxTriggerSz: string;
  maxStopSz: string;
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