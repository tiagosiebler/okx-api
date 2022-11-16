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
