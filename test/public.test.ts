import { RestClient } from '../src';
import { notAuthenticatedError, successResponseList } from './response.util';

describe('Public Inverse REST API Endpoints', () => {
  const api = new RestClient(null, 'prod');

  const instId = 'BTC-USDT';
  const instdIdSwap = 'BTC-USDT-SWAP';

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
    expect(await api.getCandlesV2({ instId: instId })).toMatchObject(
      successResponseList()
    );
  });

  it('getHistoricCandles()', async () => {
    expect(await api.getHistoricCandlesV2({ instId: instId })).toMatchObject(
      successResponseList()
    );
  });

  it('getIndexCandles()', async () => {
    expect(await api.getIndexCandlesV2({ instId: instId })).toMatchObject(
      successResponseList()
    );
  });

  it('getMarkPriceCandles()', async () => {
    expect(await api.getMarkPriceCandlesV2({ instId: instId })).toMatchObject(
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

  // New public trade tests
  it('getOptionTradesByInstrument()', async () => {
    expect(
      await api.getOptionTradesByInstrument({ instFamily: 'BTC-USD' })
    ).toMatchObject(successResponseList());
  });

  it('getOptionTrades()', async () => {
    expect(await api.getOptionTrades({ instFamily: 'BTC-USD' })).toMatchObject(
      successResponseList()
    );
  });

  it('getBlockTickers()', async () => {
    expect(await api.getBlockTickers('SPOT')).toMatchObject(
      successResponseList()
    );
  });

  it('getBlockTicker()', async () => {
    expect(await api.getBlockTicker(instId)).toMatchObject(
      successResponseList()
    );
  });

  it('getInstruments()', async () => {
    expect(await api.getInstruments('SPOT')).toMatchObject(
      successResponseList()
    );
  });

  it('getOpenInterest()', async () => {
    expect(await api.getOpenInterest({ instType: 'FUTURES' })).toMatchObject(
      successResponseList()
    );
  });

  it('getFundingRate()', async () => {
    expect(await api.getFundingRate({ instId: 'BTC-USD-SWAP' })).toMatchObject(
      successResponseList()
    );
  });

  it('getFundingRateHistory()', async () => {
    expect(
      await api.getFundingRateHistory({ instId: 'BTC-USD-SWAP' })
    ).toMatchObject(successResponseList());
  });

  it('getMinMaxLimitPrice()', async () => {
    expect(
      await api.getMinMaxLimitPrice({ instId: 'BTC-USD-SWAP' })
    ).toMatchObject(successResponseList());
  });

  it('getOptionMarketData()', async () => {
    expect(
      await api.getOptionMarketData({ instFamily: 'BTC-USD' })
    ).toMatchObject(successResponseList());
  });

  it('getDiscountRateAndInterestFreeQuota()', async () => {
    expect(
      await api.getDiscountRateAndInterestFreeQuota({ instId: 'BTC-USD' })
    ).toMatchObject(successResponseList());
  });

  it('getSystemTime()', async () => {
    expect(await api.getSystemTime({})).toMatchObject(successResponseList());
  });

  it('getMarkPrice()', async () => {
    expect(await api.getMarkPrice({ instId: 'BTC-USD-SWAP' })).toMatchObject(
      successResponseList()
    );
  });

  it('getInterestRateAndLoanQuota()', async () => {
    expect(
      await api.getInterestRateAndLoanQuota({ instId: 'BTC-USD' })
    ).toMatchObject(successResponseList());
  });

  it('getVIPInterestRateAndLoanQuota()', async () => {
    expect(
      await api.getVIPInterestRateAndLoanQuota({ instId: 'BTC-USD' })
    ).toMatchObject(successResponseList());
  });

  it('getUnderlying()', async () => {
    expect(await api.getUnderlying({ instType: 'FUTURES' })).toMatchObject(
      successResponseList()
    );
  });

  it('getOptionTickBands()', async () => {
    expect(await api.getOptionTickBands({ instType: 'OPTION' })).toMatchObject(
      successResponseList()
    );
  });

  it('getPremiumHistory()', async () => {
    expect(await api.getPremiumHistory({ instId: instdIdSwap })).toMatchObject(
      successResponseList()
    );
  });

  it('getOpenInterestHistory()', async () => {
    expect(
      await api.getOpenInterestHistory({ instId: instdIdSwap })
    ).toMatchObject(successResponseList());
  });

  it('getTakerVolume()', async () => {
    expect(
      await api.getTakerVolume({ ccy: 'BTC', instType: 'CONTRACTS' })
    ).toMatchObject(successResponseList());
  });

  it('getContractTakerVolume()', async () => {
    expect(
      await api.getContractTakerVolume({ instId: instdIdSwap })
    ).toMatchObject(successResponseList());
  });

  it('getMarginLendingRatio()', async () => {
    expect(
      await api.getMarginLendingRatio({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getTopTradersAccountRatio()', async () => {
    expect(
      await api.getTopTradersAccountRatio({ instId: instdIdSwap })
    ).toMatchObject(successResponseList());
  });

  it('getTopTradersContractPositionRatio()', async () => {
    expect(
      await api.getTopTradersContractPositionRatio({ instId: instdIdSwap })
    ).toMatchObject(successResponseList());
  });

  it('getLongShortContractRatio()', async () => {
    expect(
      await api.getLongShortContractRatio({ instId: instdIdSwap })
    ).toMatchObject(successResponseList());
  });

  it('getLongShortRatio()', async () => {
    expect(
      await api.getLongShortRatio({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getContractsOpenInterestAndVolume()', async () => {
    expect(
      await api.getContractsOpenInterestAndVolume({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getOptionsOpenInterestAndVolume()', async () => {
    expect(
      await api.getOptionsOpenInterestAndVolume({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getPutCallRatio()', async () => {
    expect(
      await api.getPutCallRatio({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getOpenInterestAndVolumeExpiry()', async () => {
    expect(
      await api.getOpenInterestAndVolumeExpiry({ ccy: 'BTC', period: '1D' })
    ).toMatchObject(successResponseList());
  });

  it('getOpenInterestAndVolumeStrike()', async () => {
    expect(
      await api.getOpenInterestAndVolumeStrike({
        ccy: 'BTC',
        expTime: '20241223',
        period: '1D',
      })
    ).toMatchObject(successResponseList());
  });

  it('getTakerFlow()', async () => {
    expect(await api.getTakerFlow({ ccy: 'BTC', period: '1D' })).toMatchObject(
      successResponseList()
    );
  });

  it('getSystemStatus()', async () => {
    expect(await api.getSystemStatus('ongoing')).toMatchObject(
      successResponseList()
    );
  });
});
