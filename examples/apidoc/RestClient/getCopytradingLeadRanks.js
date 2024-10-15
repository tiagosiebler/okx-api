const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/copytrading/public-lead-traders
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1537

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getCopytradingLeadRanks(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
