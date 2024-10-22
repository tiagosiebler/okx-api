
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

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAccountInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L365) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L371) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L375) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L379) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L385) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L394) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L399) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [requestBillsHistoryDownloadLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L412) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L422) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L429) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L433) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L437) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L442) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L453) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L463) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [getLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L472) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L479) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L487) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L498) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L514) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getFeeRatesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L530) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L540) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L552) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L556) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L560) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L570) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L574) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [submitQuickMarginBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L578) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L587) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L596) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L610) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L614) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L618) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L624) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L630) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L636) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L643) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L647) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L656) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L669) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L682) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L696) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L707) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L718) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L733) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L742) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L756) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L764) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L769) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L773) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L785) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L789) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L797) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L805) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [setAutoLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L813) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [setAccountMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L817) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L823) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L831) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L835) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [submitOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L845) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L849) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L853) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L857) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L863) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L867) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L871) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L875) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L879) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L886) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L893) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L902) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L909) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L914) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L925) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L936) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L944) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L957) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L968) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L972) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L984) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L991) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L995) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1005) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1009) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1015) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1021) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1027) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1033) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1039) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1051) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1055) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1067) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1071) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1077) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1087) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1099) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1106) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1113) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1123) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1144) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1154) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1160) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1172) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1184) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1195) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1209) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1216) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1224) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1238) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1242) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1246) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1252) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1261) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1269) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1277) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1288) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1298) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1305) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1312) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1319) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1328) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1336) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1340) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1347) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1351) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1363) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1369) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1378) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1387) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1396) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1405) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1414) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1426) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1432) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1438) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1444) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1453) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1462) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1474) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1483) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1489) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1498) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1510) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1521) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1529) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1543) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1547) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1555) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1563) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1575) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1582) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1588) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1594) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1600) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1606) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1612) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1618) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1625) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1631) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1637) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1644) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1650) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1656) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1662) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1668) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1675) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1681) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1687) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1694) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1703) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1712) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1724) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1731) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1737) |  | GET | `/api/v5/market/books` |
| [getFullOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1741) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1756) |  | GET | `/api/v5/market/candles` |
| [getCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1768) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1780) |  | GET | `/api/v5/market/history-candles` |
| [getHistoricCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1792) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1796) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1800) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1812) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1818) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1822) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1832) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1836) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1840) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1846) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1852) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1856) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1862) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1866) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1874) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1882) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1888) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1891) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1897) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1903) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1909) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1913) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1922) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1926) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1930) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1934) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1938) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1942) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1946) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1958) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1964) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1971) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1979) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1985) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1992) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1998) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2004) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2010) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2014) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2018) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2025) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2029) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2035) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2039) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2045) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2060) |  | GET | `/api/v5/public/instruments` |
| [getDeliveryExerciseHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2074) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2078) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2082) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2086) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2090) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2094) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2098) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2102) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2106) |  | GET | `/api/v5/public/time` |
| [getMarkPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2110) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2114) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2118) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2122) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2126) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2130) |  | GET | `/api/v5/public/insurance-fund` |
| [getUnitConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2134) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2138) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2145) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2149) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2164) |  | GET | `/api/v5/market/index-candles` |
| [getIndexCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2176) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2188) |  | GET | `/api/v5/market/history-index-candles` |
| [getHistoricIndexCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2200) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2212) |  | GET | `/api/v5/market/mark-price-candles` |
| [getMarkPriceCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2224) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2236) |  | GET | `/api/v5/market/historic-mark-price-candles` |
| [getHistoricMarkPriceCandlesV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2248) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2254) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2258) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2262) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2266) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2275) |  | GET | `/api/v5/market/block-trades` |
| [getLiquidationOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2282) |  | GET | `/api/v5/public/liquidation-orders` |
| [getSupportCoin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2292) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2296) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2305) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2315) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2321) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2330) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2339) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2348) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2357) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2369) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2381) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2388) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2398) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2408) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2419) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2429) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2433) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2437) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2441) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2445) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2450) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2458) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getLightningDeposits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2469) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2477) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2481) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2485) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2489) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2501) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2505) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2509) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [smallAssetsConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2515) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert-dust-assets` |
| [getExchanges()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2519) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2523) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2527) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2531) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2535) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2542) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2546) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2550) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2561) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2566) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2583) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2588) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2598) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2605) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2616) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2626) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2633) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2644) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2650) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2663) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2680) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2689) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2705) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2718) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2729) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2742) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [purchaseETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2762) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2769) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2773) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2777) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [getAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2790) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2800) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2804) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2818) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2825) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2829) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2833) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2843) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2847) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2851) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2858) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2862) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [getLendingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2866) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2873) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getInviteeDetail()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2886) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateRebateInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2890) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2900) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2912) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2921) |  | GET | `/api/v5/support/announcement-types` |
| [getBrokerAccountInformation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2940) | :closed_lock_with_key:  | GET | `/api/v5/broker/nd/info` |
| [createSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2944) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2953) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2957) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |