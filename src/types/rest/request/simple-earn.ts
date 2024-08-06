export interface GetLendingOrderListRequest {
  ordId?: string;
  ccy?: string;
  term?: '30D';
  state?: 'pending' | 'earning' | 'expired' | 'settled';
  after?: string;
  before?: string;
  limit?: string;
}

export interface LendingOrder {
  ccy: string;
  amt: string;
  rate: string;
  term: '30D';
  autoRenewal?: boolean;
}

export interface GetLendingSubOrderListRequest {
  ordId: string;
  state?: 'earning' | 'expired' | 'settled';
  after?: string;
  before?: string;
  limit?: string;
}
