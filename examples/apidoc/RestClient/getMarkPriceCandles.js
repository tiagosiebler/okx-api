const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/market/mark-price-candles
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2137

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getMarkPriceCandles(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
