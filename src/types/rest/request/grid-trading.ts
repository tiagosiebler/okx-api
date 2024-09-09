import { InstrumentType } from '../shared';

export type GridAlgoOrderType = 'grid' | 'contract_grid' | 'moon_grid';

export interface GetGridAlgoOrdersRequest {
  algoOrdType: GridAlgoOrderType;
  algoId?: string;
  instId?: string;
  instType?: 'SPOT' | 'MARGIN' | 'SWAP' | 'FUTURES';
  after?: string;
  before?: string;
  limit?: string;
}

export interface GridAlgoTrigger {
  triggerAction: 'start' | 'stop';
  triggerStrategy: 'instant' | 'price' | 'rsi';
  delaySeconds?: string;
  timeframe?: '3m' | '5m' | '15m' | '30m' | '1H' | '4H' | '1D';
  thold?: string;
  triggerCond?: 'cross_up' | 'cross_down' | 'above' | 'below' | 'cross';
  timePeriod?: string;
  triggerPx?: string;
  stopType?: '1' | '2';
}

export interface GridAlgoOrderRequest {
  instId: string;
  algoOrdType: GridAlgoOrderType;
  maxPx: string;
  minPx: string;
  gridNum: string;
  runType: '1' | '2';
  quoteSz?: string;
  baseSz?: string;
  sz?: string;
  direction?: 'long' | 'short' | 'neutral';
  lever?: string;
  basePos?: boolean;
  tpRatio?: string;
  slRatio?: string;
  triggerParams?: GridAlgoTrigger[];
}

export interface StopGridAlgoOrderRequest {
  algoId: string;
  instId: string;
  algoOrdType: GridAlgoOrderType;
  stopType: '1' | '2';
}

export interface CloseContractGridPositionRequest {
  algoId: string;
  mktClose: boolean;
  sz?: string;
  px?: string;
}

export interface GetRSIBackTestingRequest {
  instId: string;
  timeframe: '3m' | '5m' | '15m' | '30m' | '1H' | '4H' | '1D';
  thold: string;
  timePeriod: string;
  triggerCond?: 'cross_up' | 'cross_down' | 'above' | 'below' | 'cross';
  duration?: string;
}

export interface MaxGridQuantityParams {
  instId: string;
  runType: '1' | '2';
  algoOrdType: 'grid' | 'contract_grid';
  maxPx: string;
  minPx: string;
  lever?: string;
}
