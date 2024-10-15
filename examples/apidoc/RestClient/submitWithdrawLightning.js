const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/asset/withdrawal-lightning
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2414

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.submitWithdrawLightning(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
