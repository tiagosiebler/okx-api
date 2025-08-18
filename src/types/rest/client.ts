import { APIMarket } from '../shared.js';

export interface RestClientOptions {
  apiKey?: string;
  apiSecret?: string;
  apiPass?: string;

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

  // Default: false. If true, we'll throw errors if any params are undefined
  strict_param_validation?: boolean;

  // Optionally override API protocol + domain.
  // Note: to use my.okx or app.okx or eea.okx or us.okx, use the "market" parameter
  // e.g 'https://eea.okx.com'
  baseUrl?: string;

  // Default: true. whether to try and post-process request exceptions.
  parse_exceptions?: boolean;

  /**
   * Enable keep alive for REST API requests (via axios).
   */
  keepAlive?: boolean;

  /**
   * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
   * Only relevant if keepAlive is set to true.
   * Default: 1000 (defaults comes from https agent)
   */
  keepAliveMsecs?: number;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;
}
