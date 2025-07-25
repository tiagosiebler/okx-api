import { RestClient } from '../src/index';

// or
// import { RestClient } from 'okx-api';

const client = new RestClient({
  /**
   * To use "app.okx.com", set market to "US"
   *
   * Note: your available functionality may differ, refer to the corresponding API docs for more details:
   * https://app.okx.com/docs-v5/en/#overview-production-trading-services
   */
  market: 'US',
});

/**
 * This is a simple script wrapped in a immediately invoked function expression, designed to make public API calls without credentials
 */
(async () => {
  try {
    const results = await client.getInstruments({ instType: 'SPOT' });

    console.log(
      'result: ',
      results.filter((row) => row.baseCcy === 'SUI'),
    );

    return;
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
