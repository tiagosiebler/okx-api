
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
| [getAccountInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L403) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L409) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L413) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L417) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L423) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L430) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L435) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [requestBillsHistoryDownloadLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L448) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L458) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L465) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L469) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setSettleCurrency()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L475) | :closed_lock_with_key:  | POST | `/api/v5/account/set-settle-currency` |
| [setFeeType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L481) | :closed_lock_with_key:  | POST | `/api/v5/account/set-fee-type` |
| [setLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L485) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L490) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L501) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L511) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [getLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L517) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L529) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L537) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L548) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L557) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L567) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L579) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L583) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L587) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L594) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L598) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L602) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L616) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L628) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L637) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L646) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L655) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L659) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L663) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L669) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L675) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L681) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L688) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L692) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L701) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L714) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L727) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L741) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L752) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L763) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L778) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L787) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L801) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L809) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L815) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L819) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L831) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L835) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L843) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L851) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [setAutoLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L859) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L863) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L874) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L883) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L889) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L897) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L901) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [submitOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L911) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L915) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L919) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L923) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L929) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L933) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L937) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L941) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L945) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L952) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L959) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L968) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L975) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L980) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L993) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1002) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1011) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1025) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1033) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1037) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1049) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1056) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1060) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1070) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1074) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1080) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1086) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1092) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1098) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1104) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1116) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1120) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1137) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1141) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1147) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1157) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1169) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1176) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1183) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1193) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1205) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1212) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1216) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1227) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1236) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1247) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1256) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1263) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1271) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1285) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1289) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1293) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1299) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1308) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1316) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1324) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1335) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1345) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1352) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1359) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1366) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1375) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1383) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1387) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1394) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1398) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1410) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1416) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1425) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1434) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1443) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1452) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1461) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1473) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1479) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1485) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1491) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1500) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1509) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1521) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1530) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1536) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1545) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1557) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1568) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1576) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1590) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1594) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1602) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1610) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1622) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1629) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1635) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1641) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1647) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1653) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1659) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1665) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1672) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1678) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1684) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1691) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1697) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1703) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1709) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1715) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1722) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1728) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1734) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1741) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1750) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1759) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1771) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1779) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1783) |  | GET | `/api/v5/market/books` |
| [getFullOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1790) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1797) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1801) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1805) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1809) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1819) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1825) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1829) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1839) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1843) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1847) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1853) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1859) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1863) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1869) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1873) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1881) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1889) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1895) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1899) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1905) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1911) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1917) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1921) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1930) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1934) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1938) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1942) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1946) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1953) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1957) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1969) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1975) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1982) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1990) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1996) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2003) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2009) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2015) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2021) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2025) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2029) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2036) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2040) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2046) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2050) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2056) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2071) |  | GET | `/api/v5/public/instruments` |
| [getDeliveryExerciseHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2080) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2084) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2088) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2092) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2096) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2100) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2104) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2108) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2112) |  | GET | `/api/v5/public/time` |
| [getMarkPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2116) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2120) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2124) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2128) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2132) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2136) |  | GET | `/api/v5/public/insurance-fund` |
| [getUnitConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2140) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2144) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2151) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2155) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2162) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2166) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2170) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2174) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2180) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2184) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2188) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2192) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2198) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2208) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2212) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2221) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2231) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2237) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2246) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2255) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2264) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2273) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2285) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2297) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2304) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2314) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2324) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2335) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2345) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2349) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2353) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2357) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2363) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2368) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2376) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getLightningDeposits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2387) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2395) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2399) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2403) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2407) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2415) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2419) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2423) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2429) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2433) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2437) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2441) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2445) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2452) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2456) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2460) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2471) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2475) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2485) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2491) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2498) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2505) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2516) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2526) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2532) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2542) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2548) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2561) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2578) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2586) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2597) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2605) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2613) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2626) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2646) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [purchaseETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2650) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2657) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2661) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2665) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [getAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2678) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2688) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2692) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2701) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2708) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2712) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2716) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2726) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2730) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2734) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2741) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2745) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2752) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2759) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2772) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2780) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2786) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2790) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2797) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2801) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2808) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getInviteeDetail()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2823) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateRebateInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2827) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2837) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2849) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2858) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2873) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2882) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2886) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the OKX API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L89) | :closed_lock_with_key:  | WS | `order` |
| [submitMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L104) | :closed_lock_with_key:  | WS | `batch-orders` |
| [cancelOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L119) | :closed_lock_with_key:  | WS | `cancel-order` |
| [cancelMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L134) | :closed_lock_with_key:  | WS | `batch-cancel-orders` |
| [amendOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L149) | :closed_lock_with_key:  | WS | `amend-order` |
| [amendMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L164) | :closed_lock_with_key:  | WS | `batch-amend-orders` |
| [massCancelOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L179) | :closed_lock_with_key:  | WS | `mass-cancel` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L194) | :closed_lock_with_key:  | WS | `sprd-order` |
| [amendSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L209) | :closed_lock_with_key:  | WS | `sprd-amend-order` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L226) | :closed_lock_with_key:  | WS | `sprd-cancel-order` |
| [massCancelSpreadOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/websocket-api-client.ts#L243) | :closed_lock_with_key:  | WS | `sprd-mass-cancel` |