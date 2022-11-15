# Node.js & Typescript OKX (OKEX) API SDK
[![E2E Tests](https://github.com/tiagosiebler/okx-api/actions/workflows/e2etest.yml/badge.svg?branch=master)](https://github.com/tiagosiebler/okx-api/actions/workflows/e2etest.yml) [![npm version](https://img.shields.io/npm/v/okx-api)][1] [![npm size](https://img.shields.io/bundlephobia/min/okx-api/latest)][1] [![npm downloads](https://img.shields.io/npm/dt/okx-api)][1] [![npm version](https://img.shields.io/npm/v/okx-api)][1] [![npm size](https://img.shields.io/bundlephobia/min/okx-api/latest)][1] [![npm downloads](https://img.shields.io/npm/dt/okx-api)][1]
[![last commit](https://img.shields.io/github/last-commit/tiagosiebler/okx-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/tiagosiebler/okx-api/badge)](https://www.codefactor.io/repository/github/tiagosiebler/okx-api)

[1]: https://www.npmjs.com/package/okx-api

## BETA RELEASE
```
**WARNING: This package is still early beta! Expect breaking changes until this sees a major release.**

If you want to stay informed when this may be ready for testing, please get in touch via telegram.
```

Node.js connector for the OKX (OKEX) APIs and WebSockets, with TypeScript & browser support.

## Installation
`npm install --save okx-api`

## Issues & Discussion
- Issues? Check the [issues tab](https://github.com/tiagosiebler/okx-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.

## Related projects
- Try my connectors:
  - [binance](https://www.npmjs.com/package/binance)
  - [bybit-api](https://www.npmjs.com/package/bybit-api)
  - [okx-api](https://www.npmjs.com/package/okx-api)
  - [ftx-api](https://www.npmjs.com/package/ftx-api)
- Try my misc utilities:
  - [orderbooks](https://www.npmjs.com/package/orderbooks)
- Check out my examples:
  - [awesome-crypto-examples](https://github.com/tiagosiebler/awesome-crypto-examples)

## Documentation
Most methods accept JS objects. These can be populated using parameters specified by okx's API documentation, or check the type definition in the rest-client class methods.
- [RestClient](src/rest-client.ts).
- [OKX API Documentation](https://www.okx.com/docs-v5/en/#rest-api).

## Structure
This project uses typescript. Resources are stored in 3 key structures:
- [src](./src) - the whole connector written in typescript
- [lib](./lib) - the javascript version of the project (compiled from typescript). This should not be edited directly, as it will be overwritten with each release. This is also the version published to npm.
- [dist](./dist) - the packed bundle of the project for use in browser environments (manual, using webpack).
- [examples](./examples) - some implementation examples & demonstrations. Contributions are welcome!

---

# Usage
Create API credentials at okx
- [OKX my-api](https://www.okx.com/account/my-api)

## REST Client

### Requests & Responses
- If your IDE doesn't have IntelliSense, check the [rest-client.ts](./src/rest-client.ts) for a list of methods, params & return types.
- Requests follow the same ordering and format as the categories in the [API docs](https://www.okx.com/docs-v5/en/#rest-api).
- Responses are parsed automatically for less nesting. Error responses are thrown in full:
  - If the response looks successful (HTTP 200 and "code" in the response body === "0"), only the `data` property is directly (without the `code`, `data` & `msg` properties).
  - If the response looks like an error (HTTP error OR the "code" property in the response does not equal "0"), the full response is thrown (including `code` and `msg` properties). See the interface for [APIResponse<T>](./src/types/rest/shared.ts).

## Browser Usage
Build a bundle using webpack:
- `npm install`
- `npm build`
- `npm pack`

The bundle can be found in `dist/`. Altough usage should be largely consistent, smaller differences will exist. Documentation is still TODO.

---

## Contributions & Thanks
### Donations
#### tiagosiebler
Support my efforts to make algo trading accessible to all - register with my referral links:
- [Bybit](https://www.bybit.com/en-US/register?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Binance](https://www.binance.com/en/register?ref=20983262)
- [OKX](https://www.okx.com/join/18504944)
- [FTX](https://ftx.com/referrals#a=ftxapigithub)

Or buy me a coffee using any of these:
- BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
- ETH (ERC20): `0xd773d8e6a50758e1ada699bb6c4f98bb4abf82da`

### Contributions & Pull Requests
Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.
