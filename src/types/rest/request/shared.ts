import { numberInString } from '../shared.js';

export interface PaginatedSymbolRequest {
  ccy?: string;
  after?: numberInString;
  before?: numberInString;
  limit?: numberInString;
}
