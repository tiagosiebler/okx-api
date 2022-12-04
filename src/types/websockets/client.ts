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
}

export interface WebsocketClientOptions extends WSClientConfigurableOptions {
  market: APIMarket;
  pongTimeout: number;
  pingInterval: number;
  reconnectTimeout: number;
}
