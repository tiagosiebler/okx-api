import { AxiosRequestConfig } from 'axios';
import {
  getRestBaseUrl,
  OKXEnvironment,
  RestClientOptions,
} from './util/requestUtils';
import BaseRestClient, { APICredentials } from './util/BaseRestClient';
import { APIResponse, InstrumentType, numberInString } from './types/rest';
import { Ticker } from './types/rest/response';
import {
  AlgoOrderRequest,
  AmendOrderRequest,
  CancelAlgoOrderRequest,
  OrderIdRequest,
  ClosePositionRequest,
  OrderRequest,
  OrderHistoryRequest,
  FillsHistoryRequest,
  AlgoRecentHistoryRequest,
  AlgoLongHistoryRequest,
  PaginatedSymbolRequest,
} from './types/rest/request';

export class RestClient extends BaseRestClient {
  /**
   * @public Creates an instance of the REST API client.
   */
  constructor(
    credentials?: APICredentials | null,
    environment: OKXEnvironment = 'live',
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {}
  ) {
    super(
      credentials,
      getRestBaseUrl(environment, restClientOptions),
      restClientOptions,
      requestOptions,
      environment
    );
    return this;
  }

  async getServerTime(): Promise<number> {
    const response = await this.get('/api/v5/public/time');

    const timestamp = Number(response?.data[0]?.ts);
    if (
      !Array.isArray(response.data) ||
      isNaN(timestamp) ||
      typeof timestamp !== 'number'
    ) {
      throw response;
    }
    return timestamp;
  }

  /**
   *
   * Trade endpoints (private)
   *
   */

  placeOrder(params: OrderRequest): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/order', params);
  }

  placeMultipleOrders(params: OrderRequest[]): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/batch-orders', params);
  }

  cancelOrder(params: OrderIdRequest): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/cancel-order', params);
  }

  cancelMultipleOrders(
    params: OrderIdRequest[]
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/cancel-batch-orders', params);
  }

  amendOrder(params: AmendOrderRequest): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/amend-order', params);
  }

  amendMultipleOrders(
    params: AmendOrderRequest[]
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/amend-batch-orders', params);
  }

  closePositions(params: ClosePositionRequest): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/close-position', params);
  }

  getOrderDetails(params: OrderIdRequest): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/order', params);
  }

  getOrderList(params?: OrderHistoryRequest): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/orders-pending', params);
  }

  /**
   * Get history for last 7 days
   */
  getOrderHistory(params: OrderHistoryRequest): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/orders-history', params);
  }

  /**
   * Get history for last 3 months
   */
  getOrderHistoryArchive(
    params: OrderHistoryRequest
  ): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/orders-history-archive', params);
  }

  /**
   * Get history for last 7 days
   */
  getFills(params?: FillsHistoryRequest): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/fills', params);
  }

  /**
   * Get history for last 3 months
   */
  getFillsHistory(params: FillsHistoryRequest): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/fills-history', params);
  }

  placeAlgoOrder(params: AlgoOrderRequest): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/order-algo', params);
  }

  cancelAlgoOrder(
    params: CancelAlgoOrderRequest[]
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/cancel-algos', params);
  }

  cancelAdvanceAlgoOrder(
    params: CancelAlgoOrderRequest[]
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/trade/cancel-advance-algos', params);
  }

  getAlgoOrderList(
    params: AlgoRecentHistoryRequest
  ): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/orders-algo-pending', params);
  }

  getAlgoOrderHistory(
    params: AlgoLongHistoryRequest
  ): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/trade/orders-algo-history', params);
  }

  /**
   *
   * Block trading endpoints (private)
   *
   */

  getBlockCounterparties(): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/rfq/counterparties');
  }

  createBlockRFQ(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/create-rfq', params);
  }

  cancelBlockRFQ(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-rfq');
  }

  cancelMultipleBlockRFQs(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-rfqs');
  }

  cancelAllRFQs(): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-all-rfqs');
  }

  executeBlockQuote(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/execute-quote', params);
  }

  createBlockQuote(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/create-quote', params);
  }

  cancelBlockQuote(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-quote', params);
  }

  cancelMultipleBlockQuotes(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-quotes', params);
  }

  cancelAllBlockQuotes(): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/rfq/cancel-all-quotes');
  }

  getBlockRFQs(params: unknown): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/rfq/rfqs', params);
  }

  getBlockQuotes(params: unknown): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/rfq/quotes', params);
  }

  getBlockTrades(params: unknown): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/rfq/trades', params);
  }

  getPublicBlockTrades(params: unknown): Promise<APIResponse<unknown>> {
    return this.get('/api/v5/rfq/public-trades', params);
  }

  /**
   *
   * Funding endpoints (private)
   *
   */

  getCurrencies(ccy?: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/currencies', { ccy });
  }

  getBalances(ccy?: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/balances', { ccy });
  }

  getAccountAssetValuation(ccy?: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/asset-valuation', { ccy });
  }

  fundsTransfer(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/transfer', params);
  }

  getFundsTransferState(params: {
    transId?: string;
    clientId?: string;
    type?: '0' | '1' | '2';
  }): Promise<APIResponse<unknown>> {
    return this.getPrivate('asdfadsfdsfasfasfasfasdf', params);
  }

  getAssetBillsDetails(params?: {
    ccy?: string;
    type?: numberInString;
    clientId?: string;
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
  }): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/bills', params);
  }

  getLightningDeposits(
    ccy: string,
    amt: numberInString,
    to?: '6' | '18'
  ): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/deposit-lightning', { ccy, amt, to });
  }

  getDepositAddress(ccy: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/deposit-address', { ccy });
  }

  getDepositHistory(params: unknown): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/deposit-history', params);
  }

  withdraw(params: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/withdrawal', params);
  }

  withdrawLightning(
    ccy: string,
    invoice: string,
    memo?: string
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/withdrawal-lightning', {
      ccy,
      invoice,
      memo,
    });
  }

  cancelWithdrawal(wdId: string): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/cancel-withdrawal', { wdId });
  }

  getWithdrawalHistory(params?: unknown): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/withdrawal-history', params);
  }

  smallAssetsConvert(ccy: string[]): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/convert-dust-assets', { ccy });
  }

  getSavingBalance(ccy?: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/saving-balance', { ccy });
  }

  savingsPurchaseRedemption(
    ccy: string,
    amt: numberInString,
    side: 'purchase' | 'redempt',
    rate: numberInString
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/purchase_redempt', {
      ccy,
      amt,
      side,
      rate,
    });
  }

  setLendingRate(
    ccy: string,
    rate: numberInString
  ): Promise<APIResponse<unknown>> {
    return this.postPrivate('/api/v5/asset/set-lending-rate', { ccy, rate });
  }

  getLendingHistory(
    params?: PaginatedSymbolRequest
  ): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/asset/lending-history', params);
  }

  getPublicBorrowInfo(ccy?: string): Promise<APIResponse<unknown>> {
    return this.get('/api/v5/asset/lending-rate-summary', { ccy });
  }

  getPublicBorrowHistory(
    params?: PaginatedSymbolRequest
  ): Promise<APIResponse<unknown>> {
    return this.get('/api/v5/asset/lending-rate-history', params);
  }

  /**
   *
   * Convert endpoints (private)
   *
   */

  /**
   *
   * Account endpoints (private)
   *
   */

  // getFeeRates(): Promise<unknown> {
  //   return this.getPrivate('/api/v5/account/trade-fee');
  // }

  /**
   *
   * SubAccount endpoints (private)
   *
   */

  /**
   *
   * Grid trading endpoints (private)
   *
   */

  /**
   *
   * Market data endpoints (public)
   *
   */

  getTickers(
    instrumentType: InstrumentType,
    uly?: string
  ): Promise<APIResponse<Ticker[]>> {
    return this.get('/api/v5/market/tickers', {
      instType: instrumentType,
      uly,
    });
  }

  getTicker(instId: string): Promise<APIResponse<Ticker[]>> {
    return this.get('/api/v5/market/ticker', {
      instId,
    });
  }

  /**
   *
   * Public data endpoints (public)
   *
   */

  /**
   *
   * Trading data endpoints (public)
   *
   */

  /**
   *
   * Status endpoints (public)
   *
   */

  getSystemStatus(state?: string): Promise<APIResponse<unknown>> {
    return this.getPrivate('/api/v5/system/status', { state });
  }

  // copy pasta this for extra lazyness

  getASDFDASFASDFASF(params: unknown): Promise<APIResponse<unknown>> {
    return this.getPrivate('asdfadsfdsfasfasfasfasdf', params);
  }
}
