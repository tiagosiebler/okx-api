import { DefaultLogger, WebsocketAPIClient } from '../../../src/index.js';

// or use the module installed via `npm install okx-api`:
// import { WebsocketClient, DefaultLogger } from 'okx-api';

// or if you're not using typescript (e.g. pure nodejs), change the "import" to "require":
// const { WebsocketClient, DefaultLogger } = require('okx-api');

// function attachEventHandlers<TWSClient extends WebsocketClient>(
//   wsClient: TWSClient,
// ): void {
//   wsClient.on('update', (data) => {
//     console.log('raw message received ', JSON.stringify(data));
//   });
//   wsClient.on('open', (data) => {
//     console.log('ws connected', data.wsKey);
//   });
//   wsClient.on('reconnect', ({ wsKey }) => {
//     console.log('ws automatically reconnecting.... ', wsKey);
//   });
//   wsClient.on('reconnected', (data) => {
//     console.log('ws has reconnected ', data?.wsKey);
//   });
//   wsClient.on('authenticated', (data) => {
//     console.log('ws has authenticated ', data?.wsKey);
//   });
// }

(async () => {
  const logger = {
    ...DefaultLogger,
    trace: (...params) => console.log('trace', ...params),
  };

  // For private events, all 3 of the following are required (per account):
  const API_KEY = process.env.API_KEY_COM;
  const API_SECRET = process.env.API_SECRET_COM;
  const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

  // If running from CLI in unix, you can pass env vars as such:
  // API_KEY_COM='lkm12n3-2ba3-1mxf-fn13-lkm12n3a' API_SECRET_COM='035B2B9637E1BDFFEE2646BFBDDB8CE4' API_PASSPHRASE_COM='ComplexPa$$!23$5^' ts-node examples/ws-private.ts

  const wsClient = new WebsocketAPIClient(
    {
      // For Global users (www.okx.com), you don't need to set the market.
      // It will use global by default.
      // Not needed: market: 'GLOBAL',

      // For EEA users (my.okx.com), set market to "EEA":
      // market: 'EEA',

      // For US users (app.okx.com), set market to "US":
      // market: 'US',

      accounts: [
        // For private topics, include one or more accounts in an array. Otherwise only public topics will work
        {
          apiKey: API_KEY || '',
          apiSecret: API_SECRET || '',
          apiPass: API_PASSPHRASE || '',
        },
      ],
    },
    logger,
  );

  // Optional, see above "attachEventListeners". Attach basic event handlers, so nothing is left unhandled
  // attachEventHandlers(wsClient.getWSClient());

  // Optional: prepare the WebSocket API connection in advance.
  // This happens automatically but you can do this early before making any API calls, to prevent delays from a cold start.
  // await wsClient.connectWSAPI();

  /**
   * OKX's WebSocket API be used like a REST API, through this SDK's WebsocketAPIClient. The WebsocketAPIClient is a utility class wrapped around WebsocketClient's sendWSAPIRequest() capabilities.
   *
   * Each request sent via the WebsocketAPIClient will automatically:
   * - route via the active WS API connection
   * - return a Promise, which automatically resolves/rejects when a matching response is received
   */

  /**
   * Place Order
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
   */
  try {
    const res = await wsClient.submitNewOrder({
      instId: 'BTC-USDT',
      tdMode: 'cash',
      side: 'buy',
      ordType: 'market',
      sz: '100',
    });
    /**
      const res = {
        id: '2',
        op: 'order',
        code: '1',
        msg: '',
        data: [
          {
            tag: '159881cb7207BCDE',
            ts: '1753714603721',
            ordId: '',
            clOrdId: '',
            sCode: '51008',
            sMsg: 'Order failed. Insufficient USDT balance in account.'
          }
        ],
        inTime: '1753714603720755',
        outTime: '1753714603721942',
        wsKey: 'prodPrivate',
        isWSAPIResponse: false
      }

      const res =  {
        id: '2',
        op: 'order',
        code: '1',
        msg: '',
        data: [
          {
            tag: '159881cb7207BCDE',
            ts: '1753714567149',
            ordId: '',
            clOrdId: '',
            sCode: '51010',
            sMsg: "You can't complete this request under your current account mode."
          }
        ],
        inTime: '1753714567149196',
        outTime: '1753714567149913',
        wsKey: 'prodPrivate',
        isWSAPIResponse: false
      }
     */

    console.log(new Date(), 'WS API "submitNewOrder()" result: ', res);
  } catch (e) {
    console.error(new Date(), 'Exception with WS API "submitNewOrder()": ', e);
  }

  /**
   * Submit multiple orders in a batch
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
   */
  try {
    const res = await wsClient.submitMultipleOrders([
      {
        instId: 'BTC-USDT',
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '100',
      },
      {
        instId: 'BTC-USDT',
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '50',
      },
    ]);
    console.log(new Date(), 'WS API "submitMultipleOrders()" result: ', res);
  } catch (e) {
    console.error(
      new Date(),
      'Exception with WS API "submitMultipleOrders()": ',
      e,
    );
  }

  console.log(new Date(), 'Reached end of example.');
})();
