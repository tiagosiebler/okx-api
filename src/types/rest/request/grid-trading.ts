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
}

export interface StopGridAlgoOrderRequest {
  algoId: string;
  instId: string;
  algoOrdType: GridAlgoOrderType;
  stopType: '1' | '2';
}
