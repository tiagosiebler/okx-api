import { RestClientOptions } from '../rest';
import { APICredentials, APIMarket } from '../shared';

export interface WSClientConfigurableOptions {
  accounts?: APICredentials[];

  /**
   * The API group this client should connect to:
   * - market: 'prod' (default: connects to OKX global) https://www.okx.com/docs-v5/en/#overview-production-trading-services
   * - market: 'EEA' // also known as "my.okx.com" https://my.okx.com/docs-v5/en/#overview-production-trading-services
   * - market: 'US' // also known as "app.okx.com" https://app.okx.com/docs-v5/en/#overview-production-trading-services
   */
  market?: APIMarket;

  /**
   * Set to `true` to use OKX's demo trading functionality
   */
  demoTrading?: boolean;

  // Disable ping/pong ws heartbeat mechanism (not recommended) // TODO:
  disableHeartbeat?: boolean;

  /** How often to check if the connection is alive */
  pingInterval?: number;

  /** How long to wait for a pong (heartbeat reply) before assuming the connection is dead */
  pongTimeout?: number;

  /** Delay in milliseconds before respawning the connection */
  reconnectTimeout?: number;

  requestOptions?: RestClientOptions;

  wsOptions?: {
    protocols?: string[];
    agent?: any;
  };
  wsUrl?: string;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;
}

export interface WebsocketClientOptions extends WSClientConfigurableOptions {
  market: APIMarket;
  pongTimeout: number;
  pingInterval: number;
  reconnectTimeout: number;
  authPrivateConnectionsOnConnect: boolean;
  authPrivateRequests: boolean;

  /**
   * Whether to use native WebSocket ping/pong frames for heartbeats
   */
  useNativeHeartbeats: boolean;
}
