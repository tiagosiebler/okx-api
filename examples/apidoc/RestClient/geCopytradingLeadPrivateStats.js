const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/copytrading/stats
  // METHOD: GET
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1606

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.geCopytradingLeadPrivateStats(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
