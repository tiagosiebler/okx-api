const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/account/spot-manual-borrow-repay
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L646

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.manualBorrowRepay(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
