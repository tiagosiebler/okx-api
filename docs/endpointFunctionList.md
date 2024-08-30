# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering.

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:

- [rest-client](#rest-clientts)

If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.

# rest-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client.ts](/src/rest-client.ts).

| Function                                     |          AUTH          | HTTP Method | Endpoint                                                                     |
| -------------------------------------------- | :--------------------: | :---------: | ---------------------------------------------------------------------------- |
| `getServerTime()`                            | :closed_lock_with_key: |     GET     | `/api/v5/account/instruments`                                                |
| `getAccountInstruments()`                    | :closed_lock_with_key: |     GET     | `/api/v5/account/instruments`                                                |
| `getBalance()`                               | :closed_lock_with_key: |     GET     | `/api/v5/account/balance`                                                    |
| `getPositions()`                             | :closed_lock_with_key: |     GET     | `/api/v5/account/positions`                                                  |
| `getPositionsHistory()`                      | :closed_lock_with_key: |     GET     | `/api/v5/account/positions-history`                                          |
| `getAccountPositionRisk()`                   | :closed_lock_with_key: |     GET     | `/api/v5/account/account-position-risk`                                      |
| `getBills()`                                 | :closed_lock_with_key: |     GET     | `/api/v5/account/bills`                                                      |
| `getBillsArchive()`                          | :closed_lock_with_key: |     GET     | `/api/v5/account/bills-archive`                                              |
| `getAccountConfiguration()`                  | :closed_lock_with_key: |     GET     | `/api/v5/account/config`                                                     |
| `setPositionMode()`                          | :closed_lock_with_key: |    POST     | `/api/v5/account/set-position-mode`                                          |
| `setLeverage()`                              | :closed_lock_with_key: |    POST     | `/api/v5/account/set-leverage`                                               |
| `getMaxBuySellAmount()`                      | :closed_lock_with_key: |     GET     | `/api/v5/account/max-size`                                                   |
| `getMaxAvailableTradableAmount()`            | :closed_lock_with_key: |     GET     | `/api/v5/account/max-avail-size`                                             |
| `changePositionMargin()`                     | :closed_lock_with_key: |    POST     | `/api/v5/account/position/margin-balance`                                    |
| `getLeverage()`                              | :closed_lock_with_key: |     GET     | `/api/v5/account/leverage-info`                                              |
| `getLeverageEstimatedInfo()`                 | :closed_lock_with_key: |     GET     | `/api/v5/account/adjust-leverage-info`                                       |
| `getMaxLoan()`                               | :closed_lock_with_key: |     GET     | `/api/v5/account/max-loan`                                                   |
| `getFeeRates()`                              | :closed_lock_with_key: |     GET     | `/api/v5/account/trade-fee`                                                  |
| `getInterestAccrued()`                       | :closed_lock_with_key: |     GET     | `/api/v5/account/interest-accrued`                                           |
| `getInterestRate()`                          | :closed_lock_with_key: |     GET     | `/api/v5/account/interest-rate`                                              |
| `setGreeksDisplayType()`                     | :closed_lock_with_key: |    POST     | `/api/v5/account/set-greeks`                                                 |
| `setIsolatedMode()`                          | :closed_lock_with_key: |    POST     | `/api/v5/account/set-isolated-mode`                                          |
| `getMaxWithdrawals()`                        | :closed_lock_with_key: |     GET     | `/api/v5/account/max-withdrawal`                                             |
| `getAccountRiskState()`                      | :closed_lock_with_key: |     GET     | `/api/v5/account/risk-state`                                                 |
| `submitQuickMarginBorrowRepay()`             | :closed_lock_with_key: |    POST     | `/api/v5/account/quick-margin-borrow-repay`                                  |
| `getQuickMarginBorrowRepayHistory()`         | :closed_lock_with_key: |     GET     | `/api/v5/account/quick-margin-borrow-repay-history`                          |
| `borrowRepayVIPLoan()`                       | :closed_lock_with_key: |    POST     | `/api/v5/account/borrow-repay`                                               |
| `getVIPLoanBorrowRepayHistory()`             | :closed_lock_with_key: |     GET     | `/api/v5/account/borrow-repay-history`                                       |
| `getVIPInterestAccrued()`                    | :closed_lock_with_key: |     GET     | `/api/v5/account/vip-interest-accrued`                                       |
| `getVIPInterestDeducted()`                   | :closed_lock_with_key: |     GET     | `/api/v5/account/vip-interest-deducted`                                      |
| `getVIPLoanOrders()`                         | :closed_lock_with_key: |     GET     | `/api/v5/account/vip-loan-order-list`                                        |
| `getVIPLoanOrder()`                          | :closed_lock_with_key: |     GET     | `/api/v5/account/vip-loan-order-detail`                                      |
| `getBorrowInterestLimits()`                  | :closed_lock_with_key: |     GET     | `/api/v5/account/interest-limits`                                            |
| `getFixedLoanBorrowLimit()`                  | :closed_lock_with_key: |     GET     | `/api/v5/account/fixed-loan/borrowing-limit`                                 |
| `getFixedLoanBorrowQuote()`                  | :closed_lock_with_key: |     GET     | `/api/v5/account/fixed-loan/borrowing-quote`                                 |
| `submitFixedLoanBorrowOrder()`               | :closed_lock_with_key: |    POST     | `/api/v5/account/fixed-loan/borrowing-order`                                 |
| `updateFixedLoanBorrowOrder()`               | :closed_lock_with_key: |    POST     | `/api/v5/account/fixed-loan/amend-borrowing-order`                           |
| `manualRenewFixedLoanBorrowOrder()`          | :closed_lock_with_key: |    POST     | `/api/v5/account/fixed-loan/manual-reborrow`                                 |
| `repayFixedLoanBorrowOrder()`                | :closed_lock_with_key: |    POST     | `/api/v5/account/fixed-loan/repay-borrowing-order`                           |
| `getFixedLoanBorrowOrders()`                 | :closed_lock_with_key: |     GET     | `/api/v5/account/fixed-loan/borrowing-orders-list`                           |
| `positionBuilder()`                          | :closed_lock_with_key: |    POST     | `/api/v5/account/position-builder`                                           |
| `updateRiskOffsetAmount()`                   | :closed_lock_with_key: |    POST     | `/api/v5/account/set-riskOffset-amt`                                         |
| `getGreeks()`                                | :closed_lock_with_key: |     GET     | `/api/v5/account/greeks`                                                     |
| `getPMLimitation()`                          | :closed_lock_with_key: |     GET     | `/api/v5/account/position-tiers`                                             |
| `updateRiskOffsetType()`                     | :closed_lock_with_key: |    POST     | `/api/v5/account/set-riskOffset-type`                                        |
| `activateOption()`                           | :closed_lock_with_key: |    POST     | `/api/v5/account/activate-option`                                            |
| `setAutoLoan()`                              | :closed_lock_with_key: |    POST     | `/api/v5/account/set-auto-loan`                                              |
| `setAccountMode()`                           | :closed_lock_with_key: |    POST     | `/api/v5/account/set-account-level`                                          |
| `resetMMPStatus()`                           | :closed_lock_with_key: |    POST     | `/api/v5/account/mmp-reset`                                                  |
| `setMMPConfig()`                             | :closed_lock_with_key: |    POST     | `/api/v5/account/mmp-config`                                                 |
| `getMMPConfig()`                             | :closed_lock_with_key: |     GET     | `/api/v5/account/mmp-config`                                                 |
| `submitOrder()`                              | :closed_lock_with_key: |    POST     | `/api/v5/trade/order`                                                        |
| `submitMultipleOrders()`                     | :closed_lock_with_key: |    POST     | `/api/v5/trade/batch-orders`                                                 |
| `cancelOrder()`                              | :closed_lock_with_key: |    POST     | `/api/v5/trade/cancel-order`                                                 |
| `cancelMultipleOrders()`                     | :closed_lock_with_key: |    POST     | `/api/v5/trade/cancel-batch-orders`                                          |
| `amendOrder()`                               | :closed_lock_with_key: |    POST     | `/api/v5/trade/amend-order`                                                  |
| `amendMultipleOrders()`                      | :closed_lock_with_key: |    POST     | `/api/v5/trade/amend-batch-orders`                                           |
| `closePositions()`                           | :closed_lock_with_key: |    POST     | `/api/v5/trade/close-position`                                               |
| `getOrderDetails()`                          | :closed_lock_with_key: |     GET     | `/api/v5/trade/order`                                                        |
| `getOrderList()`                             | :closed_lock_with_key: |     GET     | `/api/v5/trade/orders-pending`                                               |
| `getOrderHistory()`                          | :closed_lock_with_key: |     GET     | `/api/v5/trade/orders-history`                                               |
| `getOrderHistoryArchive()`                   | :closed_lock_with_key: |     GET     | `/api/v5/trade/orders-history-archive`                                       |
| `getFills()`                                 | :closed_lock_with_key: |     GET     | `/api/v5/trade/fills`                                                        |
| `getFillsHistory()`                          | :closed_lock_with_key: |     GET     | `/api/v5/trade/fills-history`                                                |
| `applyTransactionDetailsArchive()`           | :closed_lock_with_key: |    POST     | `/api/v5/trade/fills-archive`                                                |
| `getTransactionDetailsArchiveLink()`         | :closed_lock_with_key: |     GET     | `/api/v5/trade/fills-archive`                                                |
| `getEasyConvertCurrencies()`                 | :closed_lock_with_key: |     GET     | `/api/v5/trade/easy-convert-currency-list`                                   |
| `submitEasyConvert()`                        | :closed_lock_with_key: |    POST     | `/api/v5/trade/easy-convert`                                                 |
| `getEasyConvertHistory()`                    | :closed_lock_with_key: |     GET     | `/api/v5/trade/easy-convert-history`                                         |
| `getOneClickRepayCurrencyList()`             | :closed_lock_with_key: |     GET     | `/api/v5/trade/one-click-repay-currency-list`                                |
| `submitOneClickRepay()`                      | :closed_lock_with_key: |    POST     | `/api/v5/trade/one-click-repay`                                              |
| `getOneClickRepayHistory()`                  | :closed_lock_with_key: |     GET     | `/api/v5/trade/one-click-repay-history`                                      |
| `cancelMassOrder()`                          | :closed_lock_with_key: |    POST     | `/api/v5/trade/mass-cancel`                                                  |
| `cancelAllAfter()`                           | :closed_lock_with_key: |    POST     | `/api/v5/trade/cancel-all-after`                                             |
| `getAccountRateLimit()`                      | :closed_lock_with_key: |     GET     | `/api/v5/trade/account-rate-limit`                                           |
| `placeAlgoOrder()`                           | :closed_lock_with_key: |    POST     | `/api/v5/trade/order-algo`                                                   |
| `cancelAlgoOrder()`                          | :closed_lock_with_key: |    POST     | `/api/v5/trade/cancel-algos`                                                 |
| `amendAlgoOrder()`                           | :closed_lock_with_key: |    POST     | `/api/v5/trade/amend-algos`                                                  |
| `cancelAdvanceAlgoOrder()`                   | :closed_lock_with_key: |    POST     | `/api/v5/trade/cancel-advance-algos`                                         |
| `getAlgoOrderDetails()`                      | :closed_lock_with_key: |     GET     | `/api/v5/trade/order-algo`                                                   |
| `getAlgoOrderList()`                         | :closed_lock_with_key: |     GET     | `/api/v5/trade/orders-algo-pending`                                          |
| `getAlgoOrderHistory()`                      | :closed_lock_with_key: |     GET     | `/api/v5/trade/orders-algo-history`                                          |
| `placeGridAlgoOrder()`                       | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/order-algo`                                         |
| `amendGridAlgoOrder()`                       | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/amend-order-algo`                                   |
| `stopGridAlgoOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/stop-order-algo`                                    |
| `closeGridContractPosition()`                | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/close-position`                                     |
| `cancelGridContractCloseOrder()`             | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/cancel-close-order`                                 |
| `instantTriggerGridAlgoOrder()`              | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/order-instant-trigger`                              |
| `getGridAlgoOrderList()`                     | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/grid/orders-algo-pending`                                |
| `getGridAlgoOrderHistory()`                  | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/grid/orders-algo-history`                                |
| `getGridAlgoOrderDetails()`                  | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/grid/orders-algo-details`                                |
| `getGridAlgoSubOrders()`                     | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/grid/sub-orders`                                         |
| `getGridAlgoOrderPositions()`                | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/grid/positions`                                          |
| `spotGridWithdrawIncome()`                   | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/withdraw-income`                                    |
| `computeGridMarginBalance()`                 | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/compute-margin-balance`                             |
| `adjustGridMarginBalance()`                  | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/margin-balance`                                     |
| `adjustGridInvestment()`                     | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/grid/adjust-investment`                                  |
| `getGridAIParameter()`                       |                        |     GET     | `/api/v5/tradingBot/grid/ai-param`                                           |
| `computeGridMinInvestment()`                 |                        |    POST     | `/api/v5/tradingBot/grid/min-investment`                                     |
| `getRSIBackTesting()`                        |                        |     GET     | `/api/v5/tradingBot/public/rsi-back-testing`                                 |
| `createSignal()`                             | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/create-signal`                                    |
| `getSignals()`                               | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/signals`                                          |
| `createSignalBot()`                          | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/order-algo`                                       |
| `cancelSignalBots()`                         | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/stop-order-algo`                                  |
| `updateSignalMargin()`                       | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/margin-balance`                                   |
| `updateSignalTPSL()`                         | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/amendTPSL`                                        |
| `setSignalInstruments()`                     | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/set-instruments`                                  |
| `getSignalBotOrder()`                        | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/orders-algo-details`                              |
| `getActiveSignalBot()`                       | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/orders-algo-details`                              |
| `getSignalBotHistory()`                      | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/orders-algo-history`                              |
| `getSignalBotPositions()`                    | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/positions`                                        |
| `getSignalBotPositionHistory()`              | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/positions-history`                                |
| `closeSignalBotPosition()`                   | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/close-position`                                   |
| `placeSignalBotSubOrder()`                   | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/sub-order`                                        |
| `cancelSubOrder()`                           | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/signal/cancel-sub-order`                                 |
| `getSignalBotSubOrders()`                    | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/sub-orders`                                       |
| `getSignalBotEventHistory()`                 | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/signal/event-history`                                    |
| `submitRecurringBuyOrder()`                  | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/recurring/order-algo`                                    |
| `amendRecurringBuyOrder()`                   | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/recurring/amend-order-algo`                              |
| `stopRecurringBuyOrder()`                    | :closed_lock_with_key: |    POST     | `/api/v5/tradingBot/recurring/stop-order-algo`                               |
| `getRecurringBuyOrders()`                    | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/recurring/orders-algo-pending`                           |
| `getRecurringBuyOrderHistory()`              | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/recurring/orders-algo-history`                           |
| `getRecurringBuyOrderDetails()`              | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/recurring/orders-algo-details`                           |
| `getRecurringBuySubOrders()`                 | :closed_lock_with_key: |     GET     | `/api/v5/tradingBot/recurring/sub-orders`                                    |
| `getCopytradingSubpositions()`               | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/current-subpositions`                                   |
| `getCopytradingSubpositionsHistory()`        | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/subpositions-history`                                   |
| `submitCopytradingAlgoOrder()`               | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/algo-order`                                             |
| `closeCopytradingSubposition()`              | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/close-subposition`                                      |
| `getCopytradingInstruments()`                | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/instruments`                                            |
| `setCopytradingInstruments()`                | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/set-instruments`                                        |
| `getCopytradingProfitDetails()`              | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/profit-sharing-details`                                 |
| `getCopytradingTotalProfit()`                | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/total-profit-sharing`                                   |
| `getCopytradingUnrealizedProfit()`           | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/unrealized-profit-sharing-details`                      |
| `getCopytradingTotalUnrealizedProfit()`      | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/total-unrealized-profit-sharing`                        |
| `applyCopytradingLeadTrading()`              | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/apply-lead-trading`                                     |
| `stopCopytradingLeadTrading()`               | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/stop-lead-trading`                                      |
| `updateCopytradingProfitSharing()`           | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/amend-profit-sharing-ratio`                             |
| `getCopytradingAccount()`                    | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/config`                                                 |
| `setCopytradingFirstCopy()`                  | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/first-copy-settings`                                    |
| `updateCopytradingCopySettings()`            | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/amend-copy-settings`                                    |
| `stopCopytradingCopy()`                      | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/stop-copy-trading`                                      |
| `getCopytradingCopySettings()`               | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/copy-settings`                                          |
| `getCopytradingBatchLeverageInfo()`          | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/batch-leverage-info`                                    |
| `setCopytradingBatchLeverage()`              | :closed_lock_with_key: |    POST     | `/api/v5/copytrading/batch-set-leverage`                                     |
| `getCopytradingMyLeadTraders()`              | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/current-lead-traders`                                   |
| `getCopytradingLeadTradersHistory()`         | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/lead-traders-history`                                   |
| `getCopytradingConfig()`                     |                        |     GET     | `/api/v5/copytrading/public-config`                                          |
| `getCopytradingLeadRanks()`                  |                        |     GET     | `/api/v5/copytrading/public-lead-traders`                                    |
| `getCopytradingLeadWeeklyPnl()`              |                        |     GET     | `/api/v5/copytrading/public-weekly-pnl`                                      |
| `getCopytradingLeadDailyPnl()`               |                        |     GET     | `/api/v5/copytrading/public-pnl`                                             |
| `getCopytradingLeadStats()`                  |                        |     GET     | `/api/v5/copytrading/public-stats`                                           |
| `getCopytradingLeadPreferences()`            |                        |     GET     | `/api/v5/copytrading/public-preference-currency`                             |
| `getCopytradingLeadOpenPositions()`          |                        |     GET     | `/api/v5/copytrading/public-current-subpositions`                            |
| `getCopytradingLeadPositionHistory()`        |                        |     GET     | `/api/v5/copytrading/public-subpositions-history`                            |
| `getCopyTraders()`                           |                        |     GET     | `/api/v5/copytrading/public-copy-traders`                                    |
| `getCopytradingLeadPrivateRanks()`           | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/lead-traders`                                           |
| `getCopytradingLeadPrivateWeeklyPnl()`       | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/weekly-pnl`                                             |
| `getCopytradingPLeadPrivateDailyPnl()`       | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/pnl`                                                    |
| `geCopytradingLeadPrivateStats()`            | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/stats`                                                  |
| `getCopytradingLeadPrivatePreferences()`     | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/preference-currency`                                    |
| `getCopytradingLeadPrivateOpenPositions()`   | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/performance-current-subpositions`                       |
| `getCopytradingLeadPrivatePositionHistory()` | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/performance-subpositions-history`                       |
| `getCopyTradersPrivate()`                    | :closed_lock_with_key: |     GET     | `/api/v5/copytrading/copy-traders`                                           |
| `getTickers()`                               |                        |     GET     | `/api/v5/market/tickers`                                                     |
| `getTicker()`                                |                        |     GET     | `/api/v5/market/ticker`                                                      |
| `getOrderBook()`                             |                        |     GET     | `/api/v5/market/books`                                                       |
| `getFullOrderBook()`                         |                        |     GET     | `/api/v5/market/books-full`                                                  |
| `getCandles()`                               |                        |     GET     | `/api/v5/market/candles`                                                     |
| `getCandlesV2()`                             |                        |     GET     | `/api/v5/market/candles`                                                     |
| `getHistoricCandles()`                       |                        |     GET     | `/api/v5/market/history-candles`                                             |
| `getHistoricCandlesV2()`                     |                        |     GET     | `/api/v5/market/history-candles`                                             |
| `getTrades()`                                |                        |     GET     | `/api/v5/market/trades`                                                      |
| `getHistoricTrades()`                        |                        |     GET     | `/api/v5/market/history-trades`                                              |
| `getOptionTradesByInstrument()`              |                        |     GET     | `/api/v5/market/option/instrument-family-trades`                             |
| `getOptionTrades()`                          |                        |     GET     | `/api/v5/public/option-trades`                                               |
| `get24hrTotalVolume()`                       |                        |     GET     | `/api/v5/market/platform-24-volume`                                          |
| `getBlockCounterParties()`                   | :closed_lock_with_key: |     GET     | `/api/v5/rfq/counterparties`                                                 |
| `createBlockRFQ()`                           | :closed_lock_with_key: |    POST     | `/api/v5/rfq/create-rfq`                                                     |
| `cancelBlockRFQ()`                           | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-rfq`                                                     |
| `cancelMultipleBlockRFQs()`                  | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-batch-rfqs`                                              |
| `cancelAllRFQs()`                            | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-all-rfqs`                                                |
| `executeBlockQuote()`                        | :closed_lock_with_key: |    POST     | `/api/v5/rfq/execute-quote`                                                  |
| `getQuoteProducts()`                         | :closed_lock_with_key: |     GET     | `/api/v5/rfq/maker-instrument-settings`                                      |
| `updateBlockQuoteProducts()`                 | :closed_lock_with_key: |    POST     | `/api/v5/rfq/maker-instrument-settings`                                      |
| `resetBlockMmp()`                            | :closed_lock_with_key: |    POST     | `/api/v5/rfq/mmp-reset`                                                      |
| `updateBlockMmpConfig()`                     | :closed_lock_with_key: |    POST     | `/api/v5/rfq/mmp-config`                                                     |
| `getBlockMmpConfig()`                        | :closed_lock_with_key: |     GET     | `/api/v5/rfq/mmp-config`                                                     |
| `createBlockQuote()`                         | :closed_lock_with_key: |    POST     | `/api/v5/rfq/create-quote`                                                   |
| `cancelBlockQuote()`                         | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-quote`                                                   |
| `cancelMultipleBlockQuotes()`                | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-batch-quotes`                                            |
| `cancelAllBlockQuotes()`                     | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-all-quotes`                                              |
| `cancelAllBlockAfter()`                      | :closed_lock_with_key: |    POST     | `/api/v5/rfq/cancel-all-after`                                               |
| `getBlockRFQs()`                             | :closed_lock_with_key: |     GET     | `/api/v5/rfq/rfqs`                                                           |
| `getBlockQuotes()`                           | :closed_lock_with_key: |     GET     | `/api/v5/rfq/quotes`                                                         |
| `getBlockTrades()`                           | :closed_lock_with_key: |     GET     | `/api/v5/rfq/trades`                                                         |
| `getPublicRFQBlockTrades()`                  |                        |     GET     | `/api/v5/rfq/public-trades`                                                  |
| `getBlockTickers()`                          |                        |     GET     | `/api/v5/market/block-tickers`                                               |
| `getBlockTicker()`                           |                        |     GET     | `/api/v5/market/block-ticker`                                                |
| `getBlockPublicTrades()`                     |                        |     GET     | `/api/v5/public/block-trades`                                                |
| `submitSpreadOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/sprd/order`                                                         |
| `cancelSpreadOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/sprd/cancel-order`                                                  |
| `cancelAllSpreadOrders()`                    | :closed_lock_with_key: |    POST     | `/api/v5/sprd/mass-cancel`                                                   |
| `updateSpreadOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/sprd/amend-order`                                                   |
| `getSpreadOrder()`                           | :closed_lock_with_key: |     GET     | `/api/v5/sprd/order`                                                         |
| `getSpreadActiveOrders()`                    | :closed_lock_with_key: |     GET     | `/api/v5/sprd/orders-pending`                                                |
| `getSpreadOrdersRecent()`                    | :closed_lock_with_key: |     GET     | `/api/v5/sprd/orders-history`                                                |
| `getSpreadOrdersArchive()`                   | :closed_lock_with_key: |     GET     | `/api/v5/sprd/orders-history-archive`                                        |
| `getSpreadTrades()`                          | :closed_lock_with_key: |     GET     | `/api/v5/sprd/trades`                                                        |
| `getSpreads()`                               |                        |     GET     | `/api/v5/sprd/spreads`                                                       |
| `getSpreadOrderBook()`                       |                        |     GET     | `/api/v5/sprd/books`                                                         |
| `getSpreadTicker()`                          |                        |     GET     | `/api/v5/market/sprd-ticker`                                                 |
| `getSpreadPublicTrades()`                    |                        |     GET     | `/api/v5/sprd/public-trades`                                                 |
| `getSpreadCandles()`                         |                        |     GET     | `/api/v5/market/sprd-candles`                                                |
| `getSpreadHistoryCandles()`                  |                        |     GET     | `/api/v5/market/sprd-history-candles`                                        |
| `cancelSpreadAllAfter()`                     | :closed_lock_with_key: |    POST     | `/api/v5/sprd/cancel-all-after`                                              |
| `getInstruments()`                           |                        |     GET     | `/api/v5/public/instruments`                                                 |
| `getDeliveryExerciseHistory()`               |                        |     GET     | `/api/v5/public/delivery-exercise-history`                                   |
| `getOpenInterest()`                          |                        |     GET     | `/api/v5/public/open-interest`                                               |
| `getFundingRate()`                           |                        |     GET     | `/api/v5/public/funding-rate`                                                |
| `getFundingRateHistory()`                    |                        |     GET     | `/api/v5/public/funding-rate-history`                                        |
| `getMinMaxLimitPrice()`                      |                        |     GET     | `/api/v5/public/price-limit`                                                 |
| `getOptionMarketData()`                      |                        |     GET     | `/api/v5/public/opt-summary`                                                 |
| `getEstimatedDeliveryExercisePrice()`        |                        |     GET     | `/api/v5/public/estimated-price`                                             |
| `getDiscountRateAndInterestFreeQuota()`      |                        |     GET     | `/api/v5/public/discount-rate-interest-free-quota`                           |
| `getSystemTime()`                            |                        |     GET     | `/api/v5/public/time`                                                        |
| `getMarkPrice()`                             |                        |     GET     | `/api/v5/public/mark-price`                                                  |
| `getPositionTiers()`                         |                        |     GET     | `/api/v5/public/position-tiers`                                              |
| `getInterestRateAndLoanQuota()`              |                        |     GET     | `/api/v5/public/interest-rate-loan-quota`                                    |
| `getVIPInterestRateAndLoanQuota()`           |                        |     GET     | `/api/v5/public/vip-interest-rate-loan-quota`                                |
| `getUnderlying()`                            |                        |     GET     | `/api/v5/public/underlying`                                                  |
| `getInsuranceFund()`                         |                        |     GET     | `/api/v5/public/insurance-fund`                                              |
| `getUnitConvert()`                           |                        |     GET     | `/api/v5/public/convert-contract-coin`                                       |
| `getOptionTickBands()`                       |                        |     GET     | `/api/v5/public/instrument-tick-bands`                                       |
| `getPremiumHistory()`                        |                        |     GET     | `/api/v5/public/premium-history`                                             |
| `getIndexTickers()`                          |                        |     GET     | `/api/v5/market/index-tickers`                                               |
| `getIndexCandles()`                          |                        |     GET     | `/api/v5/market/index-candles`                                               |
| `getIndexCandlesV2()`                        |                        |     GET     | `/api/v5/market/index-candles`                                               |
| `getHistoricIndexCandles()`                  |                        |     GET     | `/api/v5/market/history-index-candles`                                       |
| `getHistoricIndexCandlesV2()`                |                        |     GET     | `/api/v5/market/history-index-candles`                                       |
| `getMarkPriceCandles()`                      |                        |     GET     | `/api/v5/market/mark-price-candles`                                          |
| `getMarkPriceCandlesV2()`                    |                        |     GET     | `/api/v5/market/mark-price-candles`                                          |
| `getHistoricMarkPriceCandles()`              |                        |     GET     | `/api/v5/market/historic-mark-price-candles`                                 |
| `getHistoricMarkPriceCandlesV2()`            |                        |     GET     | `/api/v5/market/history-mark-price-candles`                                  |
| `getOracle()`                                |                        |     GET     | `/api/v5/market/open-oracle`                                                 |
| `getExchangeRate()`                          |                        |     GET     | `/api/v5/market/exchange-rate`                                               |
| `getIndexComponents()`                       |                        |     GET     | `/api/v5/market/index-components`                                            |
| `getEconomicCalendar()`                      | :closed_lock_with_key: |     GET     | `/api/v5/public/economic-calendar`                                           |
| `getPublicBlockTrades()`                     |                        |     GET     | `/api/v5/market/block-trades`                                                |
| `getLiquidationOrders()`                     |                        |     GET     | `/api/v5/public/liquidation-orders`                                          |
| `getSupportCoin()`                           |                        |     GET     | `/api/v5/rubik/stat/trading-data/support-coin`                               |
| `getOpenInterestHistory()`                   |                        |     GET     | `/api/v5/rubik/stat/contracts/open-interest-history`                         |
| `getTakerVolume()`                           |                        |     GET     | `/api/v5/rubik/stat/taker-volume`                                            |
| `getContractTakerVolume()`                   |                        |     GET     | `/api/v5/rubik/stat/taker-volume-contract`                                   |
| `getMarginLendingRatio()`                    |                        |     GET     | `/api/v5/rubik/stat/margin/loan-ratio`                                       |
| `getTopTradersAccountRatio()`                |                        |     GET     | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader`  |
| `getTopTradersContractPositionRatio()`       |                        |     GET     | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| `getLongShortContractRatio()`                |                        |     GET     | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract`             |
| `getLongShortRatio()`                        |                        |     GET     | `/api/v5/rubik/stat/contracts/long-short-account-ratio`                      |
| `getContractsOpenInterestAndVolume()`        |                        |     GET     | `/api/v5/rubik/stat/contracts/open-interest-volume`                          |
| `getOptionsOpenInterestAndVolume()`          |                        |     GET     | `/api/v5/rubik/stat/option/open-interest-volume`                             |
| `getPutCallRatio()`                          |                        |     GET     | `/api/v5/rubik/stat/option/open-interest-volume-ratio`                       |
| `getOpenInterestAndVolumeExpiry()`           |                        |     GET     | `/api/v5/rubik/stat/option/open-interest-volume-expiry`                      |
| `getOpenInterestAndVolumeStrike()`           |                        |     GET     | `/api/v5/rubik/stat/option/open-interest-volume-strike`                      |
| `getTakerFlow()`                             |                        |     GET     | `/api/v5/rubik/stat/option/taker-block-volume`                               |
| `getCurrencies()`                            | :closed_lock_with_key: |     GET     | `/api/v5/asset/currencies`                                                   |
| `getBalances()`                              | :closed_lock_with_key: |     GET     | `/api/v5/asset/balances`                                                     |
| `getNonTradableAssets()`                     | :closed_lock_with_key: |     GET     | `/api/v5/asset/non-tradable-assets`                                          |
| `getAccountAssetValuation()`                 | :closed_lock_with_key: |     GET     | `/api/v5/asset/asset-valuation`                                              |
| `fundsTransfer()`                            | :closed_lock_with_key: |    POST     | `/api/v5/asset/transfer`                                                     |
| `getFundsTransferState()`                    | :closed_lock_with_key: |     GET     | `/api/v5/asset/transfer-state`                                               |
| `getAssetBillsDetails()`                     | :closed_lock_with_key: |     GET     | `/api/v5/asset/bills`                                                        |
| `getLightningDeposits()`                     | :closed_lock_with_key: |     GET     | `/api/v5/asset/deposit-lightning`                                            |
| `getDepositAddress()`                        | :closed_lock_with_key: |     GET     | `/api/v5/asset/deposit-address`                                              |
| `getDepositHistory()`                        | :closed_lock_with_key: |     GET     | `/api/v5/asset/deposit-history`                                              |
| `submitWithdraw()`                           | :closed_lock_with_key: |    POST     | `/api/v5/asset/withdrawal`                                                   |
| `submitWithdrawLightning()`                  | :closed_lock_with_key: |    POST     | `/api/v5/asset/withdrawal-lightning`                                         |
| `cancelWithdrawal()`                         | :closed_lock_with_key: |    POST     | `/api/v5/asset/cancel-withdrawal`                                            |
| `getWithdrawalHistory()`                     | :closed_lock_with_key: |     GET     | `/api/v5/asset/withdrawal-history`                                           |
| `getDepositWithdrawStatus()`                 | :closed_lock_with_key: |     GET     | `/api/v5/asset/deposit-withdraw-status`                                      |
| `smallAssetsConvert()`                       | :closed_lock_with_key: |    POST     | `/api/v5/asset/convert-dust-assets`                                          |
| `getExchanges()`                             |                        |     GET     | `/api/v5/asset/exchange-list`                                                |
| `applyForMonthlyStatement()`                 | :closed_lock_with_key: |    POST     | `/api/v5/asset/monthly-statement`                                            |
| `getMonthlyStatement()`                      | :closed_lock_with_key: |     GET     | `/api/v5/asset/monthly-statement`                                            |
| `getConvertCurrencies()`                     | :closed_lock_with_key: |     GET     | `/api/v5/asset/convert/currencies`                                           |
| `getConvertCurrencyPair()`                   | :closed_lock_with_key: |     GET     | `/api/v5/asset/convert/currency-pair`                                        |
| `estimateConvertQuote()`                     | :closed_lock_with_key: |    POST     | `/api/v5/asset/convert/estimate-quote`                                       |
| `convertTrade()`                             | :closed_lock_with_key: |    POST     | `/api/v5/asset/convert/trade`                                                |
| `getConvertHistory()`                        | :closed_lock_with_key: |     GET     | `/api/v5/asset/convert/history`                                              |
| `getSubAccountList()`                        | :closed_lock_with_key: |     GET     | `/api/v5/users/subaccount/list`                                              |
| `resetSubAccountAPIKey()`                    | :closed_lock_with_key: |    POST     | `/api/v5/users/subaccount/modify-apikey`                                     |
| `getSubAccountBalances()`                    | :closed_lock_with_key: |     GET     | `/api/v5/account/subaccount/balances`                                        |
| `getSubAccountFundingBalances()`             | :closed_lock_with_key: |     GET     | `/api/v5/asset/subaccount/balances`                                          |
| `getSubAccountMaxWithdrawal()`               | :closed_lock_with_key: |     GET     | `/api/v5/account/subaccount/max-withdrawal`                                  |
| `getSubAccountTransferHistory()`             | :closed_lock_with_key: |     GET     | `/api/v5/asset/subaccount/bills`                                             |
| `getManagedSubAccountTransferHistory()`      | :closed_lock_with_key: |     GET     | `/api/v5/asset/subaccount/managed-subaccount-bills`                          |
| `transferSubAccountBalance()`                | :closed_lock_with_key: |    POST     | `/api/v5/asset/subaccount/transfer`                                          |
| `setSubAccountTransferOutPermission()`       | :closed_lock_with_key: |    POST     | `/api/v5/users/subaccount/set-transfer-out`                                  |
| `getSubAccountCustodyTradingList()`          | :closed_lock_with_key: |     GET     | `/api/v5/users/entrust-subaccount-list`                                      |
| `setSubAccountLoanAllocation()`              | :closed_lock_with_key: |    POST     | `/api/v5/account/subaccount/set-loan-allocation`                             |
| `getSubAccountBorrowInterestAndLimit()`      | :closed_lock_with_key: |     GET     | `/api/v5/account/subaccount/interest-limits`                                 |
| `getStakingOffers()`                         | :closed_lock_with_key: |     GET     | `/api/v5/finance/staking-defi/offers`                                        |
| `submitStake()`                              | :closed_lock_with_key: |    POST     | `/api/v5/finance/staking-defi/purchase`                                      |
| `redeemStake()`                              | :closed_lock_with_key: |    POST     | `/api/v5/finance/staking-defi/redeem`                                        |
| `cancelStakingRequest()`                     | :closed_lock_with_key: |    POST     | `/api/v5/finance/staking-defi/cancel`                                        |
| `getActiveStakingOrders()`                   | :closed_lock_with_key: |     GET     | `/api/v5/finance/staking-defi/orders-active`                                 |
| `getStakingOrderHistory()`                   | :closed_lock_with_key: |     GET     | `/api/v5/finance/staking-defi/orders-history`                                |
| `purchaseETHStaking()`                       | :closed_lock_with_key: |    POST     | `/api/v5/finance/staking-defi/eth/purchase`                                  |
| `redeemETHStaking()`                         | :closed_lock_with_key: |    POST     | `/api/v5/finance/staking-defi/eth/redeem`                                    |
| `getETHStakingBalance()`                     | :closed_lock_with_key: |     GET     | `/api/v5/finance/staking-defi/eth/balance`                                   |
| `getETHStakingHistory()`                     | :closed_lock_with_key: |     GET     | `/api/v5/finance/staking-defi/eth/purchase-redeem-history`                   |
| `getAPYHistory()`                            |                        |     GET     | `/api/v5/finance/staking-defi/eth/apy-history`                               |
| `getSavingBalance()`                         | :closed_lock_with_key: |     GET     | `/api/v5/finance/savings/balance`                                            |
| `savingsPurchaseRedemption()`                | :closed_lock_with_key: |    POST     | `/api/v5/finance/savings/purchase-redempt`                                   |
| `setLendingRate()`                           | :closed_lock_with_key: |    POST     | `/api/v5/finance/savings/set-lending-rate`                                   |
| `getLendingHistory()`                        | :closed_lock_with_key: |     GET     | `/api/v5/finance/savings/lending-history`                                    |
| `getPublicBorrowInfo()`                      |                        |     GET     | `/api/v5/finance/savings/lending-rate-summary`                               |
| `getPublicBorrowHistory()`                   |                        |     GET     | `/api/v5/finance/savings/lending-rate-history`                               |
| `getLendingOffers()`                         |                        |     GET     | `/api/v5/finance/fixed-loan/lending-offers`                                  |
| `getLendingAPYHistory()`                     |                        |     GET     | `/api/v5/finance/fixed-loan/lending-apy-history`                             |
| `getLendingVolume()`                         |                        |     GET     | `/api/v5/finance/fixed-loan/pending-lending-volume`                          |
| `placeLendingOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/finance/fixed-loan/lending-order`                                   |
| `amendLendingOrder()`                        | :closed_lock_with_key: |    POST     | `/api/v5/finance/fixed-loan/lending-order`                                   |
| `getLendingOrders()`                         | :closed_lock_with_key: |     GET     | `/api/v5/finance/fixed-loan/lending-orders-list`                             |
| `getLendingSubOrders()`                      | :closed_lock_with_key: |     GET     | `/api/v5/finance/fixed-loan/lending-sub-orders`                              |
| `getInviteeDetail()`                         | :closed_lock_with_key: |     GET     | `/api/v5/affiliate/invitee/detail`                                           |
| `getAffiliateRebateInfo()`                   | :closed_lock_with_key: |     GET     | `/api/v5/users/partner/if-rebate`                                            |
| `getSystemStatus()`                          |                        |     GET     | `/api/v5/system/status`                                                      |
| `getBrokerAccountInformation()`              | :closed_lock_with_key: |     GET     | `/api/v5/broker/nd/info`                                                     |
| `createSubAccount()`                         | :closed_lock_with_key: |    POST     | `/api/v5/broker/nd/create-subaccount`                                        |
| `deleteSubAccount()`                         | :closed_lock_with_key: |    POST     | `/api/v5/broker/nd/delete-subaccount`                                        |
| `createSubAccountAPIKey()`                   | :closed_lock_with_key: |    POST     | `/api/v5/broker/nd/subaccount/apikey`                                        |
