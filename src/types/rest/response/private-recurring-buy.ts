export interface RecurringBuyOrderResult {
  algoId: string;
  algoClOrdId: string;
  sCode: string;
  sMsg: string;
}

export interface RecurringBuyInfoResult  {
  ccy: string;
  ratio: string;
}

export interface RecurringBuyOrder {
  algoId: string;
  algoClOrdId: string;
  instType: string;
  cTime: string;
  uTime: string;
  algoOrdType: 'recurring';
  state: 'running' | 'stopping';
  stgyName: string;
  recurringList: RecurringBuyInfoResult[];
  period: 'monthly' | 'weekly' | 'daily' | 'hourly';
  recurringDay?: string;
  recurringHour?: string;
  recurringTime: string;
  timeZone: string;
  amt: string;
  investmentAmt: string;
  investmentCcy: 'USDT' | 'USDC';
  totalPnl: string;
  totalAnnRate: string;
  pnlRatio: string;
  mktCap: string;
  cycles: string;
  tag: string;
}


export interface RecurringBuyInfoOrder {
  ccy: string;
  ratio: string;
  totalAmt: string;
  profit: string;
  avgPx: string;
  px: string;
}



export interface RecurringBuySubOrder {
  algoId: string;
  instType: string;
  instId: string;
  algoOrdType: 'recurring';
  ordId: string;
  cTime: string;
  uTime: string;
  tdMode: 'cross' | 'cash';
  ordType: 'market';
  sz: string;
  state: 'canceled' | 'live' | 'partially_filled' | 'filled' | 'cancelling';
  side: 'buy' | 'sell';
  px: string;
  fee: string;
  feeCcy: string;
  avgPx: string;
  accFillSz: string;
  tag: string;
}
