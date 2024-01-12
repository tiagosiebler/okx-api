import { RestClient } from '../src/index';

// or
// import { RestClient } from 'okx-api';

const client = new RestClient();

/**
 * This is a simple script wrapped in a immediately invoked function expression, designed to make public API calls without credentials
 */
(async () => {
  try {
    const results = await client.getInstruments('SPOT');

    console.log(
      'result: ',
      results.filter((row) => row.baseCcy === 'SUI')
    );

    return;
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
