const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/rfq/maker-instrument-settings
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L1791

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.updateBlockQuoteProducts(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
