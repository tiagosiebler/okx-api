// If you cloned the repo and are using typescript, you can import from src directly:
import {
  DefaultLogger,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// or use the module installed via `npm install okx-api`:
// import { WebsocketClient, DefaultLogger } from 'okx-api';

// or if you're not using typescript (e.g. pure nodejs), change the "import" to "require":
// const { WebsocketClient, DefaultLogger } = require('okx-api');

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

  const wsClient = new WebsocketClient(
    {
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

  wsClient.on('update', (data) => {
    console.log('WS raw message received ', data);
    // console.log('WS raw message received ', JSON.stringify(data, null, 2));
  });

  wsClient.on('open', (data) => {
    console.log('WS connection opened:', data.wsKey);
  });
  wsClient.on('response', (data) => {
    console.log('WS response: ', JSON.stringify(data, null, 2));
  });
  wsClient.on('reconnect', ({ wsKey }) => {
    console.log('WS automatically reconnecting.... ', wsKey);
  });
  wsClient.on('reconnected', (data) => {
    console.log('WS reconnected ', data?.wsKey);
  });
  wsClient.on('exception', (data) => {
    console.log('WS error', data);
  });

  // prodPrivate is for the www.okx.com /ws/v5/private channel
  const OKX_GLOBAL_PRIVATE_CHANNEL = WS_KEY_MAP.prodPrivate;

  // prodBusiness is for the www.okx.com /ws/v5/business channel
  // const OKX_GLOBAL_BUSINESS_CHANNEL = WS_KEY_MAP.prodBusiness;

  /**
   * OKX's WebSocket API can be used via the sendWSAPIRequest() method.
   *
   * The correct WS Key depends on where you registered (www.okx.com vs app.okx.com vs my.okx.com), and whether you are using book trading (uses private connection) or spread trading (uses business connection) functionality.
   *
   * Note: for a better user experience, it is recommended to use the WebsocketAPIClient.
   */

  /**
   * Place Order
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
   */
  try {
    const res = await wsClient.sendWSAPIRequest(
      OKX_GLOBAL_PRIVATE_CHANNEL,
      'order',
      {
        instId: 'BTC-USDT',
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '100',
      },
    );

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

    console.log(new Date(), 'WS API "order" result: ', res);
  } catch (e) {
    console.error(new Date(), 'Exception with WS API "place-order": ', e);
  }

  /**
   * Cancel Order
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-cancel-order
   */
  try {
    const res = await wsClient.sendWSAPIRequest(
      OKX_GLOBAL_PRIVATE_CHANNEL,
      'cancel-order',
      {
        instId: 'BTC-USDT',
        ordId: '2510789768709120',
      },
    );

    /**
      const res = {
        id: '2',
        op: 'cancel-order',
        code: '1',
        msg: '',
        data: [
          {
            ts: '1753714393003',
            ordId: '2510789768709120',
            clOrdId: '',
            sCode: '51400',
            sMsg: 'Order cancellation failed as the order has been filled, canceled or does not exist.'
          }
        ],
        inTime: '1753714393003190',
        outTime: '1753714393004074',
        wsKey: 'prodPrivate',
        isWSAPIResponse: false
      }
     */

    console.log(new Date(), 'WS API "cancel-order" result: ', res);
  } catch (e) {
    console.error(new Date(), 'Exception with WS API "place-order": ', e);
  }

  console.log(new Date(), 'Reached end of example.');
})();
