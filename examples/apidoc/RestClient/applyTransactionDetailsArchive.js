const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/trade/fills-archive
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L820

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.applyTransactionDetailsArchive(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
