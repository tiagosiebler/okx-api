import { RestClient } from '../src';
import { RFQLeg } from '../src/types/rest';
import { errorResponseObject, successResponseList } from './response.util';

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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                sCode: '51008',
                sMsg: expect.stringMatching(/insufficient/gim),
              },
            ],
            'Operation failed.'
          )
        );
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '1',
            [
              {
                sCode: '51008',
                sMsg: expect.stringMatching(/insufficient/gim),
              },
              {
                sCode: '51008',
                sMsg: expect.stringMatching(/insufficient/gim),
              },
            ],
            'Operation failed.'
          )
        );
      }
    });

    it('cancelOrder()', async () => {
      try {
        expect(
          await api.cancelOrder({
            instId: instrumentId,
            ordId: '12313123123',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
      }
    });

    it('closePositions()', async () => {
      try {
        expect(
          await api.closePositions({
            instId: instrumentId,
            mgnMode: 'isolated',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            'Operation is not supported under the current account mode'
          )
        );
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject('1', [{ sCode: '51282' }], '')
        );
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
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
      }
    });

    it.skip('submitEasyConvert()', async () => {
      try {
        expect(await api.submitEasyConvert(['BTC'], 'USDT')).toBeFalsy();
      } catch (e) {
        // currently failing. Asked OKX.
        // {"code": "50013", "data": [], "msg": "System busy, please try again later."}
        expect(e).toBe('');
        // .toMatchObject(
        //   errorResponseObject('1', [{ lkml: true }], 'Operation failed.')
        // );
      }
    });

    it('submitOneClickRepay()', async () => {
      try {
        expect(await api.submitOneClickRepay(['BTC'], 'USDT')).toBeFalsy();
      } catch (e) {
        // Requires account to be in a certain state
        expect(e).toMatchObject(
          errorResponseObject(
            '51000',
            [],
            expect.stringMatching(/Parameter acctLv/gim)
          )
        );
      }
    });
  });

  describe('Block Trading Endpoints', () => {
    const instId = 'ETH-USDT';
    const rfqLeg: RFQLeg = {
      instId,
      sz: '25',
      side: 'buy',
    };

    it('createBlockRFQ()', async () => {
      try {
        expect(
          await api.createBlockRFQ({
            counterparties: ['Trader1'],
            legs: [rfqLeg],
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelBlockRFQ()', async () => {
      try {
        expect(await api.cancelBlockRFQ({ rfqId: 'fakeId1' })).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelMultipleBlockRFQs()', async () => {
      try {
        expect(
          await api.cancelMultipleBlockRFQs({ rfqIds: ['fakeId1'] })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelAllRFQs()', async () => {
      try {
        expect(await api.cancelAllRFQs()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('executeBlockQuote()', async () => {
      try {
        expect(
          await api.executeBlockQuote({
            quoteId: 'fakeQuoteId',
            rfqId: 'fkeId1',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('createBlockQuote()', async () => {
      try {
        expect(
          await api.createBlockQuote({
            rfqId: 'fakeId1',
            legs: [
              {
                instId,
                px: '10000',
                side: 'buy',
                sz: '100',
              },
            ],
            quoteSide: 'buy',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelBlockQuote()', async () => {
      try {
        expect(
          await api.cancelBlockQuote({
            quoteId: 'fakeId1',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelMultipleBlockQuotes()', async () => {
      try {
        expect(
          await api.cancelMultipleBlockQuotes({
            quoteIds: ['10123'],
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });

    it('cancelAllBlockQuotes()', async () => {
      try {
        expect(await api.cancelAllBlockQuotes()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '70006',
            [],
            expect.stringMatching(/minimum asset/gim)
          )
        );
      }
    });
  });

  describe('Funding Endpoints', () => {
    it('asdfasfadfdasf()', async () => {
      try {
        expect(await api.getBalance()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('asdfasfsadfasfdf Endpoints', () => {
    it('asdfasfadfdasf()', async () => {
      try {
        expect(await api.getBalance()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });
});
