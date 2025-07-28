import { APIMarket, WebsocketClientOptions, WsChannel } from '../types';
import { WSAPIRequestOKX } from '../types/websockets/ws-api';
import { DefaultLogger } from './logger';
import { neverGuard } from './typeGuards';

export const WS_LOGGER_CATEGORY = { category: 'okx-ws' };

export const WS_BASE_URL_MAP: Record<
  APIMarket,
  Record<'live' | 'demo', Record<'public' | 'private' | 'business', string>>
> = {
  prod: {
    live: {
      public: 'wss://ws.okx.com:8443/ws/v5/public',
      private: 'wss://ws.okx.com:8443/ws/v5/private',
      // Some channels require business suffix: https://www.okx.com/help/changes-to-v5-api-websocket-subscription-parameter-and-url
      business: 'wss://ws.okx.com:8443/ws/v5/business',
    },
    demo: {
      public: 'wss://wspap.okx.com:8443/ws/v5/public',
      private: 'wss://wspap.okx.com:8443/ws/v5/private',
      business: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
    },
  },
  // Exactly the same as "prod"
  // also known as "www.okx.com", the default: https://www.okx.com/docs-v5/en/#overview-production-trading-services
  GLOBAL: {
    live: {
      public: 'wss://ws.okx.com:8443/ws/v5/public',
      private: 'wss://ws.okx.com:8443/ws/v5/private',
      // Some channels require business suffix: https://www.okx.com/help/changes-to-v5-api-websocket-subscription-parameter-and-url
      business: 'wss://ws.okx.com:8443/ws/v5/business',
    },
    demo: {
      public: 'wss://wspap.okx.com:8443/ws/v5/public',
      private: 'wss://wspap.okx.com:8443/ws/v5/private',
      business: 'wss://wspap.okx.com:8443/ws/v5/business?brokerId=9999',
    },
  },
  // also known as "my.okx.com" https://my.okx.com/docs-v5/en/#overview-production-trading-services
  EEA: {
    live: {
      public: 'wss://wseea.okx.com:8443/ws/v5/public',
      private: 'wss://wseea.okx.com:8443/ws/v5/private',
      // Some channels require business suffix: https://www.okx.com/help/changes-to-v5-api-websocket-subscription-parameter-and-url
      business: 'wss://wseea.okx.com:8443/ws/v5/business',
    },
    demo: {
      public: 'wss://wseeapap.okx.com:8443/ws/v5/public',
      private: 'wss://wseeapap.okx.com:8443/ws/v5/private',
      business: 'wss://wseeapap.okx.com:8443/ws/v5/business?brokerId=9999',
    },
  },
  // also known as "app.okx.com" https://app.okx.com/docs-v5/en/#overview-production-trading-services
  US: {
    live: {
      public: 'wss://wsus.okx.com:8443/ws/v5/public',
      private: 'wss://wsus.okx.com:8443/ws/v5/private',
      // Some channels require business suffix: https://www.okx.com/help/changes-to-v5-api-websocket-subscription-parameter-and-url
      business: 'wss://wsus.okx.com:8443/ws/v5/business',
    },
    demo: {
      public: 'wss://wsuspap.okx.com:8443/ws/v5/public',
      private: 'wss://wsuspap.okx.com:8443/ws/v5/private',
      business: 'wss://wsuspap.okx.com:8443/ws/v5/business?brokerId=9999',
    },
  },
};

export const WS_KEY_MAP = {
  // OKX Global: https://www.okx.com/docs-v5/en/#overview-production-trading-services
  prodPublic: 'prodPublic',
  prodPrivate: 'prodPrivate',
  prodBusiness: 'prodBusiness',
  prodDemoPublic: 'prodDemoPublic',
  prodDemoPrivate: 'prodDemoPrivate',
  prodDemoBusiness: 'prodDemoBusiness',
  // Also known as "my.okx.com" https://my.okx.com/docs-v5/en/#overview-production-trading-services
  eeaLivePublic: 'eeaLivePublic',
  eeaLivePrivate: 'eeaLivePrivate',
  eeaLiveBusiness: 'eeaLiveBusiness',
  eeaDemoPublic: 'eeaDemoPublic',
  eeaDemoPrivate: 'eeaDemoPrivate',
  eeaDemoBusiness: 'eeaDemoBusiness',
  // Also known as "app.okx.com" https://app.okx.com/docs-v5/en/#overview-production-trading-services
  usLivePublic: 'usLivePublic',
  usLivePrivate: 'usLivePrivate',
  usLiveBusiness: 'usLiveBusiness',
  usDemoPublic: 'usDemoPublic',
  usDemoPrivate: 'usDemoPrivate',
  usDemoBusiness: 'usDemoBusiness',
} as const;

/** This is used to differentiate between each of the available websocket streams (as bybit has multiple websockets) */
export type WsKey = (typeof WS_KEY_MAP)[keyof typeof WS_KEY_MAP];

export const PRIVATE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPrivate,
  WS_KEY_MAP.prodBusiness,
  WS_KEY_MAP.prodDemoPrivate,
  WS_KEY_MAP.prodDemoBusiness,
  WS_KEY_MAP.eeaLivePrivate,
  WS_KEY_MAP.eeaLiveBusiness,
  WS_KEY_MAP.eeaDemoPrivate,
  WS_KEY_MAP.eeaDemoBusiness,
  WS_KEY_MAP.usLivePrivate,
  WS_KEY_MAP.usLiveBusiness,
  WS_KEY_MAP.usDemoPrivate,
  WS_KEY_MAP.usDemoBusiness,
];

export const PUBLIC_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPublic,
  WS_KEY_MAP.prodDemoPublic,
  WS_KEY_MAP.eeaLivePublic,
  WS_KEY_MAP.eeaDemoPublic,
  WS_KEY_MAP.usLivePublic,
  WS_KEY_MAP.usDemoPublic,
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
  'candle1s',
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

/**
 * Returns wsKey for product group. Demo resolution is handled in URL lookup function, separately.
 */
export function getWsKeyForMarket(
  market: APIMarket,
  isPrivate: boolean,
  isBusinessChannel: boolean,
): WsKey {
  switch (market) {
    case 'prod':
    case 'GLOBAL': {
      if (isBusinessChannel) {
        return WS_KEY_MAP.prodBusiness;
      }
      return isPrivate ? WS_KEY_MAP.prodPrivate : WS_KEY_MAP.prodPublic;
    }
    case 'EEA': {
      if (isBusinessChannel) {
        return WS_KEY_MAP.eeaLiveBusiness;
      }
      return isPrivate ? WS_KEY_MAP.eeaLivePrivate : WS_KEY_MAP.eeaLivePublic;
    }
    case 'US': {
      if (isBusinessChannel) {
        return WS_KEY_MAP.usLiveBusiness;
      }
      return isPrivate ? WS_KEY_MAP.usLivePrivate : WS_KEY_MAP.usLivePublic;
    }
    default: {
      throw neverGuard(
        market,
        `getWsKeyForTopic(): Unhandled market "${market}"`,
      );
    }
  }
}

/**
 * Maps a WS key back to a WS URL. Resolves to demo wsKey automatically, if configured.
 */
export function getWsUrlForWsKey(
  wsKey: WsKey,
  wsClientOptions: WebsocketClientOptions,
  logger: typeof DefaultLogger,
): string {
  if (wsClientOptions.wsUrl) {
    return wsClientOptions.wsUrl;
  }
  const isDemoTrading = !!wsClientOptions?.demoTrading;
  const LIVE_OR_DEMO: 'live' | 'demo' = isDemoTrading ? 'demo' : 'live';
  switch (wsKey) {
    // Global (www.okx.com)
    case 'prodPublic':
    case 'prodDemoPublic':
      return WS_BASE_URL_MAP.GLOBAL[LIVE_OR_DEMO].public;
    case 'prodPrivate':
    case 'prodDemoPrivate':
      return WS_BASE_URL_MAP.GLOBAL[LIVE_OR_DEMO].private;
    case 'prodBusiness':
    case 'prodDemoBusiness':
      return WS_BASE_URL_MAP.GLOBAL[LIVE_OR_DEMO].business;
    // EEA (my.okx.com)
    case 'eeaLivePublic':
    case 'eeaDemoPublic':
      return WS_BASE_URL_MAP.EEA[LIVE_OR_DEMO].public;
    case 'eeaLivePrivate':
    case 'eeaDemoPrivate':
      return WS_BASE_URL_MAP.EEA[LIVE_OR_DEMO].private;
    case 'eeaLiveBusiness':
    case 'eeaDemoBusiness':
      return WS_BASE_URL_MAP.EEA[LIVE_OR_DEMO].business;
    // US (app.okx.com)
    case 'usLivePublic':
    case 'usDemoPublic':
      return WS_BASE_URL_MAP.US[LIVE_OR_DEMO].public;
    case 'usLivePrivate':
    case 'usDemoPrivate':
      return WS_BASE_URL_MAP.US[LIVE_OR_DEMO].private;
    case 'usLiveBusiness':
    case 'usDemoBusiness':
      return WS_BASE_URL_MAP.US[LIVE_OR_DEMO].business;
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

export function getMaxTopicsPerSubscribeEventForMarket(
  market: APIMarket,
): number | null {
  switch (market) {
    case 'prod':
    case 'EEA':
    case 'GLOBAL':
    case 'US': {
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
 * #305: ws.terminate() is undefined in browsers.
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

/**
 * Normalised internal format for a request (subscribe/unsubscribe/etc) on a topic, with optional parameters.
 *
 * - Topic: the topic this event is for
 * - Payload: the parameters to include, optional. E.g. auth requires key + sign. Some topics allow configurable parameters.
 */
export interface WsTopicRequest<
  TWSTopic extends string = string,
  TWSPayload = unknown,
> {
  topic: TWSTopic;
  payload?: TWSPayload;
}

/**
 * Conveniently allow users to request a topic either as string topics or objects (containing string topic + params)
 */
export type WsTopicRequestOrStringTopic<
  TWSTopic extends string,
  TWSPayload = unknown,
> = WsTopicRequest<TWSTopic, TWSPayload> | string;

/**
 * Users can conveniently pass topics as strings or objects (object has topic name + optional params).
 *
 * This method normalises topics into objects (object has topic name + optional params).
 */
export function getNormalisedTopicRequests(
  wsTopicRequests: WsTopicRequestOrStringTopic<string>[],
): WsTopicRequest<string>[] {
  const normalisedTopicRequests: WsTopicRequest<string>[] = [];

  for (const wsTopicRequest of wsTopicRequests) {
    // passed as string, convert to object
    if (typeof wsTopicRequest === 'string') {
      const topicRequest: WsTopicRequest<string> = {
        topic: wsTopicRequest,
        payload: undefined,
      };
      normalisedTopicRequests.push(topicRequest);
      continue;
    }

    // already a normalised object, thanks to user
    normalisedTopicRequests.push(wsTopicRequest);
  }
  return normalisedTopicRequests;
}

/**
 * WebSocket.ping() is not available in browsers. This is a simple check used to
 * disable heartbeats in browers, for exchanges that use native WebSocket ping/pong frames.
 */
export function isWSPingFrameAvailable(): boolean {
  return typeof (WebSocket.prototype as any)['ping'] === 'function';
}

/**
 * WebSocket.pong() is not available in browsers. This is a simple check used to
 * disable heartbeats in browers, for exchanges that use native WebSocket ping/pong frames.
 */
export function isWSPongFrameAvailable(): boolean {
  return typeof (WebSocket.prototype as any)['pong'] === 'function';
}

/**
 * WS API promises are stored using a primary key. This key is constructed using
 * properties found in every request & reply.
 */
export function getPromiseRefForWSAPIRequest(
  requestEvent: WSAPIRequestOKX<unknown>,
): string {
  // Responses don't have any other info we can use to connect them to the request. Just the "id" field...
  const promiseRef = [requestEvent.id].join('_');
  return promiseRef;
}
