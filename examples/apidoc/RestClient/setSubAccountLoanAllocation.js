const { RestClient } = require('okx-api');

  // ENDPOINT: /api/v5/account/subaccount/set-loan-allocation
  // METHOD: POST
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/okx-api/blob/master/src/rest-client.ts#L2575

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.setSubAccountLoanAllocation(params)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
