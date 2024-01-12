export interface APICredentials {
  apiKey: string;
  apiSecret: string;
  apiPass: string;
}

export type APIMarket =
  | 'prod'
  | 'business'
  | 'businessAws'
  | 'aws'
  | 'demo'
  | 'businessDemo';
