export interface PlaceSpreadOrderRequest {
  sprdId: string;
  clOrdId?: string;
  tag?: string;
  side: 'buy' | 'sell';
  ordType: 'limit' | 'post_only' | 'ioc';
  sz: string;
  px: string;
}

export interface UpdateSpreadOrderRequest {
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
}

export interface GetActiveSpreadOrdersRequest {
  sprdId?: string;
  ordType?: 'limit' | 'post_only' | 'ioc';
  state?: 'live' | 'partially_filled';
  beginId?: string;
  endId?: string;
  limit?: string;
}

export interface GetSpreadOrderHistoryRequest {
  sprdId?: string;
  ordType?: 'limit' | 'post_only' | 'ioc';
  state?: 'canceled' | 'filled';
  beginId?: string;
  endId?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetSpreadOrderHistoryArchiveRequest {
  sprdId?: string;
  ordType?: 'limit' | 'post_only' | 'ioc';
  state?: 'canceled' | 'filled';
  instType?: 'SPOT' | 'FUTURES' | 'SWAP';
  instFamily?: string;
  beginId?: string;
  endId?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetSpreadTradesRequest {
  sprdId?: string;
  tradeId?: string;
  ordId?: string;
  beginId?: string;
  endId?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface GetSpreadsRequest {
  baseCcy?: string;
  instId?: string;
  sprdId?: string;
  state?: 'live' | 'suspend' | 'expired';
}

export interface GetSpreadCandlesRequest {
  sprdId: string;
  bar?: string;
  after?: string;
  before?: string;
  limit?: string;
}
