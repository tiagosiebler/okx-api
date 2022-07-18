export type numberInString<T = string> = T;

export type AlgoOrderType =
  | 'conditional'
  | 'oco'
  | 'trigger'
  | 'move_order_stop'
  | 'iceberg'
  | 'twap';

export type AlgoState = 'effective' | 'canceled' | 'order_failed';

export type ContractGridDirection = 'long' | 'short' | 'neutral';

export type GridAlgoOrderType = 'grid' | 'contract_grid';

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

export type PositionSide = 'net' | 'long' | 'short';

export type PriceTriggerType = 'last' | 'index' | 'mark';

export type TradeMode = 'cross' | 'isolated' | 'cash';
