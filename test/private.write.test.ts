import { RestClient } from '../src';
import { errorResponseObject } from './response.util';

// These tests primarily check auth is working by expecting balance or order not found style errors
describe('Private REST API Endpoints (POST)', () => {
  const API_KEY = process.env.API_KEY_COM;
  const API_SECRET = process.env.API_SECRET_COM;
  const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

  const api = new RestClient(
    {
      apiKey: API_KEY!,
      apiSecret: API_SECRET!,
      apiPass: API_PASSPHRASE!,
    },
    'live'
  );

  const instrumentId = 'BTC-USDT';

  it('should have api credentials to use', () => {
    expect(API_KEY).toStrictEqual(expect.any(String));
    expect(API_SECRET).toStrictEqual(expect.any(String));
    expect(API_PASSPHRASE).toStrictEqual(expect.any(String));
  });

  describe('Trade Endpoints', () => {
    it('submitOrder()', async () => {
      try {
        expect(
          await api.submitOrder({
            instId: instrumentId,
            tdMode: 'cash',
            side: 'buy',
            ordType: 'market',
            sz: '1000000',
          })
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                sCode: '51008',
                sMsg: 'Order placement failed due to insufficient balance ',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('submitMultipleOrders()', async () => {
      try {
        expect(
          await api.submitMultipleOrders([
            {
              instId: instrumentId,
              tdMode: 'cash',
              side: 'buy',
              ordType: 'market',
              sz: '1000000',
            },
            {
              instId: instrumentId,
              tdMode: 'cash',
              side: 'buy',
              ordType: 'market',
              sz: '1000000',
            },
          ])
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                sCode: '51008',
                sMsg: 'Order placement failed due to insufficient balance ',
              },
              {
                sCode: '51008',
                sMsg: 'Order placement failed due to insufficient balance ',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('cancelOrder()', async () => {
      try {
        expect(
          await api.cancelOrder({
            instId: instrumentId,
            ordId: '12313123123',
          })
        ).rejects.toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                ordId: '12313123123',
                sCode: '51400',
                sMsg: 'Cancellation failed as the order does not exist.',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('cancelMultipleOrders()', async () => {
      try {
        expect(
          await api.cancelMultipleOrders([
            {
              instId: instrumentId,
              ordId: '12313123123',
            },
            {
              instId: instrumentId,
              ordId: '12313123124',
            },
          ])
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                ordId: '12313123123',
                sCode: '51400',
                sMsg: 'Cancellation failed as the order does not exist.',
              },
              {
                ordId: '12313123124',
                sCode: '51400',
                sMsg: 'Cancellation failed as the order does not exist.',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('amendOrder()', async () => {
      try {
        expect(
          await api.amendOrder({
            instId: instrumentId,
            ordId: '12313123123',
            newSz: '500000',
          })
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                ordId: '12313123123',
                sCode: '51503',
                sMsg: 'Order modification failed as the order does not exist.',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('amendMultipleOrders()', async () => {
      try {
        expect(
          await api.amendMultipleOrders([
            {
              instId: instrumentId,
              ordId: '12313123123',
              newSz: '500000',
            },
            {
              instId: instrumentId,
              ordId: '12313123124',
              newSz: '500000',
            },
          ])
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                ordId: '12313123123',
                sCode: '51503',
                sMsg: 'Order modification failed as the order does not exist.',
              },
              {
                ordId: '12313123124',
                sCode: '51503',
                sMsg: 'Order modification failed as the order does not exist.',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('closePositions()', async () => {
      try {
        expect(
          await api.closePositions({
            instId: instrumentId,
            mgnMode: 'isolated',
          })
        ).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            'Operation is not supported under the current account mode'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('placeAlgoOrder()', async () => {
      try {
        expect(
          await api.placeAlgoOrder({
            instId: instrumentId,
            tdMode: 'cash',
            side: 'buy',
            ordType: 'twap',
            sz: '50000',
            szLimit: '50000',
            pxLimit: '50000',
            pxVar: '0.5',
            timeInterval: '20',
          })
        ).toMatchObject(errorResponseObject('1', [{ sCode: '51282' }], ''));
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('cancelAlgoOrder()', async () => {
      try {
        expect(
          await api.cancelAlgoOrder([
            {
              instId: instrumentId,
              algoId: '123123123',
            },
            {
              instId: instrumentId,
              algoId: '123123124',
            },
          ])
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                algoId: '123123123',
                sCode: '51400',
                sMsg: 'Cancellation failed as the order does not exist.',
              },
              {
                algoId: '123123124',
                sCode: '51400',
                sMsg: 'Cancellation failed as the order does not exist.',
              },
            ],
            ''
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('cancelAdvanceAlgoOrder()', async () => {
      try {
        expect(
          await api.cancelAdvanceAlgoOrder([
            {
              instId: instrumentId,
              algoId: '123123123',
            },
            {
              instId: instrumentId,
              algoId: '123123124',
            },
          ])
        ).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                algoId: '123123123',
                sCode: '51293',
                sMsg: 'The strategy does not exist or has stopped',
              },
              {
                algoId: '123123124',
                sCode: '51293',
                sMsg: 'The strategy does not exist or has stopped',
              },
            ],
            'Operation failed.'
          )
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Block Trading Endpoints', () => {});
});
