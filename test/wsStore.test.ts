import {
  DefaultLogger,
  isDeepObjectMatch,
  WsChannelSubUnSubRequestArg,
  WsKey,
} from '../src';
import WsStore from '../src/util/WsStore';

const COMPLEX_TOPIC_GREEKS_1: WsChannelSubUnSubRequestArg = {
  channel: 'account-greeks',
  ccy: 'BTC-USD',
};

const COMPLEX_TOPIC_GREEKS_2: WsChannelSubUnSubRequestArg = {
  ccy: 'BTC-USD',
  channel: 'account-greeks',
};

const COMPLEX_TOPIC_GREEKS_3: WsChannelSubUnSubRequestArg = {
  channel: 'account-greeks',
};

const COMPLEX_TOPIC_ACCOUNT: WsChannelSubUnSubRequestArg = {
  channel: 'account',
};

const COMPLEX_TOPIC_POSITIONS_1: WsChannelSubUnSubRequestArg = {
  channel: 'positions',
  instType: 'FUTURES',
};

const COMPLEX_TOPIC_POSITIONS_2: WsChannelSubUnSubRequestArg = {
  instType: 'FUTURES',
  channel: 'positions',
};

const COMPLEX_TOPIC_POSITIONS_3: WsChannelSubUnSubRequestArg = {
  channel: 'positions',
  instType: 'FUTURES',
  instFamily: 'BTC',
};

describe('isDeepObjectMatch()', () => {
  describe('strings', () => {
    it('should match two equal strings', () => {
      expect(isDeepObjectMatch('someTopic', 'someTopic')).toStrictEqual(true);
    });

    it('should NOT match two equal strings', () => {
      expect(
        isDeepObjectMatch('someTopic', 'someDifferentTopic'),
      ).toStrictEqual(false);
    });
  });

  describe('mismatching types', () => {
    it('should NOT match a string to an object', () => {
      expect(
        isDeepObjectMatch('someTopic', { topic: 'someTopic' }),
      ).toStrictEqual(false);
    });
  });

  describe('complex objects', () => {
    it('should match two equal objects with one key', () => {
      expect(
        isDeepObjectMatch({ topic: 'someTopic' }, { topic: 'someTopic' }),
      ).toStrictEqual(true);
    });

    it('should match two equal objects with multiple keys', () => {
      expect(
        isDeepObjectMatch(
          { topic: 'someTopic', symbol: 'BTCUSDT' },
          { topic: 'someTopic', symbol: 'BTCUSDT' },
        ),
      ).toStrictEqual(true);
    });

    it('should match two equal objects keys in different order', () => {
      expect(
        isDeepObjectMatch(
          { topic: 'someTopic', symbol: 'BTCUSDT' },
          { symbol: 'BTCUSDT', topic: 'someTopic' },
        ),
      ).toStrictEqual(true);
    });

    it('should NOT match two objects with different values on the same keys', () => {
      expect(
        isDeepObjectMatch(
          { topic: 'someTopic', symbol: 'ETHUSDT' },
          { symbol: 'BTCUSDT', topic: 'someTopic' },
        ),
      ).toStrictEqual(false);
      expect(
        isDeepObjectMatch(
          { topic: 'someTopic', symbol: 'ETHUSDT' },
          { topic: 'someTopic', symbol: 'BTCUSDT' },
        ),
      ).toStrictEqual(false);
    });

    it('should NOT match two objects with partially matching keys', () => {
      expect(
        isDeepObjectMatch(
          { topic: 'someTopic', symbol: 'ETHUSDT' },
          { topic: 'someTopic' },
        ),
      ).toStrictEqual(false);

      expect(
        isDeepObjectMatch(COMPLEX_TOPIC_GREEKS_1, COMPLEX_TOPIC_GREEKS_3),
      ).toStrictEqual(false);

      expect(
        isDeepObjectMatch(COMPLEX_TOPIC_GREEKS_3, COMPLEX_TOPIC_GREEKS_1),
      ).toStrictEqual(false);
    });
  });
});

describe('WsStore', () => {
  let wsStore: WsStore<WsKey, WsChannelSubUnSubRequestArg> = new WsStore(
    DefaultLogger,
  );

  beforeEach(() => {
    wsStore = new WsStore(DefaultLogger);
  });

  const wsKey: WsKey = 'prodPublic';

  it('should not have topics by default', () => {
    expect(wsStore.getKeys().length).toBe(0);
    expect(wsStore.isWsOpen(wsKey)).toBeFalsy();

    const sortedTopics = wsStore.getTopicsAsArray(wsKey).sort();
    expect(sortedTopics).toStrictEqual([]);
  });

  it('should track added topics', () => {
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_3);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_ACCOUNT);

    const sortedTopics = wsStore.getTopicsAsArray(wsKey).sort();
    expect(sortedTopics).toEqual(
      [
        COMPLEX_TOPIC_GREEKS_1,
        COMPLEX_TOPIC_GREEKS_3,
        COMPLEX_TOPIC_ACCOUNT,
      ].sort(),
    );
  });

  it('should not add duplicate topics', () => {
    // duplicate
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);

    // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_2);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_3);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_2); // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_3); // has 1 more property than 1

    const sortedTopics = wsStore.getTopicsAsArray(wsKey).sort();
    expect(sortedTopics).toEqual(
      [
        COMPLEX_TOPIC_GREEKS_1,
        COMPLEX_TOPIC_GREEKS_3,
        COMPLEX_TOPIC_POSITIONS_1,
        COMPLEX_TOPIC_POSITIONS_3,
      ].sort(),
    );
  });

  it('should remove topics correctly', () => {
    // duplicate
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);

    // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_2);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_3);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_2); // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_3); // has 1 more property than 1

    // remove two complex topics from store
    wsStore.deleteTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);
    wsStore.deleteTopic(wsKey, COMPLEX_TOPIC_POSITIONS_1);

    const sortedTopics = wsStore.getTopicsAsArray(wsKey).sort();
    expect(sortedTopics).toEqual(
      [
        // COMPLEX_TOPIC_GREEKS_1,// removed
        COMPLEX_TOPIC_GREEKS_3,
        // COMPLEX_TOPIC_POSITIONS_1,// removed
        COMPLEX_TOPIC_POSITIONS_3,
      ].sort(),
    );
  });

  it('should remove topics with differently ordered keys', () => {
    // duplicate
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_1);

    // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_2);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_GREEKS_3);

    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_1);
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_2); // same as 1, just differently ordered
    wsStore.addTopic(wsKey, COMPLEX_TOPIC_POSITIONS_3); // has 1 more property than 1

    // remove two complex topics from store
    wsStore.deleteTopic(wsKey, COMPLEX_TOPIC_GREEKS_2);
    wsStore.deleteTopic(wsKey, COMPLEX_TOPIC_POSITIONS_2);

    const sortedTopics = wsStore.getTopicsAsArray(wsKey).sort();
    expect(sortedTopics).toEqual(
      [
        // COMPLEX_TOPIC_GREEKS_1,// removed
        COMPLEX_TOPIC_GREEKS_3,
        // COMPLEX_TOPIC_POSITIONS_1,// removed
        COMPLEX_TOPIC_POSITIONS_3,
      ].sort(),
    );
  });
});
