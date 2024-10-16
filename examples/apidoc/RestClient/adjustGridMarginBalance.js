const { RestClient } = require('okx-api');

  // This example shows how to call this OKX API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "okx-api" for OKX exchange
  // This OKX API SDK is available on npm via "npm install okx-api"
  // ENDPOINT: /api/v5/tradingBot/grid/margin-balance
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1103

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.adjustGridMarginBalance(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
