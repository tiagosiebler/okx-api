import { numberInString } from '../shared';

export interface PaginatedSymbolRequest {
  ccy?: string;
  after?: numberInString;
  before?: numberInString;
  limit?: numberInString;
}
