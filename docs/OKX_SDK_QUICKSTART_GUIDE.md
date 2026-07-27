<!-- siebly:metadata
siebly:
  version: 1
  hero:
    headline: OKX API JavaScript Tutorial for Node.js and TypeScript
    badges:
      - OKX API
      - Spot
      - Margin
      - Swaps
      - Futures
      - Options
      - WebSocket API
    summary: Build OKX integrations without writing request signing, regional endpoint routing, WebSocket authentication, reconnect loops, resubscribe logic, or WebSocket API response matching.
    codeFilename: first-okx-api-call.ts
    codeStatus: public REST API
    startSectionId: start-building-first-calls
  software:
    description: Node.js and JavaScript SDK for the OKX REST API, public and private WebSockets, business channels, demo trading, regional routing, proxy support, and WebSocket API commands.
    topics:
      - OKX REST API
      - Spot API
      - Margin API
      - Perpetual swaps
      - Futures API
      - Options API
      - Public WebSockets
      - Private WebSockets
      - Business WebSockets
      - WebSocket API
      - Demo trading
      - Regional routing
      - REST API and WebSocket proxies
  machineCatalog:
    label: OKX API JavaScript Tutorial
    topics:
      - REST API
      - product and instrument routing
      - account and position modes
      - demo trading
      - regional API routing
      - public WebSockets
      - private WebSockets
      - business WebSockets
      - WebSocket API commands
      - HTTP and SOCKS proxies
      - reconnect recovery
  sdkPagePromo:
    descriptionBeforePackage: 'A practical JavaScript guide to using '
    descriptionAfterPackage: ' across the OKX REST API, public and private streams, business channels, demo trading, regional API groups, proxies, and WebSocket API commands.'
    highlights:
      - Complete REST API coverage
      - Public, private, and business WebSocket channels
      - Demo trading and regional API routing
      - REST API and WebSocket proxy examples
    exampleHref: /examples/OKX/Websocket/WS-API/ws-api-client
    exampleLabel: WebSocket API example
    architectureClientSummary: RestClient, WebsocketClient, WebsocketAPIClient
    architectureApiTitle: OKX API
    architectureApiSummary: REST API, public streams, private streams, business streams, WebSocket API
  surfaceMap:
    heading: One OKX SDK, complete API coverage
    summary: Use the SDK client that matches the request, stream, or WebSocket command your application needs.
    appLabel: Bot, dashboard, worker, tool
    appSummary: Any Node.js or JavaScript-compatible service that needs OKX market data, account state, order management, or reconciliation.
    apiLabel: OKX API
    apiItems:
      - REST API calls across market, account, trade, funding, and product APIs
      - Public market streams
      - Private account streams
      - Business market and account streams
      - WebSocket API order commands
    packageNodes:
      - label: RestClient
        summary: Public and private REST API
      - label: WebsocketClient
        summary: Public, private, and business streams
      - label: WebsocketAPIClient
        summary: Awaitable WebSocket API commands
  routing:
    id: okx-request-routing
    eyebrow: Request routing
    heading: Region, product, instrument, and trade mode are separate choices
    summary: Keep these values explicit. Together they determine which OKX API group, product, instrument, and account behavior a request uses.
    rows:
      - eyebrow: Account region
        code: "market: 'OPENAPI_GLOBAL'"
        summary: Select the API group associated with the OKX account, such as Global, EEA, or US.
      - eyebrow: Product family
        code: "instType: 'SWAP'"
        summary: Select Spot, Margin, Swap, Futures, Options, or another supported product family.
      - eyebrow: Instrument
        code: "instId: 'BTC-USDT-SWAP'"
        summary: Identify the exact market or contract used by the request.
      - eyebrow: Trade mode
        code: "tdMode: 'cross'"
        summary: Select cash, cross margin, or isolated margin behavior where supported.
  coverage:
    heading: What to get right in an OKX integration
    summary: Start with a public request, then add credentials, product routing, private state, demo orders, regional routing, proxy configuration, and reconnect recovery.
    cards:
      - heading: REST API and products
        summary: Use one REST API client while keeping instrument type, instrument ID, trade mode, account mode, and position mode explicit.
      - heading: Public, private, and business streams
        summary: Subscribe with one WebSocket client and let the SDK route each channel to the correct OKX connection.
      - heading: WebSocket API commands
        summary: Send promise-based order commands, inspect each acknowledgement, then confirm order state from private streams or REST API.
      - heading: Regions and proxies
        summary: Select the correct OKX API group with market, then configure an agent when the network path requires a proxy.
  snippets:
    heading: First REST API calls, streams, demo orders, and WebSocket API commands
    summary: Run one focused example at a time, then add account-state recovery and production controls around the same clients.
    labels:
      public-rest: Public REST API
      private-rest: Private REST API
      public-websocket: Public stream
      private-websocket: Private stream
      demo-rest-order: Demo REST API order
      demo-ws-api-order: Demo WebSocket API order
  workflows:
    heading: REST API, WebSocket stream, and WebSocket API workflows
    summary: REST API responses, stream updates, and WebSocket API acknowledgements carry different information. Keep routing, subscription state, and final order state distinct.
    diagrams:
      - heading: REST API request flow
        summary: Choose the account region and instrument, then let RestClient route, sign, and parse the request.
        steps:
          - label: Choose market and instrument
            owner: app
          - label: Build typed request
            owner: app
          - label: Call RestClient
            owner: app
          - label: Route and sign
            owner: sdk
          - label: Receive OKX response
            owner: exchange
          - label: Use parsed data
            owner: app
      - heading: WebSocket channel routing
        summary: Pass channel arguments to subscribe. The SDK selects the public, private, or business connection and authenticates when required.
        steps:
          - label: Choose channel arguments
            owner: app
          - label: Call subscribe
            owner: app
          - label: Select connection
            owner: sdk
          - label: Connect and authenticate
            owner: sdk
          - label: Receive acknowledgement
            owner: event
          - label: Process updates
            owner: app
      - heading: WebSocket API order command
        summary: An accepted command is not a fill. Confirm the resulting order state through private streams or REST API.
        steps:
          - label: connectWSAPI()
            owner: app
          - label: Authenticate
            owner: sdk
          - label: await submitNewOrder()
            owner: app
          - label: Match response ID
            owner: sdk
          - label: Check code and sCode
            owner: app
          - label: Confirm order state
            owner: app
  production:
    heading: Before an OKX integration trades unattended
    summary: Credentials, account settings, request routing, acknowledgements, reconnect recovery, regional availability, and network behavior must all be predictable.
    items:
      - Keep live and demo credentials separate, and never put private keys in frontend code.
      - Make market, instType, instId, tdMode, account mode, and position mode explicit in order code and logs.
      - Set clOrdId on every application-owned order so retries and restarts can reconcile it.
      - Check REST API item-level sCode values and WebSocket API top-level plus item-level result codes.
      - Confirm final order state through private streams or REST API before treating a command as complete.
      - Backfill balances, positions, open orders, and fills after a private stream gap.
      - Keep the system clock synchronized and respect OKX rate limits.
      - Monitor proxy reachability, latency, and egress IP when a proxy is enabled.
  journeys:
    eyebrow: Choose your path
    heading: Jump to the OKX workflow you are building
    actionLabel: Open section
    cards:
      - heading: Start with REST API
        summary: Make public market calls, add private credentials, then inspect account and order state.
        href: "#start-building-first-calls"
      - heading: Stream live data
        summary: Subscribe to public, private, and business channels through WebsocketClient.
        href: "#websocket-streams"
      - heading: Send WebSocket commands
        summary: Use WebsocketAPIClient for promise-based order, amend, cancel, batch, and spread commands.
        href: "#websocket-api"
      - heading: Configure networking
        summary: Select the correct regional API group, then add an HTTP or SOCKS proxy agent where required.
        href: "#regional-api-routing"
  article:
    heading: Build around OKX instruments and account state
    summary: "This tutorial covers the OKX API pieces developers usually need first: REST API calls, product and instrument routing, public and private streams, business channels, demo orders, WebSocket API commands, regional API groups, proxies, and reconnect recovery."
  related:
    cards:
      - heading: OKX SDK page
        summary: Return to installation, examples, endpoint maps, and package links.
        href: /sdk/okx/javascript
      - heading: WebSocket API example
        summary: Open the runnable OKX WebSocket API client example used by the tutorial.
        href: /examples/OKX/Websocket/WS-API/ws-api-client
      - heading: OKX examples
        summary: Browse public, private, demo, regional, and WebSocket examples.
        href: /examples/OKX
      - heading: Source repository
        summary: Browse SDK source, releases, issues, and endpoint coverage on GitHub.
        href: https://github.com/tiagosiebler/okx-api
-->

# OKX API JavaScript Tutorial for Node.js and TypeScript

<!-- siebly:website-omit:start -->

> [!TIP]
> Read this guide in tutorial format on the Siebly website: [OKX JavaScript REST API and WebSocket Tutorial](https://siebly.io/sdk/okx/javascript/tutorial)

<!-- siebly:website-omit:end -->

This tutorial uses [`okx-api`](https://www.npmjs.com/package/okx-api), Siebly's Node.js, JavaScript, and TypeScript SDK for OKX. It covers public and private REST API calls, live WebSocket streams, demo orders, WebSocket API commands, regional API routing, and proxies.

The SDK handles OKX request signing, API passphrase authentication, regional hosts, demo trading, WebSocket channel routing, heartbeats, reconnects, resubscriptions, and WebSocket API response matching. Request and response types are included.

**Key links**

- OKX JavaScript SDK by Siebly: [`okx-api`](https://www.npmjs.com/package/okx-api)
- GitHub repository: [`tiagosiebler/okx-api`](https://github.com/tiagosiebler/okx-api)
- SDK endpoint map: [OKX JavaScript endpoint reference](./endpointFunctionList.md)
- SDK examples: [OKX SDK examples](https://siebly.io/examples/OKX)
- OKX Global API docs: [OKX API documentation](https://www.okx.com/docs-v5/en/)
- OKX EEA API docs: [OKX EEA API documentation](https://my.okx.com/docs-v5/en/)
- OKX US API docs: [OKX US API documentation](https://app.okx.com/docs-v5/en/)
- Trading-system terms: [Siebly glossary](https://siebly.io/reference/glossary)
- More JavaScript and TypeScript SDKs: [Siebly.io](https://siebly.io)

---

<!-- siebly:section id="why-use-the-sdk" -->

## Why use the SDK

An OKX integration has more than one connection path:

- Private REST API calls require an API key, secret, passphrase, timestamp, and HMAC signature.
- Public, private, and business WebSocket channels use different endpoints.
- Demo trading uses separate API keys, REST API headers, and WebSocket hosts.
- Global, EEA, and US accounts use different API host groups.
- WebSocket connections need heartbeat, reconnect, and resubscribe handling.
- WebSocket API commands need unique request IDs and matching responses.

The SDK handles those mechanics and exposes three main clients:

| Workflow          | SDK client           | Use it for                                                                           |
| ----------------- | -------------------- | ------------------------------------------------------------------------------------ |
| REST API          | `RestClient`         | Public data, account reads, trading, funding, transfers, and broad endpoint coverage |
| WebSocket streams | `WebsocketClient`    | Public market data, private account state, and business channels                     |
| WebSocket API     | `WebsocketAPIClient` | Awaitable order, amend, cancel, batch, and spread commands over WebSocket            |

Most applications use `RestClient` for initial state and reconciliation, then add `WebsocketClient` for live updates. Use `WebsocketAPIClient` when you want supported trading commands to use a persistent authenticated socket.

---

<!-- siebly:section id="installation-and-api-keys" -->

## Installation and API keys

Install the SDK:

```bash
npm install okx-api
```

Other npm-compatible package managers work too:

```bash
pnpm install okx-api
yarn add okx-api
```

Public market data does not need credentials. Private REST API calls, private WebSocket subscriptions, and WebSocket API commands need all three values:

| SDK option  | OKX credential                                 |
| ----------- | ---------------------------------------------- |
| `apiKey`    | API key                                        |
| `apiSecret` | API secret                                     |
| `apiPass`   | Passphrase chosen when the API key was created |

`apiPass` is the API-key passphrase, not the password used to sign in to OKX.

Create and manage keys on the site associated with the account:

- [OKX Global API keys](https://www.okx.com/account/my-api)
- [OKX EEA API keys](https://my.okx.com/account/my-api)
- [OKX US API keys](https://app.okx.com/account/my-api)

The private examples use these environment variables:

```bash
OKX_API_KEY
OKX_API_SECRET
OKX_API_PASSPHRASE
```

Use a secret manager in deployed applications. Keep live and demo credentials separate, grant only the permissions the application needs, and use an IP whitelist when the outbound addresses are stable. Nothing in this tutorial requires withdrawal permission.

Pass the environment variables directly when creating a private client:

```typescript
import { RestClient } from 'okx-api';

const client = new RestClient({
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
});
```

The TypeScript `!` tells the compiler that each environment variable is set. Do not log the credentials. Private signing also depends on an accurate system clock and a maintained Node.js release with the Web Crypto API.

---

<!-- siebly:section id="okx-products-and-request-vocabulary" -->

## OKX products and request vocabulary

OKX uses an instrument type to identify a product family and an instrument ID to identify the exact market:

| Product         | Typical `instType` | `instId` example                                          | Common `tdMode`          |
| --------------- | ------------------ | --------------------------------------------------------- | ------------------------ |
| Spot            | `SPOT`             | `BTC-USDT`                                                | `cash`                   |
| Spot margin     | `MARGIN`           | `BTC-USDT`                                                | `cross` or `isolated`    |
| Perpetual swap  | `SWAP`             | `BTC-USDT-SWAP`                                           | `cross` or `isolated`    |
| Dated futures   | `FUTURES`          | Query current instruments for an active expiry            | `cross` or `isolated`    |
| Options         | `OPTION`           | Query current instruments for an active expiry and strike | Depends on account setup |
| Event contracts | `EVENTS`           | Query current instruments and regional availability       | Product-specific         |

Do not hardcode dated futures or option instrument IDs in long-lived code. Use `getInstruments()` to find active contracts and read their expiry, tick size, lot size, and minimum size.

The fields used most often are:

- `instType`: the product family, such as `SPOT`, `SWAP`, or `OPTION`.
- `instId`: the exact instrument, such as `BTC-USDT` or `BTC-USDT-SWAP`.
- `instFamily`: a derivatives family used by some requests and channels.
- `uly`: the underlying used by some futures and options endpoints.
- `tdMode`: `cash`, `cross`, `isolated`, or another mode supported by that request.
- `posSide`: `net`, `long`, or `short`, depending on the account's position mode.
- `clOrdId`: your own identifier for an order.

Use a unique `clOrdId` for each application-owned order. It makes retries and reconciliation easier. See [Custom Order ID](https://siebly.io/reference/glossary#custom-order-id) in the Siebly glossary.

Account mode and position mode affect which order fields are valid. Read `getAccountConfiguration()` before building derivatives order logic. The tutorial does not change either setting.

### REST API, streams, and the WebSocket API

These are separate workflows:

| Flow              | SDK client           | Best for                                                                          |
| ----------------- | -------------------- | --------------------------------------------------------------------------------- |
| REST API          | `RestClient`         | Public reads, account reads, trading, broad endpoint coverage, and reconciliation |
| WebSocket streams | `WebsocketClient`    | Live market, order, balance, and position updates                                 |
| WebSocket API     | `WebsocketAPIClient` | Awaitable order-management commands over an authenticated socket                  |

A stream update and a WebSocket API acknowledgement are not interchangeable. An acknowledgement reports whether OKX accepted a command. Order and fill state still comes from the private streams or a REST API query.

---

<!-- siebly:section id="start-building-first-calls" -->

## Start building: first calls

Run the public REST API example first. Then add the client that matches the workflow you need.

### 1. First public REST API request

`RestClient` works without credentials for public endpoints.

<!-- siebly:snippet id="public-rest" -->

```typescript
import { RestClient } from 'okx-api';

const client = new RestClient();

async function main() {
  try {
    const serverTime = await client.getSystemTime({});
    console.log('Server time:', serverTime[0]?.ts);
  } catch (error) {
    console.error('Failed to get server time:', error);
  }

  try {
    const instruments = await client.getInstruments({
      instType: 'SPOT',
      instId: 'BTC-USDT',
    });
    console.log('Instrument:', instruments[0]?.instId);
  } catch (error) {
    console.error('Failed to get instruments:', error);
  }

  try {
    const ticker = await client.getTicker({ instId: 'BTC-USDT' });
    console.log('Last price:', ticker[0]?.last);
  } catch (error) {
    console.error('Failed to get ticker:', error);
  }

  try {
    const orderBook = await client.getOrderBook({
      instId: 'BTC-USDT',
      sz: '5',
    });
    console.log('Best bid:', orderBook[0]?.bids[0]);
  } catch (error) {
    console.error('Failed to get order book:', error);
  }

  try {
    const candles = await client.getCandles({
      instId: 'BTC-USDT',
      bar: '1m',
      limit: '5',
    });
    console.log('Latest candle:', candles[0]);
  } catch (error) {
    console.error('Failed to get candles:', error);
  }
}

main();
```

Run it with a TypeScript runner or compile it with your project:

```bash
npx tsx first-okx-api-call.ts
```

Successful SDK methods return the parsed OKX `data` value. Most OKX REST API endpoints return an array, so `getTicker()` resolves to the ticker array rather than the outer `{ code, msg, data }` envelope. Exchange errors and non-success HTTP responses reject the promise.

### 2. First private REST API request

Private calls use the same client with `apiKey`, `apiSecret`, and `apiPass`.

<!-- siebly:snippet id="private-rest" -->

```typescript
import { RestClient } from 'okx-api';

const client = new RestClient({
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
});

async function main() {
  try {
    const configuration = await client.getAccountConfiguration();
    console.log({
      accountMode: configuration[0]?.acctLv,
      positionMode: configuration[0]?.posMode,
    });
  } catch (error) {
    console.error('Failed to get account configuration:', error);
  }

  try {
    const balances = await client.getBalance();
    console.log({
      totalEquity: balances[0]?.totalEq,
      currencies: balances[0]?.details.map((item) => item.ccy),
    });
  } catch (error) {
    console.error('Failed to get trading balances:', error);
  }

  try {
    const positions = await client.getPositions();
    console.log('Position count:', positions.length);
  } catch (error) {
    console.error('Failed to get positions:', error);
  }

  try {
    const openOrders = await client.getOrderList({ instType: 'SPOT' });
    console.log('Open order count:', openOrders.length);
  } catch (error) {
    console.error('Failed to get open orders:', error);
  }

  try {
    const fills = await client.getFills({ instType: 'SPOT', limit: '20' });
    console.log('Recent fill count:', fills.length);
  } catch (error) {
    console.error('Failed to get fills:', error);
  }
}

main();
```

Read-only API keys are sufficient for this example. `getBalance()` returns trading-account balances. Funding-account assets use `getBalances()`, which is a different endpoint covered later.

### 3. First public WebSocket stream

Pass the inner channel objects from the OKX `args` array to `subscribe()`. The SDK builds the outer subscribe message and selects the correct WebSocket connection.

<!-- siebly:snippet id="public-websocket" -->

```typescript
import { WebsocketClient } from 'okx-api';

const ws = new WebsocketClient();

ws.on('open', ({ wsKey }) => {
  console.log('Connected:', wsKey);
});

ws.on('response', (event) => {
  console.log('WebSocket response:', event);
});

ws.on('update', (event) => {
  console.log(event.arg.channel, event.data);
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('Reconnecting:', wsKey);
});

ws.on('reconnected', ({ wsKey }) => {
  console.log('Reconnected:', wsKey);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

ws.subscribe([
  { channel: 'tickers', instId: 'BTC-USDT' },
  { channel: 'books', instId: 'BTC-USDT' },
  { channel: 'trades', instId: 'BTC-USDT' },
  { channel: 'candle1m', instId: 'BTC-USDT' },
]);
```

Ticker, book, and trade channels use the public WebSocket. Candles use the business WebSocket. One `WebsocketClient` routes both connections, tracks the subscriptions, and resubscribes after a reconnect.

The `response` event carries subscription and control replies. Live channel data arrives on `update`.

### 4. First private WebSocket stream

Private channels need credentials in the client's `accounts` array.

<!-- siebly:snippet id="private-websocket" -->

```typescript
import { WebsocketClient } from 'okx-api';

const ws = new WebsocketClient({
  accounts: [
    {
      apiKey: process.env.OKX_API_KEY!,
      apiSecret: process.env.OKX_API_SECRET!,
      apiPass: process.env.OKX_API_PASSPHRASE!,
    },
  ],
});

ws.on('open', ({ wsKey }) => {
  console.log('Connected:', wsKey);
});

ws.on('authenticated', ({ wsKey }) => {
  console.log('Authenticated:', wsKey);
});

ws.on('response', (event) => {
  console.log('WebSocket response:', event);
});

ws.on('update', (event) => {
  console.log(event.arg.channel, event.data);
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('Reconnecting:', wsKey);
});

ws.on('reconnected', ({ wsKey }) => {
  console.log('Reconnected:', wsKey);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

ws.subscribe([
  { channel: 'account' },
  { channel: 'positions', instType: 'ANY' },
  { channel: 'orders', instType: 'ANY' },
]);
```

The SDK connects and authenticates when the first private subscription needs it. Use `response` to check the [Subscription Acknowledgement](https://siebly.io/reference/glossary#subscription-acknowledgement), then process channel data from `update`.

OKX can publish related state changes on several channels. Account, position, order, and fill handling should share one consistent account-state model.

### 5. First REST API order in demo trading

This example can only place a demo order. It hardcodes `demoTrading: true`, requires separate demo API keys, and exits unless `OKX_PLACE_DEMO_ORDER=true` is set.

It reads the current instrument rules and places a post-only buy at the current best bid, then queries and cancels the order if it is still open.

<!-- siebly:snippet id="demo-rest-order" -->

```typescript
import { RestClient } from 'okx-api';

if (process.env.OKX_PLACE_DEMO_ORDER !== 'true') {
  throw new Error('Set OKX_PLACE_DEMO_ORDER=true to place the demo order.');
}

const client = new RestClient({
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
  demoTrading: true,
});

async function main() {
  const instId = 'BTC-USDT';

  let instrument;
  try {
    [instrument] = await client.getInstruments({
      instType: 'SPOT',
      instId,
    });
  } catch (error) {
    console.error('Failed to get instrument rules:', error);
    return;
  }

  let ticker;
  try {
    [ticker] = await client.getTicker({ instId });
  } catch (error) {
    console.error('Failed to get the ticker:', error);
    return;
  }

  if (!instrument || !ticker) {
    console.error(`No demo market data returned for ${instId}.`);
    return;
  }

  if (!ticker.bidPx) {
    console.error(`No best bid returned for ${instId}.`);
    return;
  }

  const clOrdId = `sieblyDemo${Date.now()}`;

  let placed;
  try {
    [placed] = await client.submitOrder({
      instId,
      tdMode: 'cash',
      side: 'buy',
      ordType: 'post_only',
      sz: instrument.minSz,
      px: ticker.bidPx,
      clOrdId,
    });
  } catch (error) {
    console.error('Failed to submit the demo order:', error);
    return;
  }

  if (!placed || placed.sCode !== '0') {
    console.error(placed?.sMsg || 'OKX rejected the demo order.');
    return;
  }

  console.log('Demo order accepted:', {
    ordId: placed.ordId,
    clOrdId: placed.clOrdId,
  });

  let order;
  try {
    [order] = await client.getOrderDetails({ instId, clOrdId });
    console.log('Current order state:', order?.state);
  } catch (error) {
    console.error('Failed to query the demo order:', error);
  }

  if (!order || ['live', 'partially_filled'].includes(order.state)) {
    try {
      const [cancelled] = await client.cancelOrder({ instId, clOrdId });

      if (!cancelled || cancelled.sCode !== '0') {
        console.error(cancelled?.sMsg || 'OKX rejected the cancellation.');
        return;
      }

      console.log('Demo order cancellation accepted:', cancelled.ordId);
    } catch (error) {
      console.error('Failed to cancel the demo order:', error);
    }
  }
}

main();
```

OKX order endpoints can return an HTTP success while an individual order result has failed. Check `sCode` and `sMsg` on each result item. This also applies to batch requests, where some items can succeed and others can fail.

Use `demoTrading: true`. Do not use the old `market: 'demo'` form.

### 6. First WebSocket API order command

`WebsocketAPIClient` wraps supported WebSocket commands in promises. Current OKX WebSocket order requests prefer `instIdCode`, so the example reads it from `getInstruments()` before submitting the same demo-only post-only order.

<!-- siebly:snippet id="demo-ws-api-order" -->

```typescript
import { RestClient, WebsocketAPIClient } from 'okx-api';

if (process.env.OKX_PLACE_DEMO_ORDER !== 'true') {
  throw new Error('Set OKX_PLACE_DEMO_ORDER=true to place the demo order.');
}

const credentials = {
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
};
const rest = new RestClient({
  ...credentials,
  demoTrading: true,
});
const wsApi = new WebsocketAPIClient({
  accounts: [credentials],
  demoTrading: true,
  attachEventListeners: false,
});
const ws = wsApi.getWSClient();

ws.on('open', ({ wsKey }) => console.log('Connected:', wsKey));
ws.on('authenticated', ({ wsKey }) => console.log('Authenticated:', wsKey));
ws.on('reconnect', ({ wsKey }) => console.log('Reconnecting:', wsKey));
ws.on('reconnected', ({ wsKey }) => console.log('Reconnected:', wsKey));
ws.on('exception', (error) => console.error('WebSocket exception:', error));

async function main() {
  const instId = 'BTC-USDT';

  let instrument;
  try {
    [instrument] = await rest.getInstruments({
      instType: 'SPOT',
      instId,
    });
  } catch (error) {
    console.error('Failed to get instrument rules:', error);
    ws.closeAll();
    return;
  }

  let ticker;
  try {
    [ticker] = await rest.getTicker({ instId });
  } catch (error) {
    console.error('Failed to get the ticker:', error);
    ws.closeAll();
    return;
  }

  if (!instrument || !ticker) {
    console.error(`No demo market data returned for ${instId}.`);
    ws.closeAll();
    return;
  }

  if (!instrument.instIdCode) {
    console.error(`No instIdCode returned for ${instId}.`);
    ws.closeAll();
    return;
  }

  if (!ticker.bidPx) {
    console.error(`No best bid returned for ${instId}.`);
    ws.closeAll();
    return;
  }

  const clOrdId = `sieblyWsDemo${Date.now()}`;

  try {
    await wsApi.connectWSAPI();
  } catch (error) {
    console.error('Failed to connect the WebSocket API:', error);
    ws.closeAll();
    return;
  }

  let placed;
  try {
    placed = await wsApi.submitNewOrder({
      instIdCode: instrument.instIdCode,
      tdMode: 'cash',
      side: 'buy',
      ordType: 'post_only',
      sz: instrument.minSz,
      px: ticker.bidPx,
      clOrdId,
    });
  } catch (error) {
    console.error('Failed to submit the WebSocket API order:', error);
    ws.closeAll();
    return;
  }

  const placedItem = placed.data[0];

  if (placed.code !== '0' || !placedItem || placedItem.sCode !== '0') {
    console.error(placedItem?.sMsg || placed.msg || 'Order was rejected.');
    ws.closeAll();
    return;
  }

  console.log('Demo WebSocket order accepted:', {
    ordId: placedItem.ordId,
    clOrdId: placedItem.clOrdId,
  });

  let cancelled;
  try {
    cancelled = await wsApi.cancelOrder({ clOrdId });
  } catch (error) {
    console.error('Failed to cancel the WebSocket API order:', error);
    ws.closeAll();
    return;
  }

  const cancelledItem = cancelled.data[0];

  if (cancelled.code !== '0' || !cancelledItem || cancelledItem.sCode !== '0') {
    console.error(
      cancelledItem?.sMsg || cancelled.msg || 'Cancellation was rejected.',
    );
    ws.closeAll();
    return;
  }

  console.log('Demo WebSocket cancellation accepted:', cancelledItem.ordId);
  ws.closeAll();
}

main();
```

Check both the top-level `code` and each item's `sCode`. A successful acknowledgement means OKX accepted the command, not that the order filled. Treat it as [Pending Confirmation](https://siebly.io/reference/glossary#pending-confirmation) until the private order stream or REST API confirms the resulting state. See [Private Stream Confirmation](https://siebly.io/reference/glossary#private-stream-confirmation) for the distinction.

---

<!-- siebly:section id="rest-api" -->

## REST API

`RestClient` covers OKX market data, public data, account, trade, funding, transfer, sub-account, convert, algo, grid, copy-trading, spread, block-trading, Earn, staking, and loan endpoints.

Public methods work without credentials. Private methods use the credentials passed to the constructor, and the SDK adds the timestamp, signature, passphrase, and other required headers.

### Public market data

The same product fields appear across public endpoints:

- Use `instType` for a product family.
- Use `instId` for one exact market.
- Use `instFamily` or `uly` where a derivatives endpoint asks for a family or underlying.
- Query instruments before using products with expiries, strikes, or region-specific availability.

This example reads both Spot and perpetual-swap data:

<!-- siebly:snippet id="public-market-data" -->

```typescript
import { RestClient } from 'okx-api';

const client = new RestClient();

async function main() {
  const spotInstId = 'BTC-USDT';
  const swapInstId = 'BTC-USDT-SWAP';

  try {
    const spotInstruments = await client.getInstruments({
      instType: 'SPOT',
      instId: spotInstId,
    });
    console.log('Spot instrument:', spotInstruments[0]?.instId);
  } catch (error) {
    console.error('Failed to get Spot instruments:', error);
  }

  try {
    const spotTickers = await client.getTickers({ instType: 'SPOT' });
    console.log('Spot ticker count:', spotTickers.length);
  } catch (error) {
    console.error('Failed to get Spot tickers:', error);
  }

  try {
    const orderBook = await client.getOrderBook({
      instId: spotInstId,
      sz: '5',
    });
    console.log('Best bid:', orderBook[0]?.bids[0]);
  } catch (error) {
    console.error('Failed to get the order book:', error);
  }

  try {
    const candles = await client.getCandles({
      instId: spotInstId,
      bar: '1m',
      limit: '5',
    });
    console.log('Latest candle:', candles[0]);
  } catch (error) {
    console.error('Failed to get candles:', error);
  }

  try {
    const trades = await client.getTrades({ instId: spotInstId, limit: 5 });
    console.log('Latest trade:', trades[0]);
  } catch (error) {
    console.error('Failed to get trades:', error);
  }

  try {
    const swapInstruments = await client.getInstruments({
      instType: 'SWAP',
      instId: swapInstId,
    });
    console.log('Swap instrument:', swapInstruments[0]?.instId);
  } catch (error) {
    console.error('Failed to get swap instruments:', error);
  }

  try {
    const openInterest = await client.getOpenInterest({
      instType: 'SWAP',
      instId: swapInstId,
    });
    console.log('Open interest rows:', openInterest.length);
  } catch (error) {
    console.error('Failed to get open interest:', error);
  }

  try {
    const fundingRate = await client.getFundingRate({ instId: swapInstId });
    console.log('Funding rate:', fundingRate[0]?.fundingRate);
  } catch (error) {
    console.error('Failed to get the funding rate:', error);
  }

  try {
    const markPrice = await client.getMarkPrice({
      instType: 'SWAP',
      instId: swapInstId,
    });
    console.log('Mark price:', markPrice[0]?.markPx);
  } catch (error) {
    console.error('Failed to get the mark price:', error);
  }

  try {
    const indexTicker = await client.getIndexTickers({ instId: spotInstId });
    console.log('Index price:', indexTicker[0]?.idxPx);
  } catch (error) {
    console.error('Failed to get the index ticker:', error);
  }
}

main();
```

Candles are returned newest first. Each candle is an array containing timestamp, open, high, low, close, volume fields, and a confirmation flag. Destructure those positions or map them into named fields before passing them deeper into an application.

Use `getHistoricCandles()` for older market candles. Index and mark-price candles have separate methods because their response and pricing source differ from traded-market candles.

### Private account state

Start private workflows by reading account configuration and current state:

<!-- siebly:snippet id="private-account-state" -->

```typescript
import { RestClient } from 'okx-api';

const client = new RestClient({
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
});

async function main() {
  try {
    const configuration = await client.getAccountConfiguration();
    console.log({
      accountMode: configuration[0]?.acctLv,
      positionMode: configuration[0]?.posMode,
    });
  } catch (error) {
    console.error('Failed to get account configuration:', error);
  }

  try {
    const tradingBalances = await client.getBalance();
    console.log('Trading equity:', tradingBalances[0]?.totalEq);
  } catch (error) {
    console.error('Failed to get trading balances:', error);
  }

  try {
    const fundingBalances = await client.getBalances();
    console.log('Funding currency count:', fundingBalances.length);
  } catch (error) {
    console.error('Failed to get funding balances:', error);
  }

  try {
    const positions = await client.getPositions();
    console.log('Position count:', positions.length);
  } catch (error) {
    console.error('Failed to get positions:', error);
  }

  try {
    const openOrders = await client.getOrderList({ instType: 'SPOT' });
    console.log('Open order count:', openOrders.length);
  } catch (error) {
    console.error('Failed to get open orders:', error);
  }

  try {
    const orderHistory = await client.getOrderHistory({
      instType: 'SPOT',
      limit: '20',
    });
    console.log('Recent order count:', orderHistory.length);
  } catch (error) {
    console.error('Failed to get order history:', error);
  }

  try {
    const fills = await client.getFills({ instType: 'SPOT', limit: '20' });
    console.log('Recent fill count:', fills.length);
  } catch (error) {
    console.error('Failed to get fills:', error);
  }

  try {
    const feeRates = await client.getFeeRates({
      instType: 'SPOT',
      instId: 'BTC-USDT',
    });
    console.log('Fee rate rows:', feeRates.length);
  } catch (error) {
    console.error('Failed to get fee rates:', error);
  }
}

main();
```

`getBalance()` reads the trading account. `getBalances()` reads assets in the funding account. They are different OKX account areas, so do not combine the results without retaining their source.

Pending orders, recent order history, fills, positions, and balances are useful together when rebuilding [Account State](https://siebly.io/reference/glossary#accountstate).

### Order management

The complete demo REST API example above shows a safe place, query, and cancel flow. The same `RestClient` also exposes amend and batch methods:

| Operation           | SDK method                           | Result to inspect                                            |
| ------------------- | ------------------------------------ | ------------------------------------------------------------ |
| Place one order     | `submitOrder()`                      | Item `sCode`, `sMsg`, `ordId`, and `clOrdId`                 |
| Place a batch       | `submitMultipleOrders()`             | Every item's `sCode` and `sMsg`                              |
| Query one order     | `getOrderDetails()`                  | Current `state`, filled size, average price, and identifiers |
| Amend one order     | `amendOrder()`                       | Item `sCode`, `sMsg`, and `reqId`                            |
| Amend a batch       | `amendMultipleOrders()`              | Every item's result                                          |
| Cancel one order    | `cancelOrder()`                      | Item `sCode` and `sMsg`                                      |
| Cancel a batch      | `cancelMultipleOrders()`             | Every item's result                                          |
| Read pending orders | `getOrderList()`                     | Orders still working                                         |
| Read recent history | `getOrderHistory()` and `getFills()` | Completed order and execution evidence                       |

Identify application-owned orders with `clOrdId`. After placement, OKX also returns `ordId`; persist both. A typical amend uses:

```typescript
import type { RestClient } from 'okx-api';

async function amendOrder(
  client: RestClient,
  instId: string,
  clOrdId: string,
  newPx: string,
) {
  try {
    const [amended] = await client.amendOrder({
      instId,
      clOrdId,
      newPx,
      reqId: `amend${Date.now()}`,
    });

    if (!amended || amended.sCode !== '0') {
      console.error(amended?.sMsg || 'OKX rejected the amendment.');
      return;
    }

    return amended;
  } catch (error) {
    console.error('Failed to amend the order:', error);
  }
}
```

`newPx` must follow the current instrument tick size and price limits. `reqId` identifies the amend request, while `clOrdId` continues to identify the order.

For retries after a timeout, query by `clOrdId` before submitting another order. A missing response does not prove that OKX rejected the first request.

### Spot, margin, and derivatives orders

Order fields depend on the product and account configuration:

| Workflow       | Important fields                                                                            |
| -------------- | ------------------------------------------------------------------------------------------- |
| Spot           | `instId`, `tdMode: 'cash'`, `side`, `ordType`, and `sz`                                     |
| Spot margin    | Spot `instId` with `tdMode: 'cross'` or `isolated`, plus borrowing behavior where needed    |
| Perpetual swap | Swap `instId`, margin `tdMode`, and position-side fields that match the account             |
| Dated futures  | A current futures `instId` from `getInstruments()`, margin mode, and position-side fields   |
| Options        | A current option `instId`, account-compatible trade mode, size, and a supported price field |

In net position mode, derivatives requests normally use or imply `posSide: 'net'`. In long/short mode, opening and closing requests use `posSide: 'long'` or `short`. Do not copy a derivatives order request across accounts without reading `posMode`.

Use `reduceOnly` only where the product, mode, and side support it. For margin and derivatives, check available size, leverage, margin mode, and current positions before sending an order.

### More REST API groups

`RestClient` also covers:

- Algo orders, attached take-profit and stop-loss orders, trailing orders, and recurring buys.
- Grid and signal bots.
- Copy trading.
- Spread trading, block trading, RFQs, and market-maker protection.
- Funding-account transfers, deposits, withdrawals, and sub-accounts.
- Convert and easy-convert workflows.
- Earn, savings, staking, dual investment, and loan products.
- Event contracts where the account region supports them.

Use the [OKX SDK endpoint map](./endpointFunctionList.md) to find the method for a specific endpoint, then check the matching regional OKX documentation for request rules and availability.

---

<!-- siebly:section id="websocket-streams" -->

## WebSocket streams

`WebsocketClient` manages public, private, and business connections. It handles heartbeats, reconnects, and resubscriptions, while emitting the same lifecycle events for each connection.

### Events and type guards

| Event           | Meaning                                                |
| --------------- | ------------------------------------------------------ |
| `open`          | A connection opened for the first time                 |
| `authenticated` | An authenticated connection completed login            |
| `response`      | Login, subscribe, unsubscribe, error, or control reply |
| `update`        | Data from a subscribed channel                         |
| `reconnect`     | The SDK is reconnecting a dropped connection           |
| `reconnected`   | The connection is open again                           |
| `exception`     | A connection or listener error needs attention         |
| `close`         | A connection closed                                    |

The package exports type guards for handlers that receive unknown messages:

```typescript
import {
  isWsDataEvent,
  isWsErrorEvent,
  isWsSubscribeEvent,
  WebsocketClient,
} from 'okx-api';

const ws = new WebsocketClient();

ws.on('response', (event) => {
  if (isWsErrorEvent(event)) {
    console.error('OKX WebSocket error:', event);
    return;
  }

  if (isWsSubscribeEvent(event)) {
    console.log('Subscription acknowledged:', event);
  }
});

ws.on('update', (event) => {
  if (isWsDataEvent(event)) {
    console.log(event.arg.channel, event.data);
  }
});
```

`isWsDataEvent()` checks for channel data, `isWsSubscribeEvent()` checks for a subscribe reply, and `isWsErrorEvent()` checks for an exchange error event.

### Automatic channel routing

The channel determines which OKX connection the SDK uses:

| Connection | Example channels                                               | Authentication         |
| ---------- | -------------------------------------------------------------- | ---------------------- |
| Public     | `tickers`, `books`, `trades`, `instruments`, `funding-rate`    | Usually none           |
| Private    | `account`, `positions`, `orders`, `balance_and_position`       | Required               |
| Business   | Candles, algo orders, grid channels, deposits, and withdrawals | Depends on the channel |

Normal subscriptions do not need a manually selected `WS_KEY_MAP` value. Pass the channel arguments to `subscribe()` and let the SDK route them. A [WsKey](https://siebly.io/reference/glossary#ws-key) is still useful in logs because lifecycle events include the connection's `wsKey`.

Some high-depth public books require authentication even though their data is public. Add credentials when using a channel whose OKX documentation requires an authenticated public connection.

### Subscribe and shut down

Keep the subscribed topics together, then close the WebSocket connections when the process shuts down:

<!-- siebly:snippet id="ws-subscribe-shutdown" -->

```typescript
import { type WsChannelSubUnSubRequestArg, WebsocketClient } from 'okx-api';

const ws = new WebsocketClient();

const topics = [
  { channel: 'tickers', instId: 'BTC-USDT' },
  { channel: 'books', instId: 'BTC-USDT' },
  { channel: 'candle1m', instId: 'BTC-USDT' },
] satisfies WsChannelSubUnSubRequestArg[];

ws.on('update', (event) => {
  console.log(event.arg.channel, event.data);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

ws.subscribe(topics);

function shutdown() {
  ws.closeAll();
}

process.once('SIGINT', shutdown);
```

There is no need to unsubscribe before `closeAll()`. Use `unsubscribe()` only when the application should stop receiving a topic while its other WebSocket connections remain active.

### Private streams and recovery

The SDK reconnects and resubscribes after a connection gap. That restores transport and subscription state, but it cannot recover updates that OKX sent while the connection was unavailable.

Backfill private state through REST API before order logic relies on the stream again:

<!-- siebly:snippet id="private-stream-recovery" -->

```typescript
import { RestClient, WebsocketClient } from 'okx-api';

const credentials = {
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
};
const rest = new RestClient(credentials);
const ws = new WebsocketClient({ accounts: [credentials] });

async function refreshAccountState() {
  const instrumentTypes = [
    'SPOT',
    'MARGIN',
    'SWAP',
    'FUTURES',
    'OPTION',
  ] as const;

  let balanceRows = 0;
  let positionRows = 0;
  let openOrderRows = 0;
  let recentFillRows = 0;

  try {
    const balances = await rest.getBalance();
    balanceRows = balances.length;
  } catch (error) {
    console.error('Failed to refresh balances:', error);
  }

  try {
    const positions = await rest.getPositions();
    positionRows = positions.length;
  } catch (error) {
    console.error('Failed to refresh positions:', error);
  }

  for (const instType of instrumentTypes) {
    try {
      const openOrders = await rest.getOrderList({ instType });
      openOrderRows += openOrders.length;
    } catch (error) {
      console.error(`Failed to refresh ${instType} orders:`, error);
    }
  }

  try {
    const fills = await rest.getFills({ limit: '100' });
    recentFillRows = fills.length;
  } catch (error) {
    console.error('Failed to refresh fills:', error);
  }

  console.log('Account state refreshed:', {
    balanceRows,
    positionRows,
    openOrderRows,
    recentFillRows,
  });
}

ws.on('reconnect', ({ wsKey }) => {
  console.log('Pausing stream-dependent work:', wsKey);
});

ws.on('reconnected', ({ wsKey }) => {
  console.log('Reconnected, refreshing private state:', wsKey);
  refreshAccountState();
});

ws.on('update', (event) => {
  console.log(event.arg.channel, event.data);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

ws.subscribe([
  { channel: 'account' },
  { channel: 'positions', instType: 'ANY' },
  { channel: 'orders', instType: 'ANY' },
]);
```

A production application should replace the `console.log()` summary with one atomic state update and resume stream-dependent work only after the refresh succeeds. This is [REST Hydration](https://siebly.io/reference/glossary#rest-hydration) applied after a connection gap.

For more detail on deciding which state needs repair, see [Scoped Recovery](https://siebly.io/reference/glossary#scoped-recovery), [Exchange State](https://siebly.io/reference/exchange-state), and [Runtime Workflows](https://siebly.io/reference/runtime-workflows).

---

<!-- siebly:section id="websocket-api" -->

## WebSocket API

The OKX WebSocket API sends order-management commands over an authenticated socket. `WebsocketAPIClient` handles connection setup, authentication, request IDs, response matching, and promise resolution.

The main methods are:

| SDK method                 | Operation                              |
| -------------------------- | -------------------------------------- |
| `submitNewOrder()`         | Place one order                        |
| `submitMultipleOrders()`   | Place a batch                          |
| `amendOrder()`             | Amend one order                        |
| `amendMultipleOrders()`    | Amend a batch                          |
| `cancelOrder()`            | Cancel one order                       |
| `cancelMultipleOrders()`   | Cancel a batch                         |
| `massCancelOrders()`       | Cancel orders for an instrument family |
| `submitSpreadOrder()`      | Place one spread order                 |
| `amendSpreadOrder()`       | Amend one spread order                 |
| `cancelSpreadOrder()`      | Cancel one spread order                |
| `massCancelSpreadOrders()` | Cancel spread orders                   |

Standard order commands use the private WebSocket. Spread commands use the business WebSocket. The wrapper selects the connection for each method.

`connectWSAPI()` is optional. Calling it during startup prepares and authenticates the required connection before the first command. The first command can also open the connection automatically.

### Check acknowledgements at both levels

Every response has a top-level `code`, `msg`, and `data` array. Each item in `data` has its own `sCode` and `sMsg`.

Use both checks:

```typescript
type OkxCommandItem = {
  sCode: string;
  sMsg: string;
  ordId?: string;
  clOrdId?: string;
};

function assertOkxCommandAccepted(response: {
  code: string;
  msg: string;
  data: OkxCommandItem[];
}) {
  if (response.code !== '0') {
    throw new Error(response.msg || `OKX command failed: ${response.code}`);
  }

  const failedItems = response.data.filter((item) => item.sCode !== '0');

  if (failedItems.length > 0) {
    throw new Error(
      failedItems
        .map((item) => `${item.clOrdId || item.ordId}: ${item.sMsg}`)
        .join('; '),
    );
  }
}
```

Batch commands can contain a mix of successful and failed items. Do not treat a top-level success as proof that every order was accepted.

For current WebSocket order placement, prefer an `instIdCode` obtained from `getInstruments()`. Identify amend and cancel commands with `ordId` or `clOrdId` as required by the current OKX operation.

An accepted WebSocket API command is still not final order state. Watch the private `orders` channel, then use REST API when an update is missing or the connection has a gap.

`WebsocketClient.sendWSAPIRequest()` is available for lower-level operation calls. Use `WebsocketAPIClient` for the typed convenience methods unless the wrapper does not yet expose the operation you need.

See the repository examples for both approaches:

- [Promise-based WebSocket API client](../examples/Websocket/WS-API/ws-api-client.ts)
- [Lower-level WebSocket API requests](../examples/Websocket/WS-API/ws-api-trade-raw.ts)

---

<!-- siebly:section id="demo-trading" -->

## Demo trading

OKX demo trading uses simulated accounts and separate demo API keys. It is the right place to test authentication, request fields, permissions, order acknowledgements, private streams, and reconciliation before a live order.

Set the same option on whichever client the workflow uses:

```typescript
import { RestClient, WebsocketAPIClient, WebsocketClient } from 'okx-api';

const credentials = {
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
};

const rest = new RestClient({
  ...credentials,
  demoTrading: true,
});

const streams = new WebsocketClient({
  accounts: [credentials],
  demoTrading: true,
});

const wsApi = new WebsocketAPIClient({
  accounts: [credentials],
  demoTrading: true,
});
```

For a complete copy-pastable order flow with credential checks and an explicit opt-in, use the [demo REST API example](#5-first-rest-api-order-in-demo-trading) or [demo WebSocket API example](#6-first-websocket-api-order-command) above.

With `demoTrading: true`, `RestClient` adds the required simulated-trading header. The WebSocket clients select the demo public, private, and business hosts. Do not use `market: 'demo'`.

Demo trading does not support every funding or account action. Keep demo and live credentials in separate secret-store entries, and do not treat demo liquidity or fills as representative of live trading.

Regional routing and demo trading can be combined. Set both `market` and `demoTrading: true` on each client. See [Demo Trading](https://siebly.io/reference/glossary#demo-trading) for the terminology used across Siebly guides.

---

<!-- siebly:section id="regional-api-routing" -->

## Regional API routing

Use the API group associated with the domain where the OKX account was registered. The SDK applies that choice to REST API, public WebSocket, private WebSocket, business WebSocket, and WebSocket API connections.

| Account API group             | SDK `market`                       | REST API host     | WebSocket host family |
| ----------------------------- | ---------------------------------- | ----------------- | --------------------- |
| Global compatibility default  | Omit it, or use `prod` or `GLOBAL` | `www.okx.com`     | `ws.okx.com`          |
| Global OpenAPI host           | `OPENAPI_GLOBAL`                   | `openapi.okx.com` | `ws.okx.com`          |
| EEA account from `my.okx.com` | `EEA`                              | `eea.okx.com`     | `wseea.okx.com`       |
| Account from `app.okx.com`    | `US`                               | `us.okx.com`      | `wsus.okx.com`        |

`OPENAPI_GLOBAL` changes the REST API host but uses the same WebSocket hosts as `GLOBAL`.

Pass the same `market` to every client used by one account:

<!-- siebly:snippet id="regional-routing" -->

```typescript
import { RestClient, WebsocketAPIClient, WebsocketClient } from 'okx-api';

const market = 'EEA' as const;
const credentials = {
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
};

const rest = new RestClient({
  ...credentials,
  market,
});

const streams = new WebsocketClient({
  accounts: [credentials],
  market,
});

const wsApi = new WebsocketAPIClient({
  accounts: [credentials],
  market,
});
const wsApiConnection = wsApi.getWSClient();

async function main() {
  try {
    const time = await rest.getSystemTime({});
    console.log('REST API connected:', time[0]?.ts);
  } catch (error) {
    console.error('REST API connection failed:', error);
  }

  streams.subscribe({
    channel: 'account',
  });

  try {
    await wsApi.connectWSAPI();
    console.log('WebSocket API connected');
  } catch (error) {
    console.error('WebSocket API connection failed:', error);
    shutdown();
  }
}

function shutdown() {
  streams.closeAll();
  wsApiConnection.closeAll();
}

process.once('SIGINT', shutdown);

main();
```

Change `market` to the API group for the account. Product and endpoint availability can differ by region, so use the corresponding [Global](https://www.okx.com/docs-v5/en/), [EEA](https://my.okx.com/docs-v5/en/), or [US](https://app.okx.com/docs-v5/en/) OKX documentation.

`baseUrl` and `wsUrl` are custom overrides. Use `market` for the supported regional groups so REST API and every WebSocket connection remain aligned.

A proxy does not change an account's API group. Regional routing selects the OKX hosts; a proxy only changes the network path used to reach them.

---

<!-- siebly:section id="proxies" -->

## Proxies for REST API and WebSocket

Proxies are useful when a deployment needs a stable egress IP, must pass through an approved corporate network, or uses controlled network failover. They do not replace OKX regional routing or account eligibility checks.

The broader [Using proxy with Siebly SDKs](https://siebly.io/blog/using-proxy-with-siebly-sdks) article covers the shared constructor pattern. The examples below use the current `okx-api` options directly.

### HTTP or HTTPS proxy

Install the agent:

```bash
npm install okx-api https-proxy-agent
```

Set `OKX_PROXY_URL` to the full proxy URL, including credentials when required.

This public check sends both REST API and WebSocket traffic through the same proxy:

<!-- siebly:snippet id="http-proxy" -->

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { RestClient, WebsocketClient } from 'okx-api';

const proxyUrl = process.env.OKX_PROXY_URL;

if (!proxyUrl) {
  throw new Error('Set OKX_PROXY_URL before running this example.');
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

const proxyAgent = new HttpsProxyAgent(proxyUrl);
const market = 'OPENAPI_GLOBAL' as const;

const rest = new RestClient(
  { market },
  {
    httpsAgent: proxyAgent,
    proxy: false,
  },
);

const ws = new WebsocketClient({
  market,
  wsOptions: {
    agent: proxyAgent,
  },
});

ws.on('open', ({ wsKey }) => {
  console.log('WebSocket connected through proxy:', wsKey);
});

ws.on('update', (event) => {
  console.log(event.arg.channel, event.data);
});

ws.on('exception', (error) => {
  console.error('WebSocket proxy error:', errorMessage(error));
});

async function main() {
  try {
    const time = await rest.getSystemTime({});
    console.log('REST API connected through proxy:', time[0]?.ts);
  } catch (error) {
    console.error('REST API proxy request failed:', errorMessage(error));
  }

  ws.subscribe({
    channel: 'tickers',
    instId: 'BTC-USDT',
  });
}

process.once('SIGINT', () => {
  ws.closeAll();
});

main();
```

REST API networking options belong in the second `RestClient` argument:

- `httpsAgent` carries HTTPS requests through the proxy agent.
- `proxy: false` prevents Axios from applying another proxy configuration on top of that agent.

WebSocket networking options belong in `wsOptions.agent`. The same setting works for public streams, private streams, business streams, and `WebsocketAPIClient`.

OKX authenticates private WebSockets over the socket. Unlike exchanges that fetch a listen key or WebSocket token through REST API first, OKX does not need a second REST API proxy setting inside its WebSocket client.

### Private streams and WebSocket API through a proxy

Use the same agent with credentials:

<!-- siebly:snippet id="private-proxy" -->

```typescript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { WebsocketAPIClient, WebsocketClient } from 'okx-api';

const proxyUrl = process.env.OKX_PROXY_URL;

if (!proxyUrl) {
  throw new Error('Set OKX_PROXY_URL before running this example.');
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

const credentials = {
  apiKey: process.env.OKX_API_KEY!,
  apiSecret: process.env.OKX_API_SECRET!,
  apiPass: process.env.OKX_API_PASSPHRASE!,
};
const proxyAgent = new HttpsProxyAgent(proxyUrl);
const market = 'OPENAPI_GLOBAL' as const;

const streams = new WebsocketClient({
  accounts: [credentials],
  market,
  wsOptions: {
    agent: proxyAgent,
  },
});

const wsApi = new WebsocketAPIClient({
  accounts: [credentials],
  market,
  attachEventListeners: false,
  wsOptions: {
    agent: proxyAgent,
  },
});
const wsApiConnection = wsApi.getWSClient();

streams.on('authenticated', ({ wsKey }) => {
  console.log('Private stream authenticated:', wsKey);
});
streams.on('exception', (error) => {
  console.error('Private stream error:', errorMessage(error));
});
wsApiConnection.on('authenticated', ({ wsKey }) => {
  console.log('WebSocket API authenticated:', wsKey);
});
wsApiConnection.on('exception', (error) => {
  console.error('WebSocket API error:', errorMessage(error));
});

async function main() {
  streams.subscribe([
    { channel: 'account' },
    { channel: 'orders', instType: 'ANY' },
  ]);

  try {
    await wsApi.connectWSAPI();
    console.log('Private connections are ready');
  } catch (error) {
    console.error('WebSocket API connection failed:', errorMessage(error));
    streams.closeAll();
    wsApiConnection.closeAll();
  }
}

process.once('SIGINT', () => {
  streams.closeAll();
  wsApiConnection.closeAll();
});

main();
```

This validates private authentication without placing an order. Add `demoTrading: true` to both clients when testing with demo keys.

### SOCKS5 proxy

Install the SOCKS agent:

```bash
npm install okx-api socks-proxy-agent
```

Use `SocksProxyAgent` in the same REST API and WebSocket positions:

<!-- siebly:snippet id="socks-proxy" -->

```typescript
import { RestClient, WebsocketClient } from 'okx-api';
import { SocksProxyAgent } from 'socks-proxy-agent';

const proxyUrl = process.env.OKX_SOCKS_PROXY_URL;

if (!proxyUrl) {
  throw new Error('Set OKX_SOCKS_PROXY_URL before running this example.');
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

const proxyAgent = new SocksProxyAgent(proxyUrl);

const rest = new RestClient(
  {},
  {
    httpsAgent: proxyAgent,
    proxy: false,
  },
);

const ws = new WebsocketClient({
  wsOptions: {
    agent: proxyAgent,
  },
});

async function main() {
  try {
    const time = await rest.getSystemTime({});
    console.log('REST API connected through SOCKS5:', time[0]?.ts);
  } catch (error) {
    console.error('SOCKS5 REST API request failed:', errorMessage(error));
  }

  ws.subscribe({
    channel: 'tickers',
    instId: 'BTC-USDT',
  });
}

process.once('SIGINT', () => {
  ws.closeAll();
});

main();
```

### Proxy checks

- Keep proxy URLs and credentials in environment variables or a secret manager.
- URL-encode usernames and passwords when constructing a proxy URL from separate values.
- Make sure the proxy egress IP matches the API key's OKX IP whitelist.
- Test a public REST API call and public WebSocket subscription before private authentication.
- Measure request, connection, and reconnect latency through the proxy.
- Treat repeated HTTP 407 responses, TLS errors, and WebSocket reconnect loops as network failures.
- Keep the host clock synchronized. Extra network latency does not change how OKX signatures are calculated.
- Do not add a generic `recvWindow` setting. `okx-api` does not expose one.
- The SDK does not rotate proxy endpoints. Handle endpoint selection outside the client when rotation is required.

---

<!-- siebly:section id="production-notes" -->

## Production notes

Before an OKX integration trades unattended:

1. Roll out in stages: public REST API, private read-only REST API, public streams, private streams, demo writes, then small controlled live tests.
2. Use a unique `clOrdId` on every application-owned order.
3. Check REST API item-level `sCode` values and WebSocket API top-level plus item-level codes.
4. Treat command acceptance as pending until a private stream or REST API query confirms the resulting order state.
5. Reconcile balances, positions, pending orders, recent history, and fills after a private stream gap.
6. Keep the system clock synchronized. OKX rejects stale signed requests.
7. Respect IP, user, instrument, and connection rate limits from the relevant OKX endpoint documentation.
8. Keep `market`, account mode, position mode, `tdMode`, `instType`, and `instId` in structured logs.
9. Keep live, demo, and regional credentials separate.
10. Keep credentials out of frontend code, exceptions, and logs.
11. Monitor proxy availability, latency, and egress IP when a proxy is enabled.
12. Unsubscribe or call `closeAll()` during a controlled shutdown.

The SDK restores WebSocket connections and cached subscriptions. Your application must still recover state, reconcile orders, and decide when writes can resume after a gap.

---

<!-- siebly:section id="faq" -->

## FAQ

### Do public OKX API calls need keys?

Most public REST API endpoints and public WebSocket channels do not. Private account methods, private channels, WebSocket API commands, and a small number of high-depth public channels require credentials.

### What is `apiPass`?

It is the passphrase chosen when the OKX API key was created. It is not the account login password.

### Which SDK client should I use?

Use `RestClient` for request/response calls and broad endpoint coverage, `WebsocketClient` for live channel updates, and `WebsocketAPIClient` for supported promise-based commands over WebSocket. Many applications use all three.

### Why do REST API methods return arrays?

The SDK returns the parsed OKX `data` value after a successful call. OKX commonly puts result rows in a `data` array, including endpoints that normally return one row.

### What is the difference between `SPOT`, `MARGIN`, `SWAP`, `FUTURES`, and `OPTION`?

They are OKX instrument types. Spot and Margin use cash-market instrument IDs, Swap identifies perpetual contracts, Futures identifies dated contracts, and Option identifies option contracts. Query `getInstruments()` for current product details.

### What is the difference between `instType`, `instId`, and `instFamily`?

`instType` is a product family, `instId` is one exact instrument, and `instFamily` groups related derivatives. The method's TypeScript request type shows which one it needs.

### Why did an order fail under the current account mode?

Valid `tdMode`, `posSide`, leverage, and margin fields depend on account mode and position mode. Read `getAccountConfiguration()`, then build requests for that configuration instead of copying fields from another account.

### Is OKX demo trading the same as testnet?

No. The SDK uses OKX demo trading with separate demo API keys and `demoTrading: true`. Do not use testnet flags from another exchange SDK.

### Why should I check both `code` and `sCode`?

WebSocket API responses have a top-level command result and item-level results. REST API order methods return the parsed items, whose `sCode` values can report individual failures. Batch requests can have mixed outcomes.

### Why did a candle subscription open a business WebSocket?

OKX routes candle channels through its business WebSocket. `WebsocketClient` detects the channel and selects that connection automatically.

### Which regional `market` value should I use?

Use the group associated with the account's registration domain: the Global default or `OPENAPI_GLOBAL`, `EEA` for `my.okx.com`, and `US` for `app.okx.com`.

### Can regional routing and demo trading be combined?

Yes. Pass both the regional `market` and `demoTrading: true` to every client in the workflow, using demo keys for that account region.

### How do I proxy REST API calls?

Pass an Axios-compatible proxy agent as `httpsAgent` in the second `RestClient` argument. When using an agent, set `proxy: false`.

### How do I proxy WebSocket streams and WebSocket API commands?

Pass the agent as `wsOptions.agent` to `WebsocketClient` or `WebsocketAPIClient`.

### Does a proxy change request signing?

No. The SDK signs private requests locally before sending them. A proxy changes the network route, so latency and egress IP still need monitoring.

### Can I use `okx-api` from plain JavaScript?

Yes. The package supports ESM imports and CommonJS `require()`. Remove TypeScript annotations when using JavaScript:

```javascript
const { RestClient } = require('okx-api');

const client = new RestClient();
client.getTicker({ instId: 'BTC-USDT' }).then(console.log);
```

---

<!-- siebly:section id="next-steps" -->

## Next steps

- [OKX JavaScript SDK by Siebly](https://siebly.io/sdk/okx/javascript)
- [`okx-api` on npm](https://www.npmjs.com/package/okx-api)
- [OKX SDK source on GitHub](https://github.com/tiagosiebler/okx-api)
- [OKX SDK examples on Siebly](https://siebly.io/examples/OKX)
- [OKX SDK endpoint map](./endpointFunctionList.md)
- [OKX Global API documentation](https://www.okx.com/docs-v5/en/)
- [OKX EEA API documentation](https://my.okx.com/docs-v5/en/)
- [OKX US API documentation](https://app.okx.com/docs-v5/en/)
- [Siebly trading-system glossary](https://siebly.io/reference/glossary)
- [Siebly Exchange State reference](https://siebly.io/reference/exchange-state)
- [Siebly Runtime Workflows reference](https://siebly.io/reference/runtime-workflows)
