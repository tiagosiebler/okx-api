import { APIMarket } from '../shared';

export interface RestClientOptions {
  apiKey?: string;
  apiSecret?: string;
  apiPass?: string;

  market?: APIMarket;

  // Default: false. If true, we'll throw errors if any params are undefined
  strict_param_validation?: boolean;

  // Optionally override API protocol + domain
  // e.g 'https://api.bytick.com'
  baseUrl?: string;

  // Default: true. whether to try and post-process request exceptions.
  parse_exceptions?: boolean;
}
