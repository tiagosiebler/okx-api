
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
| [getAccountInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L385) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L391) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L395) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L399) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L405) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L412) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L417) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [requestBillsHistoryDownloadLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L430) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L440) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L447) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L451) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L457) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L462) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L473) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L483) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [getLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L492) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L499) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L507) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L518) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L527) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L537) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L549) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L553) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L557) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L564) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L568) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L572) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L586) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L598) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L607) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L616) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L625) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L629) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L633) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L639) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L645) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L651) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L658) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L662) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L671) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L684) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L697) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L711) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L722) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L733) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L748) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L757) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L771) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L779) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L785) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L789) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L801) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L805) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L813) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L821) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [setAutoLoan()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L829) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L833) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L844) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L853) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L859) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L867) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L871) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [submitOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L881) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L885) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L889) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L893) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L899) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L903) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L907) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L911) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L915) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L922) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L929) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L938) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L945) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L950) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L963) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L972) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L981) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L995) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1003) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1007) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1019) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1026) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1030) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1040) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1044) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1050) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1056) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1062) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1068) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1074) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1086) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1090) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1107) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1111) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1117) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1127) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1139) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1146) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1153) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1163) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1175) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1182) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1186) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1197) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1206) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1217) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1226) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1233) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1241) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1255) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1259) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1263) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1269) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1278) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1286) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1294) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1305) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1315) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1322) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1329) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1336) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1345) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1353) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1357) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1364) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1368) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1380) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1386) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1395) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1404) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1413) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1422) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1431) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1443) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1449) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1455) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1461) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1470) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1479) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1491) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1500) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1506) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1515) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1527) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1538) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1546) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1560) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1564) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1572) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1580) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1592) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1599) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1605) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1611) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1617) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1623) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1629) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1635) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1642) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1648) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1654) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1661) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1667) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1673) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1679) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1685) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1692) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1698) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1704) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1711) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1720) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1729) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1741) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1749) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1753) |  | GET | `/api/v5/market/books` |
| [getFullOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1760) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1767) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1771) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1775) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1779) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1789) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1795) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1799) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1809) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1813) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1817) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1823) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1829) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1833) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1839) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1843) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1851) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1859) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1865) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1869) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1875) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1881) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1887) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1891) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1900) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1904) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1908) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1912) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1916) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1923) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1927) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1939) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1945) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1952) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1960) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1966) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1973) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1979) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1985) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1991) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1995) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1999) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2006) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2010) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2016) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2020) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2026) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2041) |  | GET | `/api/v5/public/instruments` |
| [getDeliveryExerciseHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2050) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2054) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2058) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2062) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2066) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2070) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2074) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2078) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2082) |  | GET | `/api/v5/public/time` |
| [getMarkPrice()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2086) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2090) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2094) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2098) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2102) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2106) |  | GET | `/api/v5/public/insurance-fund` |
| [getUnitConvert()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2110) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2114) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2121) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2125) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2132) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2136) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2140) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2144) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2150) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2154) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2158) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2162) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2168) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2178) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2182) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2191) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2201) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2207) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2216) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2225) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2234) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2243) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2255) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2267) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2274) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2284) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2294) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2305) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2315) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2319) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2323) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2327) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2333) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2338) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2346) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getLightningDeposits()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2357) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2365) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2369) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [submitWithdraw()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2373) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2377) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2385) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2389) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2393) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2399) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2403) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2407) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2411) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2415) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2422) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2426) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2430) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2441) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2445) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2455) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2461) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2468) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2475) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2486) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2496) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2502) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2512) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2518) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2531) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2548) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2556) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2567) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2575) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2583) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2596) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2616) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [purchaseETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2620) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2627) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2631) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2635) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [getAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2648) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2658) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2662) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2671) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2678) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2682) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2686) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2696) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2700) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2704) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2711) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2715) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2722) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2729) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2742) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2750) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2756) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2760) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2767) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2771) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2778) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getInviteeDetail()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2793) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateRebateInfo()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2797) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2807) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2819) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2828) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2843) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2852) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2856) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |