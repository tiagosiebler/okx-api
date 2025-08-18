// If you cloned the repo and are using typescript, you can import from src directly:
import { WebsocketClient } from '../src';

/**
 *
 * This simple example demonstrates one way to handle failed authentication, stopping the
 * websocket client from running into a reconnect-loop when authentication fails (e.g. bad API keys).
 *
 * However, keep in mind it might be safer to make a test REST API call (e.g. fetch account balance) before
 * trying to make a private WS connection to the account.
 *
 */

const wsClient = new WebsocketClient({
  accounts: [
    // For private topics, include one or more accounts in an array. Otherwise only public topics will work
    {
      apiKey: 'INCORRECT_API_KEY',
      apiSecret: 'INCORRECT_API_SECRET',
      apiPass: 'INCORRECT_API_PASSPHRASE',
    },
  ],
});

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

wsClient.on('exception', (data) => {
  console.error('ws exception: ', data);

  const INVALID_API_KEY_ERROR = '60005';
  if (data.event === 'error' && data.code === INVALID_API_KEY_ERROR) {
    console.error('Detected auth failure - closing websocket');
    wsClient.close(data.wsKey);
  }
});

// Optional, connect before subscribing:
wsClient.connectPrivate();

// This is optional though. The wsclient will automatically open and subscribe if the connection doesn't exist yet.

// Subscribe one event at a time:
wsClient.subscribe({
  channel: 'account',
});
