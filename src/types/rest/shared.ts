export type numberInString<T = string> = T;

export interface APIResponse<T> {
  code: '0';
  msg: '';
  data: T;
}

export type AlgoOrderType =
  | 'conditional'
  | 'oco'
  | 'trigger'
  | 'move_order_stop'
  | 'iceberg'
  | 'twap';

export type AlgoOrderState = 
  | 'live'
  | 'pause'
  | 'partially_effective'
  | 'effective'
  | 'canceled'
  | 'order_failed'
  | 'partially_failed';

export type AlgoPositionSide = 
  | 'long' 
  | 'short';

export type ContractGridDirection = 'long' | 'short' | 'neutral';

export type GridAlgoSubOrderType = 'live' | 'filled';

export type InstrumentType = 'SPOT' | 'MARGIN' | 'SWAP' | 'FUTURES' | 'OPTION';

export type MarginMode = 'cross' | 'isolated';

export type OrderSide = 'buy' | 'sell';

export type OrderType =
  | 'market'
  | 'limit'
  | 'post_only'
  | 'fok'
  | 'ioc'
  | 'optimal_limit_ioc';

export type OrderState = 
  | 'canceled' 
  | 'live'
  | 'partially_filled'
  | 'filled'
  | 'mmp_canceled';

export type PositionSide = 
  | 'net' 
  | 'long' 
  | 'short';

export type PriceTriggerType = 'last' | 'index' | 'mark';

export interface RFQLeg {
  instId: string;
  sz: string;
  side: OrderSide;
  tgtCcy?: string;
}

export interface RFQQuoteLegExtended {
  px: string;
  sz: string;
  instId: string;
  side: string;
  fee: string;
  feeCcy: string;
  tradeId: string;
}

export type TradeMode = 'cross' | 'isolated' | 'cash';

export interface TimestampObject {
  ts: numberInString;
}

export interface Pagination {
  after?: string;
  before?: string;
  limit?: string;
}

export type PosMode = 'long_short_mode' | 'net_mode'
