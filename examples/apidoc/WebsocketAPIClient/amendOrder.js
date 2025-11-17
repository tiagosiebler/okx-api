const { WebsocketAPIClient } = require('okx-api');

// This example shows how to call this OKX WebSocket API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "okx-api" for OKX exchange
// This OKX API SDK is available on npm via "npm install okx-api"
// WS API ENDPOINT: amend-order
// METHOD: WebSocket API
// PUBLIC: NO

// Create a WebSocket API client instance
const client = new WebsocketAPIClient({
    apiKey: 'apiKeyHere',
    apiSecret: 'apiSecretHere',
    apiPass: 'apiPassHere',
});

// The WebSocket connection is established automatically when needed
// You can use the client to make requests immediately

// Example use of the amendOrder method
client.amendOrder(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

