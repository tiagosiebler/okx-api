import {
  APIMarket,
  WebsocketClientOptions,
  WsChannel,
  WsPrivateChannel,
} from '../types';
import { neverGuard } from './typeGuards';

/** This is used to differentiate between each of the available websocket streams (as bybit has multiple websockets) */
export type WsKey = typeof WS_KEY_MAP[keyof typeof WS_KEY_MAP];

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
} as const;

export const PRIVATE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPrivate,
  WS_KEY_MAP.awsPrivate,
  WS_KEY_MAP.demoPrivate,
];

export const PUBLIC_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.prodPublic,
  WS_KEY_MAP.awsPublic,
  WS_KEY_MAP.demoPublic,
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

/** Determine which WsKey (ws connection) to route an event to */
export function getWsKeyForTopicChannel(
  market: APIMarket,
  channel: WsChannel,
  isPrivate?: boolean
): WsKey {
  const isPrivateTopic =
    isPrivate === true || PRIVATE_CHANNELS.includes(channel);
  return getWsKeyForMarket(market, isPrivateTopic);
}

export function getWsKeyForMarket(
  market: APIMarket,
  isPrivate: boolean
): WsKey {
  switch (market) {
    case 'prod': {
      return isPrivate ? WS_KEY_MAP.prodPrivate : WS_KEY_MAP.prodPublic;
    }
    case 'aws': {
      return isPrivate ? WS_KEY_MAP.awsPrivate : WS_KEY_MAP.awsPublic;
    }
    case 'demo': {
      return isPrivate ? WS_KEY_MAP.demoPrivate : WS_KEY_MAP.demoPublic;
    }
    default: {
      throw neverGuard(market, `getWsKeyForTopic(): Unhandled market`);
    }
  }
}

/** Maps a WS key back to a WS URL */
export function getWsUrlForWsKey(
  wsKey: WsKey,
  wsClientOptions: WebsocketClientOptions
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
    default: {
      const errorMessage = 'getWsUrl(): Unhandled wsKey: ';
      this.logger.error(errorMessage, {
        category: 'okx-ws',
        wsKey,
      });
      throw neverGuard(wsKey, errorMessage);
    }
  }
}

export function getMaxTopicsPerSubscribeEvent(
  market: APIMarket
): number | null {
  switch (market) {
    case 'prod':
    case 'aws':
    case 'demo': {
      return null;
    }
    default: {
      throw neverGuard(market, `getWsKeyForTopic(): Unhandled market`);
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
