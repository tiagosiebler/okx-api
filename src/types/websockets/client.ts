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

  pongTimeout?: number;
  pingInterval?: number;
  reconnectTimeout?: number;
  requestOptions?: any;
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
}
