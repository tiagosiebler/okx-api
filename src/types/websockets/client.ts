import { APICredentials, APIMarket } from '../shared';

export interface WSClientConfigurableOptions {
  accounts?: APICredentials[];

  /**
   * The API group this client should connect to:
   * market: 'prod' (default)
   * market: 'aws'
   * market: 'demo'
   */
  market?: APIMarket;

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
