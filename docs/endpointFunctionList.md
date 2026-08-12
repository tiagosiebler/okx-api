
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client](#rest-clientts)
- [websocket-api-client](#websocket-api-clientts)


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
| [getAccountInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L502) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L508) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L512) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L516) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L522) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L529) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L534) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [getAccountBillSubtypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L542) | :closed_lock_with_key:  | GET | `/api/v5/account/subtypes` |
| [requestBillsHistoryDownloadLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L556) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L565) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L571) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L575) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setSettleCurrency()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L581) | :closed_lock_with_key:  | POST | `/api/v5/account/set-settle-currency` |
| [setFeeType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L587) | :closed_lock_with_key:  | POST | `/api/v5/account/set-fee-type` |
| [setLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L591) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L596) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L609) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L619) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [movePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L630) | :closed_lock_with_key:  | POST | `/api/v5/account/move-positions` |
| [getMovePositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L638) | :closed_lock_with_key:  | GET | `/api/v5/account/move-positions-history` |
| [getLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L644) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L656) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L664) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L675) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L684) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L695) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L707) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L711) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L715) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L722) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L726) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L730) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L744) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L756) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L765) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L774) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L783) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L787) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L791) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L797) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L803) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L809) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L816) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L820) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L829) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L842) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L855) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L869) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L880) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L891) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L906) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L915) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L929) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L937) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L943) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L947) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L959) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L963) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L971) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L979) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [setAutoLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L987) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L991) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1002) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1011) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1017) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1025) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1029) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [setTradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1033) | :closed_lock_with_key:  | POST | `/api/v5/account/set-trading-config` |
| [precheckSetDeltaNeutral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1039) | :closed_lock_with_key:  | GET | `/api/v5/account/precheck-set-delta-neutral` |
| [submitOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1054) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1058) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1062) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1066) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1072) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1076) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1080) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1084) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1088) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1095) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1102) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1111) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1118) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1123) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1136) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1145) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1154) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1168) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1176) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1180) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1192) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1199) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1203) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1213) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1217) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1223) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1229) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1235) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1241) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1247) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1259) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1263) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1280) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1284) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1290) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1300) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1312) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1319) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1326) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1336) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1348) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1355) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1359) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1370) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1379) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1390) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1399) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1406) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1414) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1428) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1432) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1436) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1442) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1451) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1459) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1467) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1478) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1488) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1495) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1502) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1509) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1518) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1526) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1530) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1537) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1541) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1553) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1559) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1568) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1577) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1586) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1595) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1604) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1616) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1622) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1628) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1634) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1643) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1652) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1664) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1673) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1679) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1688) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1700) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1711) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1719) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1733) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1737) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1745) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1753) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1765) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1772) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1778) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1784) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1790) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1796) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1802) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1808) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1815) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1821) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1827) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1834) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1840) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1846) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1852) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1858) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1865) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1871) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1877) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1884) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1893) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1902) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1914) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1922) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1926) |  | GET | `/api/v5/market/books` |
| [getRpiOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1933) |  | GET | `/api/v5/market/books-rpi` |
| [getFullOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1940) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1947) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1951) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1955) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1959) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1969) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1975) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1979) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1989) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1993) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1997) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2003) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2009) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2013) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2019) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2023) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2031) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2039) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2045) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2049) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2055) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2061) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2067) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2071) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2080) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2084) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2088) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2092) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2096) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2103) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2107) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2119) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2125) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2132) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2140) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2146) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2153) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2159) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2165) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2171) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2175) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2179) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2186) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2190) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2196) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2200) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2206) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2221) |  | GET | `/api/v5/public/instruments` |
| [getEventContractSeries()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2229) |  | GET | `/api/v5/public/event-contract/series` |
| [getEventContractEvents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2239) |  | GET | `/api/v5/public/event-contract/events` |
| [getEventContractMarkets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2249) |  | GET | `/api/v5/public/event-contract/markets` |
| [getDeliveryExerciseHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2255) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2259) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2263) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2267) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2273) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2277) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2285) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2291) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2295) |  | GET | `/api/v5/public/time` |
| [getHistoricalMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2299) |  | GET | `/api/v5/public/market-data-history` |
| [getMarkPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2305) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2309) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2313) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2317) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2321) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2325) |  | GET | `/api/v5/public/insurance-fund` |
| [getMmInstrumentTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2329) |  | GET | `/api/v5/public/mm-instrument-types` |
| [getUnitConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2336) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2340) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2347) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2351) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2358) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2362) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2366) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2370) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2376) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2380) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2384) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2388) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2394) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2404) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2408) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2417) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2427) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2433) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2442) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2451) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2460) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2469) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2481) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2493) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2500) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2510) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2520) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2531) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2541) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2545) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2549) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2553) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2559) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2564) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2575) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getAssetBillsHistoric()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2597) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills-history` |
| [getLightningDeposits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2611) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2619) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2623) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2629) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2633) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2641) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2645) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2649) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2655) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2659) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2663) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2667) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2671) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2680) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2684) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2688) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2699) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2703) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2713) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2719) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2726) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2733) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2744) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2754) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2760) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2770) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2776) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2789) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2806) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2814) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2825) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2833) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2841) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2854) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2874) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [getSOLStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2878) |  | GET | `/api/v5/finance/staking-defi/sol/product-info` |
| [purchaseETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2882) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2889) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2893) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2897) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [cancelRedeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2910) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/cancel-redeem` |
| [getAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2921) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2931) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2935) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2944) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2951) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2955) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2959) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2971) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2975) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2979) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2986) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2990) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2997) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3004) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3017) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3025) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3031) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3035) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3042) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3046) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3053) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getDcdCurrencyPairs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3069) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/currency-pair` |
| [getDcdProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3073) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/products` |
| [requestDcdQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3077) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/quote` |
| [submitDcdTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3081) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/trade` |
| [requestDcdRedeemQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3085) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem-quote` |
| [submitDcdRedeem()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3091) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem` |
| [getDcdOrderStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3095) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-status` |
| [getDcdOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3101) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-history` |
| [getStableRewardsProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3114) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/product-info` |
| [requestStableRewardsQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3124) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/quote` |
| [submitStableRewardsTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3131) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/trade` |
| [getStableRewardsBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3137) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/balance` |
| [getStableRewardsApyHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3143) |  | GET | `/api/v5/finance/stable-rewards/apy-history` |
| [getStableRewardsSubscribeRedeemHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3150) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/subscribe-redeem-history` |
| [getOkusdLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3165) | :closed_lock_with_key:  | GET | `/api/v5/finance/okusd/limits` |
| [subscribeOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3169) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/subscribe` |
| [redeemOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3175) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/redeem` |
| [getGlpTodayPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3185) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/today-performance` |
| [getGlpHistoricalPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3189) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/historical-performance` |
| [getAffiliatePerformanceSummary()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3202) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/performance/summary` |
| [getInviteeDetail()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3208) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateInviteeList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3212) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/list` |
| [getAffiliateLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3218) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/link/list` |
| [getAffiliateCoInviterLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3224) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/co-inviter/list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3230) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/sub-affiliate/list` |
| [getAffiliateRebateInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3236) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3246) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3258) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3267) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3282) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3291) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3295) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the OKX API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L89) | :closed_lock_with_key:  | WS | `order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L104) | :closed_lock_with_key:  | WS | `batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L119) | :closed_lock_with_key:  | WS | `cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L134) | :closed_lock_with_key:  | WS | `batch-cancel-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L149) | :closed_lock_with_key:  | WS | `amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L164) | :closed_lock_with_key:  | WS | `batch-amend-orders` |
| [massCancelOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L179) | :closed_lock_with_key:  | WS | `mass-cancel` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L194) | :closed_lock_with_key:  | WS | `sprd-order` |
| [amendSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L209) | :closed_lock_with_key:  | WS | `sprd-amend-order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L226) | :closed_lock_with_key:  | WS | `sprd-cancel-order` |
| [massCancelSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L243) | :closed_lock_with_key:  | WS | `sprd-mass-cancel` |