const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/account/set-account-level
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L721

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.setAccountMode(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
