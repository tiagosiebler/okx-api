import { DefaultLogger, WebsocketClient } from '../src';

// or use the module installed via `npm install okx-api`:
// import { WebsocketClient, DefaultLogger } from 'okx-api';

// or if you're not using typescript (e.g. pure nodejs), change the "import" to "require":
// const { WebsocketClient, DefaultLogger } = require('okx-api');

// Optional: Inject a custom logger.
// This example overrides the default logger to also log "silly" (super verbose) messages, which are disabled by default
const logger = {
  ...DefaultLogger,
  silly: (...params) => console.log('silly', ...params),
};

const wsClient = new WebsocketClient(
  {
    // prod is used by default, but you can choose other markets through this parameter:
    // market: 'prod',
    // market: 'aws',
    // market: 'demo',
  },
  logger // Optional: inject the custom logger here
);

// Raw data will arrive on the 'update' event
wsClient.on('update', (data) => {
  console.log(
    new Date(),
    'ws update (raw data received)',
    JSON.stringify(data)
  );
  // console.log('ws update (raw data received)', JSON.stringify(data, null, 2));
});

wsClient.on('open', (data) => {
  console.log('ws connection opened open:', data.wsKey);
});

// Replies (e.g. authenticating or subscribing to channels) will arrive on the 'response' event
wsClient.on('response', (data) => {
  console.log('ws response received: ', JSON.stringify(data, null, 2));
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

// Send one topic at a time
wsClient.subscribe({
  channel: 'instruments',
  instType: 'FUTURES',
});

// Or an array of requests
wsClient.subscribe([
  {
    channel: 'instruments',
    instType: 'SPOT',
  },
  {
    channel: 'tickers',
    instId: 'LTC-BTC',
  },
]);

/**
 *
 * Examples for each channel: https://www.okx.com/docs-v5/en/#websocket-api-public-channel
 *
 */

// Instruments channel
wsClient.subscribe({
  channel: 'instruments',
  instType: 'SPOT',
});

// Tickers channel
wsClient.subscribe({
  channel: 'tickers',
  instId: 'BTC-USDT',
});

// Open interest channel
wsClient.subscribe({
  channel: 'open-interest',
  instId: 'BTC-USD-SWAP',
});

// Candlesticks channel
wsClient.subscribe({
  channel: 'candle1m',
  instId: 'BTC-USDT',
});

// Trades channel
wsClient.subscribe({
  channel: 'trades',
  instId: 'BTC-USDT',
});

// Estimated delivery/exercise price channel
wsClient.subscribe({
  channel: 'estimated-price',
  instType: 'FUTURES',
  instFamily: 'BTC-USD',
});

// Mark price channel
wsClient.subscribe({
  channel: 'mark-price',
  instId: 'BTC-USDT',
});

// Mark price candlesticks channel
wsClient.subscribe({
  channel: 'mark-price-candle1m',
  instId: 'BTC-USDT',
});

// Price limit channel
wsClient.subscribe({
  channel: 'price-limit',
  instId: 'LTC-USD-190628',
});

// Order book channel
wsClient.subscribe({
  channel: 'books',
  instId: 'BTC-USDT',
});

// OPTION summary channel
wsClient.subscribe({
  channel: 'opt-summary',
  instFamily: 'BTC-USD',
});

// Funding rate channel
wsClient.subscribe({
  channel: 'funding-rate',
  instId: 'BTC-USD-SWAP',
});

// Index candlesticks channel
wsClient.subscribe({
  channel: 'index-candle1m',
  instId: 'BTC-USD',
});

// Index tickers channel
wsClient.subscribe({
  channel: 'index-tickers',
  instId: 'BTC-USDT',
});

// Status channel
wsClient.subscribe({
  channel: 'status',
});
