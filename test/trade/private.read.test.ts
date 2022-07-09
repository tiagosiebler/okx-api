import { RestClient } from '../../src';
import { errorResponseObject, successResponseList } from '../response.util';

describe('Private REST API Trade Endpoints (GET only)', () => {
  const API_KEY = process.env.API_KEY_COM;
  const API_SECRET = process.env.API_SECRET_COM;
  const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

  const api = new RestClient(
    {
      apiKey: API_KEY!,
      apiSecret: API_SECRET!,
      apiPassphrase: API_PASSPHRASE!,
    },
    'live'
  );

  const instrumentId = 'BTC-USDT';

  it('should have api credentials to use', () => {
    expect(API_KEY).toStrictEqual(expect.any(String));
    expect(API_SECRET).toStrictEqual(expect.any(String));
    expect(API_PASSPHRASE).toStrictEqual(expect.any(String));
  });

  it('getOrderDetails()', () => {
    expect(
      api.getOrderDetails({
        instId: instrumentId,
        clOrdId: '2510789768709120',
      })
    ).rejects.toMatchObject(
      errorResponseObject('51603', [], 'Order does not exist')
    );
  });

  it('getOrderList()', () => {
    expect(api.getOrderList()).resolves.toMatchObject(successResponseList());
  });

  it('getOrderHistory()', () => {
    expect(api.getOrderHistory({ instType: 'SPOT' })).resolves.toMatchObject(
      successResponseList()
    );
  });

  it('getOrderHistoryArchive()', () => {
    expect(
      api.getOrderHistoryArchive({ instType: 'SPOT' })
    ).resolves.toMatchObject(successResponseList());
  });

  it('getFills()', () => {
    expect(api.getFills()).resolves.toMatchObject(successResponseList());
  });

  it('getFillsHistory()', () => {
    expect(api.getFillsHistory({ instType: 'SPOT' })).resolves.toMatchObject(
      successResponseList()
    );
  });

  it('getAlgoOrderList()', () => {
    expect(api.getAlgoOrderList({ ordType: 'twap' })).resolves.toMatchObject(
      successResponseList()
    );
  });

  it('getAlgoOrderHistory()', () => {
    expect(
      api.getAlgoOrderHistory({ ordType: 'twap', state: 'effective' })
    ).resolves.toMatchObject(successResponseList());
  });
});
