# Node.js & Typescript OKX (OKEX) API & WebSocket SDK

[![E2E Tests](https://github.com/tiagosiebler/okx-api/actions/workflows/e2etest.yml/badge.svg?branch=master)](https://github.com/tiagosiebler/okx-api/actions/workflows/e2etest.yml) [![npm downloads](https://img.shields.io/npm/dt/okx-api)][1] [![npm version](https://img.shields.io/npm/v/okx-api)][1] [![npm size](https://img.shields.io/bundlephobia/min/okx-api/latest)][1] [![last commit](https://img.shields.io/github/last-commit/tiagosiebler/okx-api)][1] [![CodeFactor](https://www.codefactor.io/repository/github/tiagosiebler/okx-api/badge)](https://www.codefactor.io/repository/github/tiagosiebler/okx-api)

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/okx-api

Complete, updated & performant Node.js SDK for the OKX(OKEX) APIs and WebSockets:

- Complete integration with all OKX APIs, including the v5 APIs.
- TypeScript support (with type declarations for most API requests & responses).
- Over 100 end-to-end tests making real API calls & WebSocket connections, validating any changes before they reach npm.
- Robust WebSocket integration
  - Configurable connection heartbeats (automatically detect failing connections).
  - Automatic reconnect then resubscribe workflows.
  - Automatic authentication and heartbeat handling.
- Browser support (via webpack bundle - see "Browser Usage" below).

## Installation

```bash
npm install okx-api
```

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/tiagosiebler/okx-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/QuantSDKs)

<!-- template_related_projects -->

## Related projects

Check out my related JavaScript/TypeScript/Node.js projects:

- Try my REST API & WebSocket SDKs:
  - [Bybit-api Node.js SDK](https://www.npmjs.com/package/bybit-api)
  - [Okx-api Node.js SDK](https://www.npmjs.com/package/okx-api)
  - [Binance Node.js SDK](https://www.npmjs.com/package/binance)
  - [Gateio-api Node.js SDK](https://www.npmjs.com/package/gateio-api)
  - [Bitget-api Node.js SDK](https://www.npmjs.com/package/bitget-api)
  - [Kucoin-api Node.js SDK](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase-api Node.js SDK](https://www.npmjs.com/package/coinbase-api)
  - [Bitmart-api Node.js SDK](https://www.npmjs.com/package/bitmart-api)
- Try my misc utilities:
  - [OrderBooks Node.js](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/tiagosiebler/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Documentation

Most methods accept JS objects. These can be populated using parameters specified by okx's API documentation, or check the type definition in the rest-client class methods.

- [RestClient](src/rest-client.ts)
- [OKX API Documentation](https://www.okx.com/docs-v5/en/#rest-api)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)
- [TSDoc Documentation (generated using typedoc via npm module)](https://tsdocs.dev/docs/okx-api)

## Contributions & Thanks

Support my efforts to make algo trading accessible to all - register with my referral links:

- [Bybit](https://www.bybit.com/en-US/register?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Binance](https://www.binance.com/en/register?ref=20983262)
- [OKX](https://www.okx.com/join/18504944)

For more ways to give thanks & support my efforts, visit [Contributions & Thanks](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Contributions-&-Thanks)!

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

## Websocket Client

This connector includes a high-performance node.js & typescript websocket client for the OKX public & private websockets.

- If your IDE doesn't have IntelliSense, check the [websocket-client.ts](./src/websocket-client.ts) for a list of methods, params & return types.
- When subscribing to channels, only the "args" should be passed as an object or array when calling the websocket client subcribe() function: [API docs](https://www.okx.com/docs-v5/en/#websocket-api-subscribe).
- TypeScript recommended (but it is not required) for a richer experience:
  ![typescript-subscribe](./docs/images/subscribe-with-typescript.gif)
- The ws client will automatically open connections as needed when subscribing to a channel.
- If the connection is lost for any reason, the ws client will detect this (via the connection heartbeats). It will then:
  - Automatically teardown the dead connection.
  - Automatically respawn a fresh connection.
  - Automatically reauthenticate, if using private channels.
  - Automatically resubscribe to previously subscribed topics.
  - Resume producing events as before, without extra handling needed in your logic.
- The ws client will automatically authenticate if accounts are provided and a private channel is subscribed to.
- Up to 100 accounts are supported on the private connection, as per the [API docs](https://www.okx.com/docs-v5/en/#websocket-api-login). Authentication is automatic if accounts are provided.
- For examples in using the websocket client, check the examples in the repo:
  - Private channels (account data): [examples/ws-private.ts](./examples/ws-private.ts)
  - Public chanels (market data): [examples/ws-public.ts](./examples/ws-public.ts)
  - These examples are written in TypeScript, so can be executed with ts-node for easy testing:
    `ts-node examples/ws-private.ts`
  - Or convert them to javascript:
    - Change the `import { ... } from 'okx-api'` to `const { ... } = require('okx-api');`
    - Rename the file to `ws-private.js`
    - And execute with node: `node examples/ws-private.js`

### Public Events

See [examples/ws-public.ts](./examples/ws-public.ts) for a full example:

![typescript-events-public](./docs/images/subscribe-events-public.gif)

### Private Events

See [examples/ws-private.ts](./examples/ws-private.ts) for a full example:

![typescript-events](./docs/images/subscribe-events.gif)

## Browser/Frontend Usage

### Import

This is the "modern" way, allowing the package to be directly imported into frontend projects with full typescript support.

1. Install these dependencies
   ```sh
   npm install crypto-browserify stream-browserify
   ```
2. Add this to your `tsconfig.json`
   ```json
   {
     "compilerOptions": {
       "paths": {
         "crypto": [
           "./node_modules/crypto-browserify"
         ],
         "stream": [
           "./node_modules/stream-browserify"
         ]
   }
   ```
3. Declare this in the global context of your application (ex: in polyfills for angular)
   ```js
   (window as any).global = window;
   ```

### Webpack

This is the "old" way of using this package on webpages. This will build a minified js bundle that can be pulled in using a script tag on a website.

Build a bundle using webpack:

- `npm install`
- `npm build`
- `npm pack`

The bundle can be found in `dist/`. Altough usage should be largely consistent, smaller differences will exist. Documentation is still TODO.

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
-->
<!-- template_contributions_end -->

### Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tiagosiebler/bybit-api,tiagosiebler/okx-api,tiagosiebler/binance,tiagosiebler/bitget-api,tiagosiebler/bitmart-api,tiagosiebler/gateio-api,tiagosiebler/kucoin-api,tiagosiebler/coinbase-api,tiagosiebler/orderbooks,tiagosiebler/accountstate,tiagosiebler/awesome-crypto-examples&type=Date)](https://star-history.com/#tiagosiebler/bybit-api&tiagosiebler/okx-api&tiagosiebler/binance&tiagosiebler/bitget-api&tiagosiebler/bitmart-api&tiagosiebler/gateio-api&tiagosiebler/kucoin-api&tiagosiebler/coinbase-api&tiagosiebler/orderbooks&tiagosiebler/accountstate&tiagosiebler/awesome-crypto-examples&Date)

<!-- template_star_history_end -->
