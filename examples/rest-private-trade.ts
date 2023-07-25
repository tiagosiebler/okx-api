import { RestClient } from '../src/index';
import { OrderRequest } from '../src/types/rest';

// or
// import { SpotClient } from 'okx-api';

// read from environmental variables
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASS = process.env.API_PASS_COM;

if (!API_KEY || !API_SECRET || !API_PASS) {
  throw new Error(
    `Missing api credentials. Use environmental variables or hard code in the script`
  );
}

console.log(new Date(), 'Using credentials: ', {
  API_KEY,
  API_SECRET,
  API_PASS,
});

const client = new RestClient({
  apiKey: API_KEY,
  // apiKey: 'apiKeyHere',
  apiSecret: API_SECRET,
  // apiSecret: 'apiSecretHere',
  apiPass: API_PASS,
  // apiPass: 'apiPassHere',
});

// const wsClient = new WebsocketClient({
//   apiKey: API_KEY,
//   apiSecret: API_SECRET,
//   apiPass: API_PASS,
// });

function logWSEvent(type, data) {
  console.log(new Date(), `WS ${type} event: `, data);
}

// simple sleep function
function promiseSleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// WARNING: for sensitive math you should be using a library such as decimal.js!
function roundDown(value, decimals) {
  return Number(
    Math.floor(parseFloat(value + 'e' + decimals)) + 'e-' + decimals
  );
}

/** This is a simple script wrapped in a immediately invoked function expression, designed to check for any available BTC balance and immediately sell the full amount for USDT */
(async () => {
  try {
    // // Add event listeners to log websocket events on account
    // wsClient.on('update', (data) => logWSEvent('update', data));
    // wsClient.on('open', (data) => logWSEvent('open', data));
    // wsClient.on('response', (data) => logWSEvent('response', data));
    // wsClient.on('reconnect', (data) => logWSEvent('reconnect', data));
    // wsClient.on('reconnected', (data) => logWSEvent('reconnected', data));
    // wsClient.on('authenticated', (data) => logWSEvent('authenticated', data));
    // wsClient.on('exception', (data) => logWSEvent('exception', data));

    // // Subscribe to private account topics
    // wsClient.subscribeTopic('SPBL', 'account');
    // wsClient.subscribeTopic('SPBL', 'orders');

    // wait briefly for ws to be ready (could also use the response or authenticated events, to make sure topics are subscribed to before starting)
    await promiseSleep(2.5 * 1000);

    const allBalances = await client.getBalance();
    // const balances = allBalances.filter((bal) => Number(bal.available) != 0);
    const usdtBalanceResult = allBalances[0].details.find(
      (bal) => bal.ccy === 'USDT'
    );
    console.log('BTC balance result: ', usdtBalanceResult);

    const usdtBalance = Number(usdtBalanceResult?.availBal);
    // console.log('balance: ', JSON.stringify(balances, null, 2));

    if (!usdtBalanceResult || !usdtBalance) {
      console.error('No USDT to trade');
      return;
    }

    console.log(`USDT available: ${usdtBalance}`);

    const symbol = 'BTC-USDT';
    const quantity = 0.002;

    const order: OrderRequest = {
      instId: symbol,
      ordType: 'market',
      side: 'buy',
      sz: String(usdtBalance * 0.5),
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    };

    const buyResult = await client.submitOrder(order);

    console.log('result: ', buyResult);
    return;
    // const symbol = 'BTCUSDT_SPBL';

    // const symbolsResult = await client.getSymbols();
    // const btcRules = symbolsResult.data.find((rule) => rule.symbol === symbol);
    // console.log('btc trading rules: ', btcRules);
    // if (!btcRules) {
    //   return console.log('no rules found for trading ' + symbol);
    // }

    // const quantityScale = Number(btcRules.quantityScale);
    // // const quantityRoundedDown = btcAmount - btcAmount % 0.01
    // const quantity = roundDown(btcAmount, quantityScale);

    // const order = {
    //   symbol: symbol,
    //   side: 'sell',
    //   force: 'normal',
    //   orderType: 'market',
    //   quantity: String(quantity),
    // } as const;

    // console.log('submitting order: ', order);

    // const sellResult = await client.submitOrder(order);

    // console.log('sell result: ', sellResult);
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
