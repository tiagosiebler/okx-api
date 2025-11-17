
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
| [getAccountInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L410) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L416) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L420) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L424) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L430) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L437) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L442) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [requestBillsHistoryDownloadLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L455) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L465) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L472) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L476) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setSettleCurrency()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L482) | :closed_lock_with_key:  | POST | `/api/v5/account/set-settle-currency` |
| [setFeeType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L488) | :closed_lock_with_key:  | POST | `/api/v5/account/set-fee-type` |
| [setLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L492) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L497) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L508) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L518) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [getLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L524) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L536) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L544) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L555) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L564) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L574) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L586) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L590) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L594) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L601) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L605) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L609) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L623) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L635) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L644) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L653) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L662) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L666) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L670) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L676) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L682) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L688) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L695) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L699) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L708) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L721) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L734) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L748) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L759) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L770) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L785) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L794) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L808) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L816) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L822) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L826) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L838) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L842) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L850) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L858) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [setAutoLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L866) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L870) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L881) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L890) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L896) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L904) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L908) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [setTradingConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L912) | :closed_lock_with_key:  | POST | `/api/v5/account/set-trading-config` |
| [precheckSetDeltaNeutral()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L918) | :closed_lock_with_key:  | GET | `/api/v5/account/precheck-set-delta-neutral` |
| [submitOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L933) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L937) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L941) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L945) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L951) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L955) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L959) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L963) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L967) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L974) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L981) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L990) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L997) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1002) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1015) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1024) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1033) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1047) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1055) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1059) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1071) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1078) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1082) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1092) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1096) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1102) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1108) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1114) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1120) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1126) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1138) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1142) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1159) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1163) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1169) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1179) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1191) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1198) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1205) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1215) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1227) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1234) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1238) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1249) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1258) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1269) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1278) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1285) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1293) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1307) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1311) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1315) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1321) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1330) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1338) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1346) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1357) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1367) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1374) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1381) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1388) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1397) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1405) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1409) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1416) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1420) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1432) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1438) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1447) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1456) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1465) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1474) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1483) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1495) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1501) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1507) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1513) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1522) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1531) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1543) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1552) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1558) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1567) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1579) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1590) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1598) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1612) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1616) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1624) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1632) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1644) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1651) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1657) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1663) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1669) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1675) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1681) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1687) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1694) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1700) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1706) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1713) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1719) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1725) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1731) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1737) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1744) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1750) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1756) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1763) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1772) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1781) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1793) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1801) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1805) |  | GET | `/api/v5/market/books` |
| [getFullOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1812) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1819) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1823) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1827) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1831) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1841) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1847) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1851) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1861) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1865) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1869) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1875) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1881) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1885) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1891) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1895) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1903) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1911) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1917) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1921) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1927) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1933) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1939) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1943) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1952) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1956) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1960) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1964) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1968) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1975) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1979) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1991) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1997) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2004) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2012) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2018) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2025) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2031) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2037) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2043) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2047) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2051) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2058) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2062) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2068) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2072) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2078) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2093) |  | GET | `/api/v5/public/instruments` |
| [getDeliveryExerciseHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2102) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2106) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2110) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2114) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2118) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2122) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2126) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2130) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2134) |  | GET | `/api/v5/public/time` |
| [getMarkPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2138) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2142) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2146) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2150) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2154) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2158) |  | GET | `/api/v5/public/insurance-fund` |
| [getUnitConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2162) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2166) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2173) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2177) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2184) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2188) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2192) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2196) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2202) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2206) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2210) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2214) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2220) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2230) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2234) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2243) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2253) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2259) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2268) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2277) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2286) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2295) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2307) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2319) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2326) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2336) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2346) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2357) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2367) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2371) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2375) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2379) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2385) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2390) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2398) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getLightningDeposits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2409) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2417) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2421) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2427) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2431) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2439) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2443) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2447) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2453) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2457) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2461) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2465) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2469) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2476) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2480) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2484) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2495) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2499) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2509) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2515) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2522) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2529) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2540) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2550) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2556) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2566) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2572) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2585) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2602) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2610) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2621) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2629) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2637) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2650) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2670) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [purchaseETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2674) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2681) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2685) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2689) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [getAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2702) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2712) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2716) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2725) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2732) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2736) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2740) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2750) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2754) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2758) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2765) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2769) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2776) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2783) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2796) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2804) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2810) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2814) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2821) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2825) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2832) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getInviteeDetail()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2847) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateRebateInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2851) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2861) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2873) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2882) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2897) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2906) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2910) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |

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