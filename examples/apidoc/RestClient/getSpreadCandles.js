const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/market/sprd-candles
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1960

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getSpreadCandles(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
