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
    it('fundsTransfer()', async () => {
      try {
        expect(
          await api.fundsTransfer({
            ccy: 'USDT',
            amt: '1.5',
            from: '18',
            to: '6',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58350',
            [],
            expect.stringMatching(/Insufficient/gim)
          )
        );
      }
    });

    it('submitWithdraw()', async () => {
      try {
        expect(
          await api.submitWithdraw({
            amt: '1',
            fee: '0.0005',
            dest: '4',
            toAddr: '0x00000:00000',
            ccy: 'USDT',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject({
          code: '50114',
          msg: expect.stringMatching(/Authority/gim),
        });
      }
    });

    it('submitWithdrawLightning()', async () => {
      try {
        expect(await api.submitWithdrawLightning('USDT', '12345')).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject({
          code: '50114',
          msg: expect.stringMatching(/Authority/gim),
        });
      }
    });

    it('cancelWithdrawal()', async () => {
      try {
        expect(await api.cancelWithdrawal('fakeId')).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject({
          code: '50114',
          msg: expect.stringMatching(/Authority/gim),
        });
      }
    });

    it('savingsPurchaseRedemption()', async () => {
      try {
        expect(
          await api.savingsPurchaseRedemption('BTC', '1', 'redempt', '1')
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58350',
            [],
            expect.stringMatching(/Insufficient/gim)
          )
        );
      }
    });

    it('setLendingRate()', async () => {
      try {
        expect(await api.setLendingRate('USDT', '1')).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58008',
            [],
            expect.stringMatching(/do not have assets/gim)
          )
        );
      }
    });
  });

  describe.skip('Convert Endpoints', () => {
    it('estimateConvertQuote()', async () => {
      try {
        expect(
          await api.estimateConvertQuote({
            baseCcy: 'ETH',
            quoteCcy: 'USDT',
            side: 'buy',
            rfqSz: '30',
            rfqSzCcy: 'USDT',
          })
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('convertTrade()', async () => {
      try {
        expect(
          await api.convertTrade({
            baseCcy: 'ETH',
            quoteCcy: 'USDT',
            side: 'buy',
            sz: '30',
            szCcy: 'USDT',
            quoteId: 'quoterETH-USDT16461885104612381',
          })
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Account Endpoints', () => {
    it('setPositionMode()', async () => {
      try {
        expect(await api.setPositionMode('long_short_mode')).toMatchObject(
          successResponseList()
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('setLeverage()', async () => {
      try {
        expect(
          await api.setLeverage({
            lever: '5',
            instId: 'BTC-USDT',
            mgnMode: 'cross',
          })
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('changePositionMargin()', async () => {
      try {
        expect(
          await api.changePositionMargin({
            instId: 'BTC-USDT',
            posSide: 'long',
            type: 'add',
            amt: '1',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/posSide/gim))
        );
      }
    });

    it('setGreeksDisplayType()', async () => {
      try {
        expect(await api.setGreeksDisplayType('PA')).toMatchObject(
          successResponseList()
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('setIsolatedMode()', async () => {
      try {
        expect(await api.setIsolatedMode('automatic', 'CONTRACTS')).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/current account mode/gim)
          )
        );
      }
    });

    it('borrowRepayVIPLoan()', async () => {
      try {
        expect(await api.borrowRepayVIPLoan('BTC', 'repay', '1')).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59310',
            [],
            expect.stringMatching(/support VIP loan/gim)
          )
        );
      }
    });

    it('positionBuilder()', async () => {
      try {
        expect(await api.positionBuilder()).toMatchObject(
          successResponseList()
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('SubAccount Endpoints', () => {
    it('resetSubAccountAPIKey()', async () => {
      try {
        expect(
          await api.resetSubAccountAPIKey('fakeSubAcc', 'fakeApiKey')
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59500',
            [],
            expect.stringMatching(/main account/gim)
          )
        );
      }
    });

    it('transferSubAccountBalance()', async () => {
      try {
        expect(
          await api.transferSubAccountBalance({
            ccy: 'USDT',
            amt: '1.5',
            from: '6',
            to: '6',
            fromSubAccount: 'test-1',
            toSubAccount: 'test-2',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59500',
            [],
            expect.stringMatching(/main account/gim)
          )
        );
      }
    });

    it('setSubAccountTransferOutPermission()', async () => {
      try {
        expect(
          await api.setSubAccountTransferOutPermission('test-1', true)
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59500',
            [],
            expect.stringMatching(/main account/gim)
          )
        );
      }
    });
  });

  describe('Grid Trading Endpoints', () => {
    const algoId = 'fakeAlgoId';
    const instId = 'BTC-USDT';

    it('placeGridAlgoOrder()', async () => {
      try {
        expect(
          await api.placeGridAlgoOrder({
            instId: 'BTC-USDT',
            algoOrdType: 'moon_grid',
            maxPx: '5000',
            minPx: '400',
            gridNum: '10',
            runType: '2',
            quoteSz: '25',
          })
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject({
          code: '1',
          data: [
            {
              sCode: '51008',
              sMsg: expect.stringMatching(/insufficient/gim),
            },
          ],
        });
      }
    });

    it('amendGridAlgoOrder()', async () => {
      try {
        expect(
          await api.amendGridAlgoOrder(algoId, instId, { tpTriggerPx: '10' })
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject(
            '50013',
            [],
            expect.stringMatching(/system busy/gim)
          )
        );
      }
    });

    it('stopGridAlgoOrder()', async () => {
      try {
        expect(
          await api.stopGridAlgoOrder([
            {
              algoId,
              instId,
              algoOrdType: 'moon_grid',
              stopType: '1',
            },
          ])
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject({
          code: '1',
          data: [
            {
              sCode: '51000',
              sMsg: expect.stringMatching(/algoId/gim),
            },
          ],
        });
      }
    });

    it('spotGridWithdrawIncome()', async () => {
      try {
        expect(await api.spotGridWithdrawIncome(algoId)).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/algoId/gim))
        );
      }
    });

    it('computeGridMarginBalance()', async () => {
      try {
        expect(
          await api.computeGridMarginBalance(algoId, 'reduce')
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/algoId/gim))
        );
      }
    });

    it('adjustGridMarginBalance()', async () => {
      try {
        expect(
          await api.adjustGridMarginBalance(algoId, 'reduce', { percent: '50' })
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/algoId/gim))
        );
      }
    });
  });

  describe('Staking Endpoints', () => {
    const productId = '1234';

    it('submitStake()', async () => {
      try {
        expect(
          await api.submitStake(
            productId,
            [
              {
                ccy: 'ZIL',
                amt: '100',
              },
            ],
            '30'
          )
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject(
            '51000',
            [],
            expect.stringMatching(/Parameter/gim)
          )
        );
      }
    });

    it('redeemStake()', async () => {
      try {
        expect(await api.redeemStake('fakeOrderId', 'staking')).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/ordId/gim))
        );
      }
    });

    it('cancelStakingRequest()', async () => {
      try {
        expect(
          await api.cancelStakingRequest('fakeOrderId', 'staking')
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('51000', [], expect.stringMatching(/ordId/gim))
        );
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
