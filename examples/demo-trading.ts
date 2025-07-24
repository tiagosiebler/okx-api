import { RestClient, WebsocketClient } from '../src/index';

// or
// import { RestClient} from 'okx-api';

// read from environmental variables, your demo trading keys
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASS = process.env.API_PASSPHRASE_COM;

if (!API_KEY || !API_SECRET || !API_PASS) {
  throw new Error(
    'Missing api credentials. Use environmental variables or hard code in the script',
  );
}

const demoRestClient = new RestClient({
  // okx api credentials
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiPass: API_PASS,
  // the environment to connect to
  market: 'demo',
});

const demoWsClient = new WebsocketClient({
  market: 'demo',
  accounts: [
    {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      apiPass: API_PASS,
    },
  ],
});

// Raw data will arrive on the 'update' event
demoWsClient.on('update', (data) => {
  // console.log('ws update (raw data received)', JSON.stringify(data, null, 2));
  console.log('ws update (raw data received)', JSON.stringify(data));
});

demoWsClient.on('open', (data) => {
  console.log('connection opened open:', data.wsKey);
});

// Replies (e.g. authenticating or subscribing to channels) will arrive on the 'response' event
demoWsClient.on('response', (data) => {
  // console.log('ws response: ', JSON.stringify(data, null, 2));
  console.log('ws response: ', JSON.stringify(data));
});

demoWsClient.on('reconnect', ({ wsKey }) => {
  console.log('ws automatically reconnecting.... ', wsKey);
});
demoWsClient.on('reconnected', (data) => {
  console.log('ws has reconnected ', data?.wsKey);
});
demoWsClient.on('error', (data) => {
  console.error('ws exception: ', data);
});

// Subscribe to demo account events:
demoWsClient.subscribe([
  {
    channel: 'account',
  },
  {
    channel: 'positions',
    instType: 'ANY',
  },
]);

(async () => {
  try {
    const balResponse1 = await demoRestClient.getBalance({
      ccy: 'USDT',
    });
    console.log('balResponse1: ', JSON.stringify(balResponse1, null, 2));

    /** Simple examples for private REST API calls with bybit's V5 REST APIs */
    const response = await demoRestClient.getPositions({
      instType: 'SPOT',
    });

    console.log('response:', response);

    // Trade USDT linear perps
    const buyOrderResult = await demoRestClient.submitOrder({
      instId: 'BTC-USDT',
      ordType: 'market',
      side: 'buy',
      sz: '0.002',
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    });
    console.log('buyOrderResult:', buyOrderResult);

    const sellOrderResult = await demoRestClient.submitOrder({
      instId: 'BTC-USDT',
      ordType: 'market',
      side: 'sell',
      sz: '0.002',
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    });
    console.log('sellOrderResult:', sellOrderResult);

    const balResponse2 = await demoRestClient.getBalance({
      ccy: 'USDT',
    });
    console.log('balResponse2: ', JSON.stringify(balResponse2, null, 2));
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
