import { AxiosRequestConfig } from 'axios';
import {
  getRestBaseUrl,
  OKXEnvironment,
  RestClientOptions,
} from './util/requestUtils';
import BaseRestClient, { APICredentials } from './util/BaseRestClient';
import {
  ContractGridDirection,
  GridAlgoOrderType,
  GridAlgoSubOrderType,
  InstrumentType,
  MarginMode,
  numberInString,
  Ticker,
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
  OrderResult,
  CancelledOrderResult,
  AmendedOrder,
  ClosedPositions,
  OrderDetails,
  OrderListItem,
  HistoricOrder,
  OrderFill,
  AlgoOrderResult,
  AlgoOrderListItem,
  HistoricAlgoOrder,
  BlockCounterParty,
  CreateBlockRFQRequest,
  CreateRFQResult,
  CancelBlockRFQRequest,
  CancelBlockQuoteResult,
  CancelMultipleBlockRFQRequest,
  TimestampObject,
  ExecuteBlockQuoteResult,
  ExecuteBlockQuoteRequest,
  CreateBlockQuoteRequest,
  CreateBlockQuoteResult,
  CancelBlockRFQResult,
  CancelBlockQuoteRequest,
  CancelMultipleBlockQuoteRequest,
  BlockRFQResult,
  GetBlockRFQSParams,
  GetBlockQuoteParams,
  GetBlockQuoteResult,
  FundingCurrency,
  FundingBalance,
  AccountAssetValuation,
  FundTransferResult,
  FundTransferState,
  AssetBillDetails,
  AccountBalance,
  GetPositionsParams,
  AccountPosition,
  GetHistoricPositionParams,
  HistoricAccountPosition,
  AccountPositionRisk,
  AccountBill,
  AccountConfiguration,
  AccountPositionModeResult,
  AccountLeverageResult,
  AccountMaxOrderAmount,
  AccountMaxTradableAmount,
  AccountChangeMarginResult,
  AccountLeverage,
  AccountMaxLoan,
  AccountFeeRate,
  AccountIsolatedMode,
  SubAccount,
  SubAccountAPIReset,
  SubAccountBalances,
  SubAccountTransferResult,
  IndexTicker,
  OrderBook,
  Candle,
  CandleNoVolume,
  Trade,
} from './types/rest';

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

    const timestamp = Array.isArray(response) ? Number(response[0]?.ts) : NaN;
    if (
      !Array.isArray(response) ||
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

  placeOrder(params: OrderRequest): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/order', params);
  }

  placeMultipleOrders(params: OrderRequest[]): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/batch-orders', params);
  }

  cancelOrder(params: OrderIdRequest): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-order', params);
  }

  cancelMultipleOrders(
    params: OrderIdRequest[]
  ): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-batch-orders', params);
  }

  amendOrder(params: AmendOrderRequest): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-order', params);
  }

  amendMultipleOrders(params: AmendOrderRequest[]): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-batch-orders', params);
  }

  closePositions(params: ClosePositionRequest): Promise<ClosedPositions[]> {
    return this.postPrivate('/api/v5/trade/close-position', params);
  }

  getOrderDetails(params: OrderIdRequest): Promise<OrderDetails[]> {
    return this.getPrivate('/api/v5/trade/order', params);
  }

  getOrderList(params?: OrderHistoryRequest): Promise<OrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-pending', params);
  }

  /**
   * Get history for last 7 days
   */
  getOrderHistory(params: OrderHistoryRequest): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history', params);
  }

  /**
   * Get history for last 3 months
   */
  getOrderHistoryArchive(
    params: OrderHistoryRequest
  ): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history-archive', params);
  }

  /**
   * Get history for last 7 days
   */
  getFills(params?: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills', params);
  }

  /**
   * Get history for last 3 months
   */
  getFillsHistory(params: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills-history', params);
  }

  placeAlgoOrder(params: AlgoOrderRequest): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/order-algo', params);
  }

  cancelAlgoOrder(
    params: CancelAlgoOrderRequest[]
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-algos', params);
  }

  cancelAdvanceAlgoOrder(
    params: CancelAlgoOrderRequest[]
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-advance-algos', params);
  }

  getAlgoOrderList(
    params: AlgoRecentHistoryRequest
  ): Promise<AlgoOrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-pending', params);
  }

  getAlgoOrderHistory(
    params: AlgoLongHistoryRequest
  ): Promise<HistoricAlgoOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-history', params);
  }

  /**
   *
   * Block trading endpoints (private)
   *
   */

  getBlockCounterParties(): Promise<BlockCounterParty[]> {
    return this.getPrivate('/api/v5/rfq/counterparties');
  }

  createBlockRFQ(params: CreateBlockRFQRequest): Promise<CreateRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/create-rfq', params);
  }

  cancelBlockRFQ(
    params?: CancelBlockRFQRequest
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-rfq', params);
  }

  cancelMultipleBlockRFQs(
    params: CancelMultipleBlockRFQRequest
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-rfqs', params);
  }

  cancelAllRFQs(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-rfqs');
  }

  executeBlockQuote(
    params: ExecuteBlockQuoteRequest
  ): Promise<ExecuteBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/execute-quote', params);
  }

  createBlockQuote(
    params: CreateBlockQuoteRequest
  ): Promise<CreateBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/create-quote', params);
  }

  cancelBlockQuote(
    params: CancelBlockQuoteRequest
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-quote', params);
  }

  cancelMultipleBlockQuotes(
    params: CancelMultipleBlockQuoteRequest
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-quotes', params);
  }

  cancelAllBlockQuotes(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-quotes');
  }

  getBlockRFQs(params?: GetBlockRFQSParams): Promise<BlockRFQResult[]> {
    return this.getPrivate('/api/v5/rfq/rfqs', params);
  }

  getBlockQuotes(params?: GetBlockQuoteParams): Promise<GetBlockQuoteResult[]> {
    return this.getPrivate('/api/v5/rfq/quotes', params);
  }

  getBlockTrades(params: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/rfq/trades', params);
  }

  getPublicRFQBlockTrades(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/rfq/public-trades', params);
  }

  /**
   *
   * Funding endpoints (private)
   *
   */

  getCurrencies(ccy?: string): Promise<FundingCurrency[]> {
    return this.getPrivate('/api/v5/asset/currencies', { ccy });
  }

  getBalances(ccy?: string): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/balances', { ccy });
  }

  getAccountAssetValuation(ccy?: string): Promise<AccountAssetValuation[]> {
    return this.getPrivate('/api/v5/asset/asset-valuation', { ccy });
  }

  fundsTransfer(params: unknown): Promise<FundTransferResult[]> {
    return this.postPrivate('/api/v5/asset/transfer', params);
  }

  getFundsTransferState(params: {
    transId?: string;
    clientId?: string;
    type?: '0' | '1' | '2';
  }): Promise<FundTransferState[]> {
    return this.getPrivate('/api/v5/asset/transfer-state', params);
  }

  getAssetBillsDetails(params?: {
    ccy?: string;
    type?: numberInString;
    clientId?: string;
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
  }): Promise<AssetBillDetails[]> {
    return this.getPrivate('/api/v5/asset/bills', params);
  }

  getLightningDeposits(
    ccy: string,
    amt: numberInString,
    to?: '6' | '18'
  ): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/deposit-lightning', { ccy, amt, to });
  }

  getDepositAddress(ccy: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/deposit-address', { ccy });
  }

  getDepositHistory(params: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/deposit-history', params);
  }

  withdraw(params: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/withdrawal', params);
  }

  withdrawLightning(
    ccy: string,
    invoice: string,
    memo?: string
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/withdrawal-lightning', {
      ccy,
      invoice,
      memo,
    });
  }

  cancelWithdrawal(wdId: string): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/cancel-withdrawal', { wdId });
  }

  getWithdrawalHistory(params?: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/withdrawal-history', params);
  }

  smallAssetsConvert(ccy: string[]): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/convert-dust-assets', { ccy });
  }

  getSavingBalance(ccy?: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/saving-balance', { ccy });
  }

  savingsPurchaseRedemption(
    ccy: string,
    amt: numberInString,
    side: 'purchase' | 'redempt',
    rate: numberInString
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/purchase_redempt', {
      ccy,
      amt,
      side,
      rate,
    });
  }

  setLendingRate(ccy: string, rate: numberInString): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/set-lending-rate', { ccy, rate });
  }

  getLendingHistory(params?: PaginatedSymbolRequest): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/lending-history', params);
  }

  getPublicBorrowInfo(ccy?: string): Promise<unknown[]> {
    return this.get('/api/v5/asset/lending-rate-summary', { ccy });
  }

  getPublicBorrowHistory(params?: PaginatedSymbolRequest): Promise<unknown[]> {
    return this.get('/api/v5/asset/lending-rate-history', params);
  }

  /**
   *
   * Convert endpoints (private)
   *
   */

  getConvertCurrencies(): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/convert/currencies');
  }

  getConvertCurrencyPair(fromCcy: string, toCcy: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/convert/currency-pair', {
      fromCcy,
      toCcy,
    });
  }

  estimateConvertQuote(params: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/convert/estimate-quote', params);
  }

  convertTrade(params: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/asset/convert/trade', params);
  }

  getConvertHistory(params?: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/convert/history', params);
  }

  /**
   *
   * Account endpoints (private)
   *
   */

  getBalance(ccy?: string): Promise<AccountBalance[]> {
    return this.getPrivate('/api/v5/account/balance', { ccy });
  }

  getPositions(params?: GetPositionsParams): Promise<AccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions', params);
  }

  getPositionsHistory(
    params?: GetHistoricPositionParams
  ): Promise<HistoricAccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions-history', params);
  }

  getAccountPositionRisk(
    instType?: Omit<'SPOT', InstrumentType>
  ): Promise<AccountPositionRisk[]> {
    return this.getPrivate('/api/v5/account/account-position-risk', {
      instType,
    });
  }

  /** Up to last 7 days */
  getBills(params?: unknown): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills', params);
  }

  /** Last 3 months */
  getBillsArchive(params?: unknown): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills-archive', params);
  }

  getAccountConfiguration(): Promise<AccountConfiguration[]> {
    return this.getPrivate('/api/v5/account/config');
  }

  setPositionMode(
    posMode: 'long_short_mode' | 'net'
  ): Promise<AccountPositionModeResult[]> {
    return this.postPrivate('/api/v5/account/set-position-mode', { posMode });
  }

  setLeverage(params: unknown): Promise<AccountLeverageResult[]> {
    return this.postPrivate('/api/v5/account/set-leverage', params);
  }

  /** Max buy/sell amount or open amount */
  getMaxOrderAmount(params: unknown): Promise<AccountMaxOrderAmount[]> {
    return this.getPrivate('/api/v5/account/max-size', params);
  }

  getMaxAvailableTradableAmount(
    params: unknown
  ): Promise<AccountMaxTradableAmount[]> {
    return this.getPrivate('/api/v5/account/max-avail-size', params);
  }

  changePositionMargin(params: unknown): Promise<AccountChangeMarginResult[]> {
    return this.postPrivate('/api/v5/account/position/margin-balance', params);
  }

  getLeverage(instId: string, mgnMode: MarginMode): Promise<AccountLeverage[]> {
    return this.getPrivate('/api/v5/account/leverage-info', {
      instId,
      mgnMode,
    });
  }

  getMaxLoan(
    instId: string,
    mgnMode: MarginMode,
    mgnCcy?: string
  ): Promise<AccountMaxLoan[]> {
    return this.getPrivate('/api/v5/account/max-loan', {
      instId,
      mgnMode,
      mgnCcy,
    });
  }

  getFeeRates(
    instType: InstrumentType,
    instId?: string,
    uly?: string
  ): Promise<AccountFeeRate[]> {
    return this.getPrivate('/api/v5/account/trade-fee', {
      instType,
      instId,
      uly,
    });
  }

  getInterestAccrued(params?: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/interest-accrued', params);
  }

  getInterestRate(ccy?: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/interest-rate', { ccy });
  }

  setGreeksDisplayType(greeksType: 'PA' | 'BS'): Promise<unknown[]> {
    return this.postPrivate('/api/v5/account/set-greeks', { greeksType });
  }

  setIsolatedMode(
    isoMode: 'automatic' | 'autonomy',
    type: 'MARGIN' | 'CONTRACTS'
  ): Promise<AccountIsolatedMode[]> {
    return this.postPrivate('/api/v5/account/set-isolated-mode', {
      isoMode,
      type,
    });
  }

  getMaxWithdrawals(ccy?: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/max-withdrawal', { ccy });
  }

  getAccountRiskState(): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/risk-state');
  }

  VIPLoanBorrowRepay(
    ccy: string,
    side: 'borrow' | 'repay',
    amt: numberInString
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/account/borrow-repay', { ccy, side, amt });
  }

  getVIPLoanBorrowRepayHistory(params?: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/borrow-repay-history', params);
  }

  getBorrowInterestLimits(params?: {
    type?: '1' | '2';
    ccy?: string;
  }): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/interest-limits', params);
  }

  positionBuilder(params?: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/account/simulated_margin', params);
  }

  getGreeks(ccy?: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/greeks', { ccy });
  }

  getPMLimitation(
    instType: 'SWAP' | 'FUTURES' | 'OPTION',
    uly: string
  ): Promise<unknown[]> {
    return this.getPrivate('/api/v5/account/position-tiers', { instType, uly });
  }

  /**
   *
   * SubAccount endpoints (private)
   *
   */

  getSubAccountList(params?: unknown): Promise<SubAccount[]> {
    return this.getPrivate('/api/v5/users/subaccount/list', params);
  }

  resetSubAccountAPIKey(
    subAcct: string,
    apiKey: string,
    options?: {
      label?: string;
      perm?: string;
      ip?: string;
    }
  ): Promise<SubAccountAPIReset[]> {
    return this.postPrivate('/api/v5/account/subaccount/balances', {
      subAcct,
      apiKey,
      ...options,
    });
  }

  getSubAccountBalances(subAcct: string): Promise<SubAccountBalances[]> {
    return this.getPrivate('/api/v5/account/subaccount/balances', { subAcct });
  }

  getSubAccountFundingBalances(
    subAcct: string,
    ccy?: string
  ): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/subaccount/balances', {
      subAcct,
      ccy,
    });
  }

  getSubAccountTransferHistory(params?: unknown): Promise<unknown[]> {
    return this.getPrivate('/api/v5/asset/subaccount/bills', params);
  }

  transferSubAccountBalance(
    params: unknown
  ): Promise<SubAccountTransferResult[]> {
    return this.postPrivate('/api/v5/asset/subaccount/transfer', params);
  }

  setSubAccountTransferOutPermission(
    subAcct: string,
    canTransOut: boolean = true
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/users/subaccount/set-transfer-out', {
      subAcct,
      canTransOut,
    });
  }

  getSubAccountListCustodyTrading(subAcct?: string): Promise<unknown[]> {
    return this.getPrivate('/api/v5/users/entrust-subaccount-list', {
      subAcct,
    });
  }

  /**
   *
   * Grid trading endpoints (private)
   *
   */

  placeGridAlgoOrder(params: unknown): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/order-algo', params);
  }

  amendGridAlgoOrder(
    algoId: string,
    instId: string,
    triggerPx: { slTriggerPx?: numberInString; tpTriggerPx?: numberInString }
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/amend-order-algo', {
      algoId,
      instId,
      ...triggerPx,
    });
  }

  stopGridAlgoOrder(
    algoId: string,
    instId: string,
    algoOrdType: GridAlgoOrderType,
    stopType: '1' | '2'
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/stop-order-algo', {
      algoId,
      instId,
      algoOrdType,
      stopType,
    });
  }

  getGridAlgoOrderList(params: unknown): Promise<unknown[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-pending',
      params
    );
  }

  getGridAlgoOrderHistory(params: unknown): Promise<unknown[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-history',
      params
    );
  }

  getGridAlgoOrderDetails(
    algoOrdType: GridAlgoOrderType,
    algoId: string
  ): Promise<unknown[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/orders-algo-details', {
      algoOrdType,
      algoId,
    });
  }

  getGridAlgoSubOrders(
    algoOrdType: GridAlgoOrderType,
    algoId: string,
    type: GridAlgoSubOrderType,
    groupId?: string,
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: number;
    }
  ): Promise<unknown[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/sub-orders', {
      algoOrdType,
      algoId,
      type,
      groupId,
      ...pagination,
    });
  }

  /** Only contract grid supports this method */
  getGridAlgoOrderPositions(
    algoOrdType: 'contract_grid',
    algoId: string
  ): Promise<unknown[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/positions', {
      algoOrdType,
      algoId,
    });
  }

  spotGridWithdrawIncome(algoId: string): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/withdraw-income', {
      algoId,
    });
  }

  computeGridMarginBalance(
    algoId: string,
    type: 'add' | 'reduce',
    amt?: numberInString
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/compute-margin-balance', {
      algoId,
      type,
      amt,
    });
  }

  adjustGridMarginBalance(
    algoId: string,
    type: 'add' | 'reduce',
    change: { amt?: numberInString; percent?: numberInString }
  ): Promise<unknown[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/margin-balance', {
      algoId,
      type,
      ...change,
    });
  }

  getGridAIParameter(
    algoOrdType: GridAlgoOrderType,
    instId: string,
    direction?: ContractGridDirection,
    duration?: '7D' | '30D' | '180D'
  ): Promise<unknown[]> {
    return this.get('/api/v5/tradingBot/grid/ai-param', {
      algoOrdType,
      instId,
      direction,
      duration,
    });
  }

  /**
   *
   * Market data endpoints (public)
   *
   */

  getTickers(instrumentType: InstrumentType, uly?: string): Promise<Ticker[]> {
    return this.get('/api/v5/market/tickers', {
      instType: instrumentType,
      uly,
    });
  }

  getTicker(instId: string): Promise<Ticker[]> {
    return this.get('/api/v5/market/ticker', {
      instId,
    });
  }

  getIndexTickers(params: {
    quoteCcy?: string;
    instId?: string;
  }): Promise<IndexTicker[]> {
    return this.get('/api/v5/market/index-tickers', { ...params });
  }

  getOrderBook(instId: string, sz?: numberInString): Promise<OrderBook[]> {
    return this.get('/api/v5/market/books', { instId, sz });
  }

  getCandles(
    instId: string,
    bar: string = '1m',
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: numberInString;
    }
  ): Promise<Candle[]> {
    return this.get('/api/v5/market/candles', {
      instId,
      bar,
      ...pagination,
    });
  }

  getHistoricCandles(
    instId: string,
    bar: string = '1m',
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: numberInString;
    }
  ): Promise<Candle[]> {
    return this.get('/api/v5/market/history-candles', {
      instId,
      bar,
      ...pagination,
    });
  }

  getIndexCandles(
    instId: string,
    bar: string = '1m',
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: numberInString;
    }
  ): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/index-candles', {
      instId,
      bar,
      ...pagination,
    });
  }

  getMarkPriceCandles(
    instId: string,
    bar: string = '1m',
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: numberInString;
    }
  ): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/mark-price-candles', {
      instId,
      bar,
      ...pagination,
    });
  }

  getTrades(instId: string, limit?: number): Promise<Trade[]> {
    return this.get('/api/v5/market/trades', { instId, limit });
  }

  getHistoricTrades(
    instId: string,
    pagination?: {
      after?: numberInString;
      before?: numberInString;
      limit?: numberInString;
      type?: '1' | '2';
    }
  ): Promise<Trade[]> {
    return this.get('/api/v5/market/history-trades', { instId, ...pagination });
  }

  get24hrTotalVolume(): Promise<unknown[]> {
    return this.get('/api/v5/market/platform-24-volume');
  }

  getOracle(): Promise<unknown[]> {
    return this.get('/api/v5/market/open-oracle');
  }

  getExchangeRate(): Promise<unknown[]> {
    return this.get('/api/v5/market/exchange-rate');
  }

  getIndexComponents(index: string): Promise<unknown[]> {
    return this.get('/api/v5/market/index-components', { index });
  }

  getBlockTickers(instType: InstrumentType, uly?: string): Promise<unknown[]> {
    return this.get('/api/v5/market/block-tickers', { instType, uly });
  }

  getBlockTicker(instId: string): Promise<unknown[]> {
    return this.get('/api/v5/market/block-ticker', { instId });
  }

  getPublicBlockTrades(instId: string): Promise<unknown[]> {
    return this.get('/api/v5/market/block-trades', { instId });
  }

  /**
   *
   * Public data endpoints (public)
   *
   */

  getInstruments(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/instruments', params);
  }

  getDeliveryExerciseHistory(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/delivery-exercise-history', params);
  }

  getOpenInterest(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/open-interest', params);
  }

  getFundingRate(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/funding-rate', params);
  }

  getFundingRateHistory(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/funding-rate-history', params);
  }

  getMinMaxLimitPrice(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/price-limit', params);
  }

  getOptionMarketData(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/opt-summary', params);
  }

  getEstimatedDeliveryExercisePrice(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/estimated-price', params);
  }

  getDiscountRateAndInterestFreeQuota(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/discount-rate-interest-free-quota', params);
  }

  getSystemTime(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/time', params);
  }

  getLiquidationOrders(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/liquidation-orders', params);
  }

  getMarkPrice(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/mark-price', params);
  }

  getPositionTiers(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/position-tiers', params);
  }

  getInterestRateAndLoanQuota(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/interest-rate-loan-quota', params);
  }

  getVIPInterestRateAndLoanQuota(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/vip-interest-rate-loan-quota', params);
  }

  getUnderlying(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/underlying', params);
  }

  getInsuranceFund(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/insurance-fund', params);
  }

  getUnitConvert(params: unknown): Promise<unknown[]> {
    return this.get('/api/v5/public/convert-contract-coin', params);
  }

  /**
   *
   * Trading data endpoints (public)
   *
   */

  getSupportCoin(): Promise<unknown[]> {
    return this.get('/api/v5/rubik/stat/trading-data/support-coin');
  }

  getTakerVolume(): Promise<unknown[]> {
    return this.get('/api/v5/rubik/stat/taker-volume');
  }

  getMarginLendingRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<unknown[]> {
    return this.get('/api/v5/rubik/stat/margin/loan-ratio', params);
  }

  getLongShortRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<unknown[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio',
      params
    );
  }

  getContractsOpenInterestAndVolume(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<unknown[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/open-interest-volume',
      params
    );
  }

  getOptionsOpenInterestAndVolume(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<unknown[]> {
    return this.get('/api/v5/rubik/stat/option/open-interest-volume', params);
  }

  getPutCallRatio(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<unknown[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-ratio',
      params
    );
  }

  getOpenInterestAndVolumeExpiry(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<unknown[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-expiry',
      params
    );
  }

  getOpenInterestAndVolumeStrike(params: {
    ccy: string;
    expTime: string;
    period: '8H' | '1D';
  }): Promise<unknown[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-strike',
      params
    );
  }

  getTakerFlow(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<unknown[]> {
    return this.get('/api/v5/rubik/stat/option/taker-block-volume', params);
  }

  /**
   *
   * Status endpoints (public)
   *
   */

  getSystemStatus(
    state?: 'scheduled' | 'ongoing' | 'pre_open' | 'completed' | 'canceled'
  ): Promise<unknown[]> {
    return this.get('/api/v5/system/status', { state });
  }
}
