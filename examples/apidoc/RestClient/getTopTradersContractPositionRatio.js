const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2264

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getTopTradersContractPositionRatio(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
