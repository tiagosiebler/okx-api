export interface RecurringBuyInfo {
  ccy: string;
  ratio: string;
}

export interface PlaceRecurringBuyOrderRequest {
  stgyName: string;
  recurringList: RecurringBuyInfo[];
  period: 'monthly' | 'weekly' | 'daily' | 'hourly';
  recurringDay?: string;
  recurringHour?: string;
  recurringTime: string;
  timeZone: string;
  amt: string;
  investmentCcy: 'USDT' | 'USDC';
  tdMode: 'cross' | 'cash';
  algoClOrdId?: string;
  tag?: string;
}

export interface AmendRecurringBuyOrderRequest {
  algoId: string;
  stgyName: string;
}

export interface GetRecurringBuyOrderListRequest {
  algoId?: string;
  after?: string;
  before?: string;
  limit?: string;
}


