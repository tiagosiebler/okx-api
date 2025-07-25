export interface APICredentials {
  apiKey: string;
  apiSecret: string;
  apiPass: string;
}

export type APIMarket =
  | 'prod' // same as GLOBAL. Kept for some backwards compatibility
  // also known as "www.okx.com" or OKX Global: https://www.okx.com/docs-v5/en/#overview-production-trading-services
  | 'GLOBAL'
  // also known as "my.okx.com" https://my.okx.com/docs-v5/en/#overview-production-trading-services
  | 'EEA'
  // also known as "app.okx.com" https://app.okx.com/docs-v5/en/#overview-production-trading-services
  | 'US';

// Some channels require business suffix: https://www.okx.com/help/changes-to-v5-api-websocket-subscription-parameter-and-url
// TODO: automatic routing to business suffix? this shouldn't be here as a "market"
// | 'business'
// | 'businessDemo'
