import { createHmac } from 'crypto';

import {
  DefaultLogger,
  RestClient,
  WebsocketClient,
} from '../../src/index.js';

// or
// import { createHmac } from 'crypto';
// import { DefaultLogger, RestClient, WebsocketClient } from 'okx-api';

/**
 * Injecting a custom signMessage function.
 *
 * As of version 3.0.0 of the okx-api Node.js/TypeScript/JavaScript
 * SDK for OKX, the SDK uses the Web Crypto API for signing requests.
 * While it is compatible with Node and Browser environments, it is
 * slightly slower than using Node's native crypto module (only
 * available in backend Node environments).
 *
 * For latency sensitive users, you can inject the previous node crypto sign
 * method (or your own even faster implementation), if this change affects you.
 *
 * This example demonstrates how to inject a custom sign function, to achieve
 * the same peformance as seen before the Web Crypto API was introduced.
 *
 * For context on standard usage, the "signMessage" function is used:
 * - During every single API call
 * - After opening a new private WebSocket connection
 */

const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASS = process.env.API_PASS_COM;

// If running from CLI in unix, you can pass env vars as such:
// API_KEY_COM='lkm12n3-2ba3-1mxf-fn13-lkm12n3a' API_SECRET_COM='035B2B9637E1BDFFEE2646BFBDDB8CE4' API_PASSPHRASE_COM='ComplexPa$$!23$5^' ts-node examples/rest-private-trade.ts

// note the single quotes, preventing special characters such as $ from being incorrectly passed

const restClient = new RestClient({
  apiKey: API_KEY,
  // apiKey: 'apiKeyHere',
  apiSecret: API_SECRET,
  // apiSecret: 'apiSecretHere',
  apiPass: API_PASS,
  // apiPass: 'apiPassHere',
  /**
   * Overkill in almost every case, but if you need any optimisation available,
   * you can inject a faster sign mechanism such as node's native createHmac:
   */
  customSignMessageFn: async (message, secret) => {
    return createHmac('sha256', secret).update(message).digest('hex');
  },
});

// Optional, uncomment the "trace" override to log a lot more info about what the WS client is doing
const customLogger = {
  ...DefaultLogger,
  // trace: (...params) => console.log('trace', ...params),
};

const wsClient = new WebsocketClient(
  {
    accounts: [
      // For private topics, include one or more accounts in an array. Otherwise only public topics will work
      {
        apiKey: API_KEY || '',
        apiSecret: API_SECRET || '',
        apiPass: API_PASS || '',
      },
    ],
    /**
     * Overkill in almost every case, but if you need any optimisation available,
     * you can inject a faster sign mechanism such as node's native createHmac:
     */
    customSignMessageFn: async (message, secret) => {
      return createHmac('sha256', secret).update(message).digest('hex');
    },
  },
  customLogger,
);

function setWsClientEventListeners(
  websocketClient: WebsocketClient,
  accountRef: string,
): Promise<void> {
  return new Promise(() => {
    websocketClient.on('update', (data) => {
      console.log(new Date(), accountRef, 'data ', JSON.stringify(data));
      // console.log('raw message received ', JSON.stringify(data, null, 2));
    });

    websocketClient.on('open', (data) => {
      console.log(
        new Date(),
        accountRef,
        'connection opened open:',
        data.wsKey,
      );
    });
    websocketClient.on('response', (data) => {
      console.log(
        new Date(),
        accountRef,
        'log response: ',
        JSON.stringify(data, null, 2),
      );
    });
    websocketClient.on('reconnect', ({ wsKey }) => {
      console.log(
        new Date(),
        accountRef,
        'ws automatically reconnecting.... ',
        wsKey,
      );
    });
    websocketClient.on('reconnected', (data) => {
      console.log(new Date(), accountRef, 'ws has reconnected ', data?.wsKey);
    });
    websocketClient.on('exception', (data) => {
      console.error(new Date(), accountRef, 'ws exception: ', data);
    });
  });
}

(async () => {
  try {
    const onSubscribed = setWsClientEventListeners(wsClient, 'demoAcc');

    wsClient.subscribe({
      channel: 'account',
    });

    // Simple promise to ensure we're subscribed before trying anything else
    await onSubscribed;

    // Start trading
    const balResponse1 = await restClient.getBalances();
    console.log('balResponse1: ', JSON.stringify(balResponse1, null, 2));
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
