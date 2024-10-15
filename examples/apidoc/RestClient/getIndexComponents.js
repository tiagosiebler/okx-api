const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/market/index-components
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2187

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getIndexComponents(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
