import { RestClient } from '../src/index.js';
import {
  algoIdParamError,
  errorResponseObject,
  successResponseList,
} from './response.util.js';

describe('Private REST API Trade Endpoints (GET only)', () => {
  const API_KEY = process.env.API_KEY_COM;
  const API_SECRET = process.env.API_SECRET_COM;
  const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

  const api = new RestClient({
    apiKey: API_KEY!,
    apiSecret: API_SECRET!,
    apiPass: API_PASSPHRASE!,
  });

  const instrumentId = 'BTC-USDT';

  it('should have api credentials to use', () => {
    expect(API_KEY).toStrictEqual(expect.any(String));
    expect(API_SECRET).toStrictEqual(expect.any(String));
    expect(API_PASSPHRASE).toStrictEqual(expect.any(String));
  });

  describe('Trade Endpoints', () => {
    it('getOrderDetails()', async () => {
      try {
        expect(
          await api.getOrderDetails({
            instId: instrumentId,
            clOrdId: '2510789768709120',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject('51603', [], 'Order does not exist'),
        );
      }
    });

    it('getOrderList()', async () => {
      try {
        expect(await api.getOrderList()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getOrderHistory()', async () => {
      try {
        expect(await api.getOrderHistory({ instType: 'SPOT' })).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getOrderHistoryArchive()', async () => {
      try {
        expect(
          await api.getOrderHistoryArchive({ instType: 'SPOT' }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getFills()', async () => {
      try {
        expect(await api.getFills()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getFillsHistory()', async () => {
      try {
        expect(await api.getFillsHistory({ instType: 'SPOT' })).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAlgoOrderList()', async () => {
      try {
        expect(await api.getAlgoOrderList({ ordType: 'twap' })).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAlgoOrderHistory()', async () => {
      try {
        expect(
          await api.getAlgoOrderHistory({
            ordType: 'twap',
            state: 'effective',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getEasyConvertCurrencies()', async () => {
      try {
        expect(await api.getEasyConvertCurrencies()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getEasyConvertHistory()', async () => {
      try {
        expect(await api.getEasyConvertHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });

    it('getOneClickRepayCurrencyList()', async () => {
      try {
        expect(await api.getOneClickRepayCurrencyList()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });

    it('getOneClickRepayHistory()', async () => {
      try {
        expect(await api.getOneClickRepayHistory()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });
  });

  describe.skip('Block Trading Endpoints', () => {
    const errorCode = '70006';
    // Block trading is only available for OKX users who have completed identity verification level 2 or above
    // const errorMatch = expect.stringMatching(/level 2 or above/gim);
    const errorMatch = expect.any(String);

    it('getBlockCounterParties()', async () => {
      try {
        expect(await api.getBlockCounterParties()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(errorResponseObject(errorCode, [], errorMatch));
      }
    });

    it('getBlockRFQs()', async () => {
      try {
        expect(await api.getBlockRFQs()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(errorResponseObject(errorCode, [], errorMatch));
      }
    });

    it('getBlockQuotes()', async () => {
      try {
        expect(await api.getBlockQuotes()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(errorResponseObject(errorCode, [], errorMatch));
      }
    });

    it('getBlockTrades()', async () => {
      try {
        expect(await api.getBlockTrades()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(errorResponseObject(errorCode, [], errorMatch));
      }
    });

    it('getPublicRFQBlockTrades()', async () => {
      try {
        expect(await api.getPublicRFQBlockTrades()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Funding Endpoints', () => {
    it('getCurrencies()', async () => {
      try {
        expect(await api.getCurrencies({})).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getBalances()', async () => {
      try {
        expect(await api.getBalances({})).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAccountAssetValuation()', async () => {
      try {
        expect(await api.getAccountAssetValuation({})).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getFundsTransferState()', async () => {
      try {
        expect(
          await api.getFundsTransferState({ clientId: 'fakeClientId' }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58129',
            [],
            expect.stringMatching(/clientId/gim),
          ),
        );
      }
    });

    it('getLightningDeposits()', async () => {
      try {
        expect(
          await api.getLightningDeposits({ ccy: 'BTC', amt: '0.005' }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58355',
            [],
            expect.stringMatching(/account manager/gim),
          ),
        );
      }
    });

    // Fails on test acc due to account configuration
    it.skip('getDepositAddress()', async () => {
      try {
        expect(await api.getDepositAddress({ ccy: 'BTC' })).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '58306',
            [],
            expect.stringMatching(/identity/gim),
          ),
        );
      }
    });

    it('getDepositHistory()', async () => {
      try {
        expect(await api.getDepositHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getWithdrawalHistory()', async () => {
      try {
        expect(await api.getWithdrawalHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getSavingBalance()', async () => {
      try {
        expect(await api.getSavingBalance({})).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getLendingHistory()', async () => {
      try {
        expect(await api.getLendingHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getPublicBorrowInfo()', async () => {
      try {
        expect(await api.getPublicBorrowInfo({})).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getPublicBorrowHistory()', async () => {
      try {
        expect(await api.getPublicBorrowHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Convert Endpoints', () => {
    it('getConvertCurrencies()', async () => {
      try {
        expect(await api.getConvertCurrencies()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getConvertCurrencyPair()', async () => {
      try {
        expect(
          await api.getConvertCurrencyPair({
            fromCcy: 'BTC',
            toCcy: 'USDT',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getConvertHistory()', async () => {
      try {
        expect(await api.getConvertHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Account Endpoints', () => {
    it('getBalance()', async () => {
      try {
        expect(await api.getBalance()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getPositions()', async () => {
      try {
        expect(await api.getPositions()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getPositionsHistory()', async () => {
      try {
        expect(await api.getPositionsHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAccountPositionRisk()', async () => {
      try {
        expect(await api.getAccountPositionRisk()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getBills()', async () => {
      try {
        expect(await api.getBills()).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getBillsArchive()', async () => {
      try {
        expect(await api.getBillsArchive()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAccountConfiguration()', async () => {
      try {
        expect(await api.getAccountConfiguration()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getMaxOrderAmount()', async () => {
      try {
        expect(
          await api.getMaxBuySellAmount({
            instId: instrumentId,
            tdMode: 'cash',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getMaxBuySellAmount()', async () => {
      try {
        expect(
          await api.getMaxBuySellAmount({
            instId: instrumentId,
            tdMode: 'cash',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getMaxAvailableTradableAmount()', async () => {
      try {
        expect(
          await api.getMaxAvailableTradableAmount({
            instId: instrumentId,
            tdMode: 'cash',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getLeverage()', async () => {
      try {
        expect(
          await api.getLeverage({ instId: instrumentId, mgnMode: 'cross' }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getMaxLoan()', async () => {
      try {
        expect(
          await api.getMaxLoan({
            instId: instrumentId,
            mgnMode: 'cross',
            mgnCcy: 'BTC',
          }),
        ).toMatchObject(
          expect.arrayContaining([
            {
              ccy: expect.any(String),
              instId: expect.any(String),
              maxLoan: expect.any(String),
              mgnCcy: expect.any(String),
              mgnMode: expect.any(String),
              side: expect.any(String),
            },
          ]),
        );
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });

    it('getFeeRates()', async () => {
      try {
        expect(await api.getFeeRates({ instType: 'SPOT' })).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getInterestAccrued()', async () => {
      try {
        expect(await api.getInterestAccrued()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getInterestRate()', async () => {
      try {
        expect(await api.getInterestRate()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getMaxWithdrawals()', async () => {
      try {
        expect(await api.getMaxWithdrawals()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getAccountRiskState()', async () => {
      try {
        expect(await api.getAccountRiskState()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });

    it('getVIPLoanBorrowRepayHistory()', async () => {
      try {
        expect(await api.getVIPLoanBorrowRepayHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getBorrowInterestLimits()', async () => {
      try {
        expect(await api.getBorrowInterestLimits()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getGreeks()', async () => {
      try {
        expect(await api.getGreeks()).toMatchObject([]);
      } catch (e) {
        // The error message could be improved (OKX is aware). This is likely related to account state (account mode).
        // Adjust account mode to single currency / multiple currency or portfolio margin.
        expect(e).toMatchObject(
          errorResponseObject(
            '51010',
            [],
            expect.stringMatching(/account mode/gim),
          ),
        );
      }
    });

    it('getPMLimitation()', async () => {
      try {
        expect(
          await api.getPMLimitation({
            instType: 'FUTURES',
            uly: instrumentId,
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('SubAccount Endpoints', () => {
    const subAccount = 'someAccountName';
    it('getSubAccountList()', async () => {
      try {
        expect(await api.getSubAccountList()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59500',
            [],
            expect.stringMatching(/main account/gim),
          ),
        );
      }
    });

    it('getSubAccountBalances()', async () => {
      try {
        expect(
          await api.getSubAccountBalances({ subAcct: subAccount }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59500',
            [],
            expect.stringMatching(/main account/gim),
          ),
        );
      }
    });

    it('getSubAccountFundingBalances()', async () => {
      try {
        expect(
          await api.getSubAccountFundingBalances({ subAcct: subAccount }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59510',
            [],
            expect.stringMatching(/someAccountName/gim),
          ),
        );
      }
    });

    it.skip('getSubAccountTransferHistory()', async () => {
      try {
        expect(await api.getSubAccountTransferHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getSubAccountCustodyTradingList()', async () => {
      try {
        expect(await api.getSubAccountCustodyTradingList({})).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Grid Trading Endpoints', () => {
    const algoId = 'someFakeAlgoId';

    it('getGridAlgoOrderList()', async () => {
      try {
        expect(
          await api.getGridAlgoOrderList({
            algoOrdType: 'grid',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getGridAlgoOrderHistory()', async () => {
      try {
        expect(
          await api.getGridAlgoOrderHistory({
            algoOrdType: 'grid',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getGridAlgoOrderDetails()', async () => {
      try {
        expect(
          await api.getGridAlgoOrderDetails({
            algoOrdType: 'contract_grid',
            algoId,
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(algoIdParamError());
      }
    });

    it('getGridAlgoSubOrders()', async () => {
      try {
        expect(
          await api.getGridAlgoSubOrders({
            algoOrdType: 'contract_grid',
            algoId,
            type: 'filled',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(algoIdParamError());
      }
    });

    it('getGridAlgoOrderPositions()', async () => {
      try {
        expect(
          await api.getGridAlgoOrderPositions({
            algoOrdType: 'contract_grid',
            algoId,
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(algoIdParamError());
      }
    });

    it('getGridAIParameter()', async () => {
      try {
        expect(
          await api.getGridAIParameter({
            algoOrdType: 'grid',
            instId: 'BTC-USDT',
            direction: 'long',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Staking Endpoints', () => {
    it('getStakingOffers()', async () => {
      try {
        expect(await api.getStakingOffers()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getActiveStakingOrders()', async () => {
      try {
        expect(await api.getActiveStakingOrders()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('getStakingOrderHistory()', async () => {
      try {
        expect(await api.getStakingOrderHistory()).toMatchObject(
          successResponseList(),
        );
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });
});
