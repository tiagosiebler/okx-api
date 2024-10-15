const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/copytrading/current-subpositions
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1351

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getCopytradingSubpositions(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
