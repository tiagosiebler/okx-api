import { RestClient, WebsocketClient } from '../src/index';

// or
// import { RestClient } from 'okx-api';

const client = new RestClient({
  /**
   * To use "my.okx.com", set market to "EEA"
   *
   * Note: your available functionality may differ, refer to the corresponding API docs for more details:
   * https://my.okx.com/docs-v5/en/#overview-production-trading-services
   */
  market: 'EEA',
});

const wsClient = new WebsocketClient({
  market: 'EEA',
});

async function start() {
  try {
    const results = await client.getInstruments({ instType: 'SPOT' });

    console.log(
      'result: ',
      results.filter((row) => row.baseCcy === 'SUI'),
    );
  } catch (e) {
    console.error('request failed: ', e);
  }

  // Raw data will arrive on the 'update' event
  wsClient.on('update', (data) => {
    // console.log(
    //   new Date(),
    //   'ws update (raw data received)',
    //   JSON.stringify(data, null, 2),
    // );
    // console.log('ws update (raw data received)', JSON.stringify(data, null, 2));
    console.log(
      new Date(),
      'ws update (raw data received)',
      JSON.stringify(data),
    );
  });
  wsClient.on('open', (data) => {
    console.log('ws connection opened open:', data.wsKey);
  });
  wsClient.on('reconnected', (data) => {
    console.log('ws has reconnected ', data?.wsKey);
  });
  wsClient.on('exception', (data) => {
    console.error('ws exception: ', data);
  });
  wsClient.subscribe([
    {
      channel: 'instruments',
      instType: 'SPOT',
    },
    {
      channel: 'tickers',
      instId: 'ETH-BTC',
    },
  ]);
}

start();
