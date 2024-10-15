const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/market/platform-24-volume
  // METHOD: GET
  // PUBLIC: YES
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1747

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.get24hrTotalVolume(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
