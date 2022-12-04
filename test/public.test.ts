import { RestClient } from '../src';
import { notAuthenticatedError, successResponseList } from './response.util';

describe('Public Inverse REST API Endpoints', () => {
  const api = new RestClient(null, 'prod');

  const instId = 'BTC-USDT';

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

  it('getTicker()', async () => {
    expect(await api.getTicker(instId)).toMatchObject(successResponseList());
  });

  it('getIndexTickers()', async () => {
    expect(await api.getIndexTickers({ instId })).toMatchObject(
      successResponseList()
    );
  });

  it('getOrderBook()', async () => {
    expect(await api.getOrderBook(instId)).toMatchObject(successResponseList());
  });

  it('getCandles()', async () => {
    expect(await api.getCandles(instId, '1m')).toMatchObject(
      successResponseList()
    );
  });

  it('getHistoricCandles()', async () => {
    expect(await api.getHistoricCandles(instId, '1m')).toMatchObject(
      successResponseList()
    );
  });

  it('getIndexCandles()', async () => {
    expect(await api.getIndexCandles(instId, '1m')).toMatchObject(
      successResponseList()
    );
  });

  it('getMarkPriceCandles()', async () => {
    expect(await api.getMarkPriceCandles(instId, '1m')).toMatchObject(
      successResponseList()
    );
  });

  it('getTrades()', async () => {
    expect(await api.getTrades(instId)).toMatchObject(successResponseList());
  });

  it('getHistoricTrades()', async () => {
    expect(await api.getHistoricTrades(instId)).toMatchObject(
      successResponseList()
    );
  });

  it('get24hrTotalVolume()', async () => {
    expect(await api.get24hrTotalVolume()).toMatchObject(successResponseList());
  });

  it('getOracle()', async () => {
    expect(await api.getOracle()).toMatchObject(successResponseList());
  });

  it('getExchangeRate()', async () => {
    expect(await api.getExchangeRate()).toMatchObject(successResponseList());
  });
});
