import { RestClient } from '../src';
import { notAuthenticatedError, successResponseList } from './response.util';

describe('Public Inverse REST API Endpoints', () => {
  const useLivenet = true;
  const api = new RestClient(null, 'live');

  const symbol = 'BTCUSD';
  const interval = '15';
  const timestampOneHourAgo = new Date().getTime() / 1000 - 1000 * 60 * 60;
  const from = Number(timestampOneHourAgo.toFixed(0));

  it('should throw for unauthenticated private calls', async () => {
    expect(() => api.getOrderList()).rejects.toMatchObject(
      notAuthenticatedError()
    );
  });

  it('getServerTime()', async () => {
    expect(await api.getServerTime()).toStrictEqual(expect.any(Number));
  });

  it('getTickers()', async () => {
    expect(await api.getTickers('SPOT')).toMatchObject(successResponseList());
  });
});
