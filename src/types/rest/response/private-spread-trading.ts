export interface PlaceSpreadOrderResponse {
  ordId: string;
  clOrdId: string;
  tag: string;
  sCode: string;
  sMsg: string;
}

export interface CancelSpreadOrderResponse {
  ordId: string;
  clOrdId: string;
  sCode: string;
  sMsg: string;
}

export interface UpdateSpreadOrderResponse {
  ordId: string;
  clOrdId: string;
  reqId: string;
  sCode: string;
  sMsg: string;
}

export interface SpreadOrder  {
  instId: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  px: string;
  sz: string;
  ordType: 'limit' | 'post_only' | 'ioc';
  side: 'buy' | 'sell';
  fillSz: string;
  fillPx: string;
  tradeId: string;
  accFillSz: string;
  pendingFillSz: string;
  pendingSettleSz: string;
  canceledSz: string;
  avgPx: string;
  state: 'canceled' | 'live' | 'partially_filled' | 'filled';
  cancelSource: string;
  uTime: string;
  cTime: string;
}

export interface SpreadTradeLeg {
  instId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  fee: string;
  feeCcy: string;
  tradeId: string;
}

export interface SpreadTrade {
  sprdId: string;
  tradeId: string;
  ordId: string;
  clOrdId: string;
  tag: string;
  fillPx: string;
  fillSz: string;
  side: 'buy' | 'sell';
  state: 'filled' | 'rejected';
  execType: 'T' | 'M';
  ts: string;
  legs: SpreadTradeLeg[];
}

export interface SpreadLeg {
  instId: string;
  side: 'buy' | 'sell';
}

export interface SpreadDetails {
  sprdId: string;
  sprdType: 'linear' | 'inverse' | 'hybrid';
  state: 'live' | 'expired' | 'suspend';
  baseCcy: string;
  szCcy: string;
  quoteCcy: string;
  tickSz: string;
  minSz: string;
  lotSz: string;
  listTime: string;
  expTime: string;
  uTime: string;
  legs: SpreadLeg[];
}

export interface OrderBookEntry {
  price: string;
  quantity: string;
  orderCount: string;
}

export interface SpreadOrderBook {
  asks: OrderBookEntry[];
  bids: OrderBookEntry[];
  ts: string;
}

export interface SpreadTicker {
  sprdId: string;
  last: string;
  lastSz: string;
  askPx: string;
  askSz: string;
  bidPx: string;
  bidSz: string;
  open24h: string;
  high24h: string;
  low24h: string;
  vol24h: string;
  ts: string;
}

export interface PublicSpreadTrade {
  sprdId: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  ts: string;
}

export interface SpreadCandle {
  ts: string;
  o: string;
  h: string;
  l: string;
  c: string;
  vol: string;
  confirm: string;
}
