// If you cloned the repo and are using typescript, you can import from src directly:
import { DefaultLogger, WebsocketClient } from '../src';

// or use the module installed via `npm install okx-api`:
// import { WebsocketClient, DefaultLogger } from 'okx-api';

// or if you're not using typescript (e.g. pure nodejs), change the "import" to "require":
// const { WebsocketClient, DefaultLogger } = require('okx-api');

// Optional: Inject a custom logger.
// This example overrides the default logger to also log "trace" (super verbose) messages, which are disabled by default
const logger = {
  ...DefaultLogger,
  // trace: (...params) => console.log('trace', ...params),
};

// For private events, all 3 of the following are required (per account):
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

// If running from CLI in unix, you can pass env vars as such:
// API_KEY_COM='lkm12n3-2ba3-1mxf-fn13-lkm12n3a' API_SECRET_COM='035B2B9637E1BDFFEE2646BFBDDB8CE4' API_PASSPHRASE_COM='ComplexPa$$!23$5^' ts-node examples/ws-private.ts

// note the single quotes, preventing special characters such as $ from being incorrectly passed

if (!API_KEY) {
  throw new Error('API_KEY is missing');
}

if (!API_SECRET) {
  throw new Error('API_SECRET is missing');
}

if (!API_PASSPHRASE) {
  throw new Error('API_PASSPHRASE is missing');
}

const wsClient = new WebsocketClient(
  {
    // The market defaults to "prod" for the live environment, but you can also ask to use the aws or demo environments:
    // market: 'prod',
    // market: 'aws',
    // market: 'demo',

    accounts: [
      // For private topics, include one or more accounts in an array. Otherwise only public topics will work
      {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        apiPass: API_PASSPHRASE,
      },
      // {
      //   apiKey: 'yourApiKeyHere',
      //   apiSecret: 'yourApiSecretHere',
      //   apiPass: 'yourApiPassHere',
      // },
      // {
      //   apiKey: 'anotherAccountKey',
      //   apiSecret: 'anotherAccountSecret',
      //   apiPass: 'anotherAccountPass',
      // },
    ],
  },
  logger,
);

// Raw data will arrive on the 'update' event
wsClient.on('update', (data) => {
  // console.log('ws update (raw data received)', JSON.stringify(data, null, 2));
  console.log('ws update (raw data received)', JSON.stringify(data));
});

wsClient.on('open', (data) => {
  console.log('connection opened open:', data.wsKey);
});

// Replies (e.g. authenticating or subscribing to channels) will arrive on the 'response' event
wsClient.on('response', (data) => {
  // console.log('ws response: ', JSON.stringify(data, null, 2));
  console.log('ws response: ', JSON.stringify(data));
});

wsClient.on('reconnect', ({ wsKey }) => {
  console.log('ws automatically reconnecting.... ', wsKey);
});
wsClient.on('reconnected', (data) => {
  console.log('ws has reconnected ', data?.wsKey);
});
wsClient.on('error', (data) => {
  console.error('ws exception: ', data);
});

// Optional, connect before subscribing:
// wsClient.connectPrivate();

// This is optional though. The wsclient will automatically open and subscribe if the connection doesn't exist yet.

/**
   * # Subscribing to channels
   *
   * Subscribe to channels using the inner "args" part of the subscription request described in the OKX API docs.
   *
   * For example, if the docs state your request should look as such:
   {
     op: "subscribe",
     args: [
       {
         channel: "account"
       }
     ]
   }
   *
   * You should call the wsClient.subscribe function using only the "args".
   *
   * Either of these examples is correct (one channel vs one or more channels in an array):
   wsClient.subscribe({
     channel: 'account'
   });

   wsClient.subscribe([
     {
       channel: "account"
     }
   ])
   */

// Subscribe one event at a time:
wsClient.subscribe({
  channel: 'account',
});

// OR, combine multiple subscription events into one request using an array instead of an object:
wsClient.subscribe([
  {
    channel: 'account',
  },
  {
    channel: 'positions',
    instType: 'ANY',
  },
]);

/**
 * Examples for each private channel listed in the API docs:
 * https://www.okx.com/docs-v5/en/#websocket-api-private-channel
 */

// Account events for all symbols
wsClient.subscribe({
  channel: 'account',
});

// Account events for specific symbol only
wsClient.subscribe({
  channel: 'account',
  ccy: 'BTC',
});

// Withdrawal events for specific symbol only
wsClient.subscribe({
  channel: 'withdrawal-info',
  ccy: 'BTC',
});

// Position events on any instrument type
wsClient.subscribe({
  channel: 'positions',
  instType: 'ANY',
});

// Position events on specific instruments
wsClient.subscribe({
  channel: 'positions',
  instType: 'SWAP',
  instFamily: 'ETH-USD',
  instId: 'ETH-USD-SWAP',
});

// Balance & position channel
wsClient.subscribe({
  channel: 'balance_and_position',
});

// Order channel
wsClient.subscribe({
  channel: 'orders',
  instType: 'ANY',
});

// Order channel with extra args
wsClient.subscribe({
  channel: 'orders',
  instType: 'FUTURES',
  instFamily: 'BTC-USD',
});

// Algo orders channel
wsClient.subscribe({
  channel: 'orders-algo',
  instType: 'ANY',
});

// Advance algo orders channel
wsClient.subscribe({
  channel: 'algo-advance',
  instType: 'ANY',
});

// Position risk warning channel
wsClient.subscribe({
  channel: 'liquidation-warning',
  instType: 'ANY',
});

// Account greeks channel
wsClient.subscribe({
  channel: 'account-greeks',
});

// Spot grid algo orders channel
wsClient.subscribe({
  channel: 'grid-orders-spot',
  instType: 'SPOT',
});

// Contract grid orders channel
wsClient.subscribe({
  channel: 'grid-orders-contract',
  instType: 'ANY',
});

// Moon grid orders channel
wsClient.subscribe({
  channel: 'grid-orders-moon',
  instType: 'ANY',
});

// Moon grid orders channel
wsClient.subscribe({
  channel: 'grid-orders-moon',
  instType: 'ANY',
});

// Grid positions channel
wsClient.subscribe({
  channel: 'grid-positions',
  algoId: '449327675342323712',
});

// Grid sub orders channel
wsClient.subscribe({
  channel: 'grid-sub-orders',
  algoId: '449327675342323712',
});
