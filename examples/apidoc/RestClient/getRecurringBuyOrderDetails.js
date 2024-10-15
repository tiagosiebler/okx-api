const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/tradingBot/recurring/orders-algo-details
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1330

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getRecurringBuyOrderDetails(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
