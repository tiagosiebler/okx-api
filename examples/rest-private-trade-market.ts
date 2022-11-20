import { RestClient, OrderRequest } from '../src/index';

// or
// import { RestClient, OrderRequest } from 'okx-api';

// read from environmental variables
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASS = process.env.API_PASSPHRASE_COM;

/**
 * Execute this script using ts-node. The above environmental variables can be passed in one command (unix & macOS):
 *
 * API_KEY_COM="yourapikey" API_SECRET_COM="yourapisecret" API_PASSPHRASE_COM="yourapipassphrase" ts-node examples/rest-private-trade-market.ts
 *
 * If you don't have ts-node, install it using npm: https://github.com/TypeStrong/ts-node#installation
 */

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

/** Get available balance for an asset */
async function getAssetBalance(
  client: RestClient,
  coin: string
): Promise<number | null> {
  const allBalances = await client.getBalance();
  const usdtBalanceResult = allBalances[0].details.find(
    (bal) => bal.ccy === coin
  );

  const usdtBalance = Number(usdtBalanceResult?.availBal);
  if (!usdtBalanceResult || !usdtBalance || isNaN(usdtBalance)) {
    return null;
  }

  return usdtBalance;
}

/**
 * This is a simple REST API demo script wrapped in a immediately invoked function expression. The logic below will immediately execute if you run this script.
 *
 * It is designed to:
 * - check for any available USDT balance
 * - immediately use half the balance to buy bitcoin (in spot)
 * - check the available BTC balance
 * - immediately sell all available BTC back to USDT
 */
(async () => {
  try {
    const usdtBalance = await getAssetBalance(client, 'USDT');
    if (!usdtBalance) {
      console.error('No USDT to trade');
      return;
    }

    console.log(`USDT available: ${usdtBalance}`);

    const symbol = 'BTC-USDT';
    const percentBalanceToUse = 50;

    const quantity = usdtBalance * (percentBalanceToUse / 100);
    const buyOrder: OrderRequest = {
      instId: symbol,
      ordType: 'market',
      side: 'buy',
      sz: String(quantity),
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    };

    console.log('submitting buy order:', buyOrder);
    const buyResult = await client.submitOrder(buyOrder);

    console.log('buy order result: ', buyResult, '\n\n');

    const btcBalance = await getAssetBalance(client, 'BTC');
    if (!btcBalance) {
      console.error('No BTC to trade');
      return;
    }

    console.log(`BTC available: ${btcBalance}`);
    const sellOrder: OrderRequest = {
      instId: symbol,
      ordType: 'market',
      side: 'sell',
      sz: String(btcBalance),
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    };

    console.log('submitting sell order:', sellOrder);
    const sellResult = await client.submitOrder(sellOrder);

    console.log('sell order result: ', sellResult, '\n\n');
    const usdtBalanceFinal = await getAssetBalance(client, 'USDT');

    console.log('final balance: ', usdtBalanceFinal);
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
