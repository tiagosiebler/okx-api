import { RestClient } from '../../src';
import { errorResponseObject } from '../response.util';

// These tests primarily check auth is working by expecting balance or order not found style errors
describe('Private REST API Trade Endpoints (POST)', () => {
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

  it('placeOrder()', async () => {
    expect(
      api.placeOrder({
        instId: instrumentId,
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '1000000',
      })
    ).rejects.toMatchObject(
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
  });

  it('placeMultipleOrders()', async () => {
    expect(
      api.placeMultipleOrders([
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
    ).rejects.toMatchObject(
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
  });

  it('cancelOrder()', async () => {
    expect(
      api.cancelOrder({
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
  });

  it('cancelMultipleOrders()', async () => {
    expect(
      api.cancelMultipleOrders([
        {
          instId: instrumentId,
          ordId: '12313123123',
        },
        {
          instId: instrumentId,
          ordId: '12313123124',
        },
      ])
    ).rejects.toMatchObject(
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
  });

  it('amendOrder()', async () => {
    expect(
      api.amendOrder({
        instId: instrumentId,
        ordId: '12313123123',
        newSz: '500000',
      })
    ).rejects.toMatchObject(
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
  });

  it('amendMultipleOrders()', async () => {
    expect(
      api.amendMultipleOrders([
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
    ).rejects.toMatchObject(
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
  });

  it('closePositions()', async () => {
    expect(
      api.closePositions({
        instId: instrumentId,
        mgnMode: 'isolated',
      })
    ).rejects.toMatchObject(
      errorResponseObject(
        '51010',
        [],
        'Operation is not supported under the current account mode'
      )
    );
  });

  it('placeAlgoOrder()', async () => {
    expect(
      api.placeAlgoOrder({
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
    ).rejects.toMatchObject(errorResponseObject('1', [{ sCode: '51282' }], ''));
  });

  it('cancelAlgoOrder()', async () => {
    expect(
      api.cancelAlgoOrder([
        {
          instId: instrumentId,
          algoId: '123123123',
        },
        {
          instId: instrumentId,
          algoId: '123123124',
        },
      ])
    ).rejects.toMatchObject(
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
  });

  it('cancelAdvanceAlgoOrder()', async () => {
    expect(
      api.cancelAdvanceAlgoOrder([
        {
          instId: instrumentId,
          algoId: '123123123',
        },
        {
          instId: instrumentId,
          algoId: '123123124',
        },
      ])
    ).rejects.toMatchObject(
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
  });
});
