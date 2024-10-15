const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/asset/cancel-withdrawal
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2426

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.cancelWithdrawal(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
