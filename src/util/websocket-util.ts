import { APIMarket, WebsocketClientOptions, WsChannel } from '../types';
import { DefaultLogger } from './logger';
import { neverGuard } from './typeGuards';

export const WS_BASE_URL_MAP: Record<
  APIMarket,
  Record<'public' | 'private', string>
> = {
  prod: {
    public: 'wss://ws.okx.com:8443/ws/v5/public',
    private: 'wss://ws.okx.com:8443/ws/v5/private',
  },
  aws: {
    public: 'wss://wsaws.okx.com:8443/ws/v5/public',
    private: 'wss://wsaws.okx.com:8443/ws/v5/private',
  },
  business: {
    public: 'wss://ws.okx.com:8443/ws/v5/business',
    private: 'wss://ws.okx.com:8443/ws/v5/business',
  },
  businessAws: {
    public: 'wss://wsaws.okx.com:8443/ws/v5/business',
    private: 'wss://wsaws.okx.com:8443/ws/v5/business',
  },
  businessDemo: {
    public: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
    private: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
  },
  demo: {
    public: 'wss://wspap.okx.com:8443/ws/v5/public?brokerId=9999',
    private: 'wss://wspap.okx.com:8443/ws/v5/private?brokerId=9999',
  },
};

export const WS_KEY_MAP = {
  prodPublic: 'prodPublic',
  prodPrivate: 'prodPrivate',
  awsPublic: 'awsPublic',
  awsPrivate: 'awsPrivate',
  demoPublic: 'demoPublic',
  demoPrivate: 'demoPrivate',
  businessPrivate: 'businessPrivate',
  businessPublic: 'businessPublic',
  businessAwsPrivate: 'businessAwsPrivate',
  businessAwsPublic: 'businessAwsPublic',
  businessDemoPublic: 'businessDemoPublic',
  businessDemoPrivate: 'businessDemoPrivate',
} as const;

/** This is used to differentiate between each of the available websocket streams (as bybit has multiple websockets) */
export type WsKey = (typeof WS_KEY_MAP)[keyof typeof WS_KEY_MAP];

export const PRIVATE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPrivate,
  WS_KEY_MAP.awsPrivate,
  WS_KEY_MAP.businessPrivate,
  WS_KEY_MAP.businessAwsPrivate,
  WS_KEY_MAP.demoPrivate,
  WS_KEY_MAP.businessDemoPrivate,
];

export const PUBLIC_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPublic,
  WS_KEY_MAP.awsPublic,
  WS_KEY_MAP.businessPublic,
  WS_KEY_MAP.businessAwsPublic,
  WS_KEY_MAP.demoPublic,
  WS_KEY_MAP.businessDemoPublic,
];

/** Used to automatically determine if a sub request should be to the public or private ws (when there's two) */
const PRIVATE_CHANNELS = [
  'account',
  'positions',
  'balance_and_position',
  'orders',
  'orders-algo',
  'algo-advance',
  'liquidation-warning',
  'account-greeks',
  'grid-orders-spot',
  'grid-orders-contract',
  'grid-orders-moon',
  'grid-positions',
  'grid-sub-orders',
];

/**
 * The following channels only support the new business wss endpoint:
 * https://www.okx.com/help-center/changes-to-v5-api-websocket-subscription-parameter-and-url
 */
const BUSINESS_CHANNELS = [
  'orders-algo',
  'algo-advance',
  'deposit-info',
  'withdrawal-info',
  'grid-orders-spot',
  'grid-orders-contract',
  'grid-orders-moon',
  'grid-positions',
  'grid-sub-orders',
  'algo-recurring-buy',
  'candle1Y',
  'candle6M',
  'candle3M',
  'candle1M',
  'candle1W',
  'candle1D',
  'candle2D',
  'candle3D',
  'candle5D',
  'candle12H',
  'candle6H',
  'candle4H',
  'candle2H',
  'candle1H',
  'candle30m',
  'candle15m',
  'candle5m',
  'candle3m',
  'candle1m',
  'candle1Yutc',
  'candle3Mutc',
  'candle1Mutc',
  'candle1Wutc',
  'candle1Dutc',
  'candle2Dutc',
  'candle3Dutc',
  'candle5Dutc',
  'candle12Hutc',
  'candle6Hutc',
  'mark-price-candle1Y',
  'mark-price-candle6M',
  'mark-price-candle3M',
  'mark-price-candle1M',
  'mark-price-candle1W',
  'mark-price-candle1D',
  'mark-price-candle2D',
  'mark-price-candle3D',
  'mark-price-candle5D',
  'mark-price-candle12H',
  'mark-price-candle6H',
  'mark-price-candle4H',
  'mark-price-candle2H',
  'mark-price-candle1H',
  'mark-price-candle30m',
  'mark-price-candle15m',
  'mark-price-candle5m',
  'mark-price-candle3m',
  'mark-price-candle1m',
  'mark-price-candle1Yutc',
  'mark-price-candle3Mutc',
  'mark-price-candle1Mutc',
  'mark-price-candle1Wutc',
  'mark-price-candle1Dutc',
  'mark-price-candle2Dutc',
  'mark-price-candle3Dutc',
  'mark-price-candle5Dutc',
  'mark-price-candle12Hutc',
  'mark-price-candle6Hutc',
  'index-candle1Y',
  'index-candle6M',
  'index-candle3M',
  'index-candle1M',
  'index-candle1W',
  'index-candle1D',
  'index-candle2D',
  'index-candle3D',
  'index-candle5D',
  'index-candle12H',
  'index-candle6H',
  'index-candle4H index -candle2H',
  'index-candle1H',
  'index-candle30m',
  'index-candle15m',
  'index-candle5m',
  'index-candle3m',
  'index-candle1m',
  'index-candle1Yutc',
  'index-candle3Mutc',
  'index-candle1Mutc',
  'index-candle1Wutc',
  'index-candle1Dutc',
  'index-candle2Dutc',
  'index-candle3Dutc',
  'index-candle5Dutc',
  'index-candle12Hutc',
  'index-candle6Hutc',
];

/** Determine which WsKey (ws connection) to route an event to */
export function getWsKeyForTopicChannel(
  market: APIMarket,
  channel: WsChannel,
  isPrivate?: boolean,
): WsKey {
  const isPrivateTopic =
    isPrivate === true || PRIVATE_CHANNELS.includes(channel);
  const isBusinessChannel = BUSINESS_CHANNELS.includes(channel);

  return getWsKeyForMarket(market, isPrivateTopic, isBusinessChannel);
}

export function getWsKeyForMarket(
  market: APIMarket,
  isPrivate: boolean,
  isBusinessChannel: boolean,
): WsKey {
  switch (market) {
    case 'prod': {
      if (isBusinessChannel) {
        return isPrivate
          ? WS_KEY_MAP.businessPrivate
          : WS_KEY_MAP.businessPublic;
      }
      return isPrivate ? WS_KEY_MAP.prodPrivate : WS_KEY_MAP.prodPublic;
    }
    case 'aws': {
      if (isBusinessChannel) {
        return isPrivate
          ? WS_KEY_MAP.businessAwsPrivate
          : WS_KEY_MAP.businessAwsPublic;
      }
      return isPrivate ? WS_KEY_MAP.awsPrivate : WS_KEY_MAP.awsPublic;
    }
    case 'demo': {
      if (isBusinessChannel) {
        return isPrivate
          ? WS_KEY_MAP.businessDemoPrivate
          : WS_KEY_MAP.businessDemoPublic;
      }
      return isPrivate ? WS_KEY_MAP.demoPrivate : WS_KEY_MAP.demoPublic;
    }
    case 'business': {
      return isPrivate ? WS_KEY_MAP.businessPrivate : WS_KEY_MAP.businessPublic;
    }
    case 'businessAws': {
      return isPrivate
        ? WS_KEY_MAP.businessAwsPrivate
        : WS_KEY_MAP.businessAwsPublic;
    }
    case 'businessDemo': {
      return isPrivate
        ? WS_KEY_MAP.businessDemoPrivate
        : WS_KEY_MAP.businessDemoPublic;
    }
    default: {
      throw neverGuard(market, 'getWsKeyForTopic(): Unhandled market');
    }
  }
}

/** Maps a WS key back to a WS URL */
export function getWsUrlForWsKey(
  wsKey: WsKey,
  wsClientOptions: WebsocketClientOptions,
  logger: typeof DefaultLogger,
): string {
  if (wsClientOptions.wsUrl) {
    return wsClientOptions.wsUrl;
  }

  switch (wsKey) {
    case 'prodPublic':
      return WS_BASE_URL_MAP.prod.public;
    case 'prodPrivate':
      return WS_BASE_URL_MAP.prod.private;
    case 'awsPublic':
      return WS_BASE_URL_MAP.aws.public;
    case 'awsPrivate':
      return WS_BASE_URL_MAP.aws.private;
    case 'demoPublic':
      return WS_BASE_URL_MAP.demo.public;
    case 'demoPrivate':
      return WS_BASE_URL_MAP.demo.private;
    case 'businessPublic':
      return WS_BASE_URL_MAP.business.public;
    case 'businessPrivate':
      return WS_BASE_URL_MAP.business.private;
    case 'businessAwsPublic':
      return WS_BASE_URL_MAP.businessAws.public;
    case 'businessAwsPrivate':
      return WS_BASE_URL_MAP.businessAws.private;
    case 'businessDemoPublic':
      return WS_BASE_URL_MAP.businessDemo.public;
    case 'businessDemoPrivate':
      return WS_BASE_URL_MAP.businessDemo.private;
    default: {
      const errorMessage = 'getWsUrl(): Unhandled wsKey: ';
      logger.error(errorMessage, {
        category: 'okx-ws',
        wsKey,
      });
      throw neverGuard(wsKey, errorMessage);
    }
  }
}

export function getMaxTopicsPerSubscribeEvent(
  market: APIMarket,
): number | null {
  switch (market) {
    case 'prod':
    case 'aws':
    case 'demo':
    case 'business':
    case 'businessDemo':
    case 'businessAws': {
      return null;
    }
    default: {
      throw neverGuard(market, 'getWsKeyForTopic(): Unhandled market');
    }
  }
}

export function isWsPong(event: unknown): boolean {
  return (
    typeof event === 'object' &&
    !!event &&
    'data' in event &&
    typeof event['data'] === 'string' &&
    event['data'] === 'pong'
  );
}

export const WS_EVENT_CODE_ENUM = {
  OK: '0',
  LOGIN_FAILED: '60009',
  LOGIN_PARTIALLY_FAILED: '60022',
};

/**
 * ws.terminate() is undefined in browsers.
 * This only works in node.js, not in browsers.
 * Does nothing if `ws` is undefined. Does nothing in browsers.
 */
export function safeTerminateWs(
  ws?: WebSocket | any,
  fallbackToClose?: boolean,
): boolean {
  if (!ws) {
    return false;
  }
  if (typeof ws['terminate'] === 'function') {
    ws.terminate();
    return true;
  } else if (fallbackToClose) {
    ws.close();
  }

  return false;
}
