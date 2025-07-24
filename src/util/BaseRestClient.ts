import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import https from 'https';

import { APIResponse, RestClientOptions } from '../types';
import {
  getRestBaseUrl,
  programId,
  programKey,
  serializeParams,
} from './requestUtils';
import { isRawAPIResponse } from './typeGuards';
import { signMessage } from './webCryptoAPI';

// axios.interceptors.request.use((request) => {
//   console.log(new Date(), 'Starting Request', JSON.stringify(request, null, 2));
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   // console.log(new Date(), 'Response:', JSON.stringify(response, null, 2));
//   console.log(
//     new Date(),
//     'Response:',
//     JSON.stringify(
//       {
//         data: response.data,
//         headers: response.headers,
//       },
//       null,
//       2,
//     ),
//   );
//   return response;
// });

export const MISSING_CREDENTIALS_ERROR =
  'Private endpoints require api and secret to be provided in the REST client constructor';

interface SignedRequest<T> {
  requestBody: T | undefined;
  method: Method;
  endpoint: string;
  sign: string;
}

export default abstract class BaseRestClient {
  private options: RestClientOptions;

  private baseUrl: string;

  private globalRequestOptions: AxiosRequestConfig;

  private apiKey: string | undefined;

  private apiSecret: string | undefined;

  private apiPassphrase: string | undefined;

  constructor(
    options: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    // this.environment = environment;

    this.options = {
      // if true, we'll throw errors if any params are undefined
      strict_param_validation: false,
      market: 'prod',
      ...options,
    };

    this.baseUrl = getRestBaseUrl(options.market || 'prod', options);

    const hasOneCredential =
      options.apiKey || options.apiSecret || options.apiPass;
    const hasAllCredentials =
      !!options.apiKey && !!options.apiSecret && !!options.apiPass;

    // Allow empty object
    if (hasOneCredential && !hasAllCredentials) {
      throw new Error(
        'API Key, Secret AND Passphrase are ALL required for private enpoints',
      );
    }

    this.globalRequestOptions = {
      // in ms == 5 minutes by default
      timeout: 1000 * 60 * 5,
      // custom request options based on axios specs - see: https://github.com/axios/axios#request-config
      ...requestOptions,
    };

    if (!this.globalRequestOptions.headers) {
      this.globalRequestOptions.headers = {};
    }

    //  Note: `x-simulated-trading: 1` needs to be added to the header of the Demo Trading request.
    if (options.market === 'demo') {
      this.globalRequestOptions.headers['x-simulated-trading'] = 1;
    }

    this.globalRequestOptions.headers['Content-Type'] = 'application/json';
    this.globalRequestOptions.headers['Accept'] = 'application/json';

    // If enabled, configure a https agent with keepAlive enabled
    if (this.options.keepAlive) {
      // Extract existing https agent parameters, if provided, to prevent the keepAlive flag from overwriting an existing https agent completely
      const existingHttpsAgent = this.globalRequestOptions.httpsAgent as
        | https.Agent
        | undefined;
      const existingAgentOptions = existingHttpsAgent?.options || {};

      // For more advanced configuration, raise an issue on GitHub or use the "requestOptions"
      // parameter to define a custom httpsAgent with the desired properties
      this.globalRequestOptions.httpsAgent = new https.Agent({
        ...existingAgentOptions,
        keepAlive: true,
        keepAliveMsecs: this.options.keepAliveMsecs,
      });
    }

    this.apiKey = options?.apiKey;
    this.apiSecret = options?.apiSecret;
    this.apiPassphrase = options?.apiPass;
  }

  public get(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, true);
  }

  public post(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, true);
  }

  public getPrivate(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, false);
  }

  public postPrivate(endpoint: string, params?: any) {
    return this._call(
      'POST',
      endpoint,
      Array.isArray(params)
        ? params.map((p) => ({ ...p, [programKey]: programId }))
        : { ...params, [programKey]: programId },
      false,
    );
  }

  public deletePrivate(endpoint: string, params?: any) {
    return this._call('DELETE', endpoint, params, false);
  }

  /**
   * Make a HTTP request to a specific endpoint. Private endpoints are automatically signed.
   */
  private async _call(
    method: Method,
    endpoint: string,
    params: object | undefined,
    isPublicApi: boolean,
  ): Promise<any> {
    const options = {
      ...this.globalRequestOptions,
      url: [this.baseUrl, endpoint].join(endpoint.startsWith('/') ? '' : '/'),
      method: method,
      json: true,
    };

    // Delete any params without value
    for (const key in params) {
      if (typeof params[key] === 'undefined') {
        delete params[key];
      }
    }

    const tsISO = new Date().toISOString();
    const signResult = await this.signRequest(
      isPublicApi,
      tsISO,
      method,
      endpoint,
      params,
    );

    if (!options.headers) {
      options.headers = {};
    }

    if (!isPublicApi) {
      options.headers['OK-ACCESS-KEY'] = this.apiKey;
      options.headers['OK-ACCESS-SIGN'] = signResult.sign;
      options.headers['OK-ACCESS-TIMESTAMP'] = tsISO;
      options.headers['OK-ACCESS-PASSPHRASE'] = this.apiPassphrase;
    }

    if (method === 'GET') {
      options.params = signResult.requestBody;
    } else {
      options.data = signResult.requestBody;
    }

    // console.log(new Date(), 'request: ', {
    // url: options.url,
    // method,
    // params: signResult.requestBody,
    // sign: signResult.sign,
    //   options,
    // });

    return axios(options)
      .then((response: AxiosResponse<APIResponse<unknown>>) => {
        // Check this is an API response without an error code.
        // If so, resolve the nested data property, else throw the full response body
        if (
          isRawAPIResponse(response.data) &&
          response.status == 200 &&
          response.data?.code === '0'
        ) {
          return response.data.data;
        }

        // console.log('request: ', JSON.stringify(options, null, 2));
        // console.log(
        //   'bad response: ',
        //   JSON.stringify(
        //     {
        //       data: response.data,
        //       headers: response.headers,
        //     },
        //     null,
        //     2
        //   )
        // );

        // Also throw if API returned error code
        // This API error thrown by the exchange will be post-processed by the exception parser
        throw { response };
      })
      .catch((e) => this.parseException(e));
  }

  /**
   * Sign request
   */
  private async signRequest<T extends object>(
    isPublicApi: boolean,
    tsISO: string,
    method: Method,
    endpoint: string,
    params: T | undefined,
  ): Promise<SignedRequest<T>> {
    const res: SignedRequest<T> = {
      requestBody: params,
      method,
      endpoint,
      sign: '',
    };

    if (isPublicApi) {
      return res;
    }

    if (!this.apiKey || !this.apiSecret || !this.apiPassphrase) {
      throw new Error(MISSING_CREDENTIALS_ERROR);
    }

    const serializedParams = serializeParams(
      params,
      method,
      this.options.strict_param_validation,
    );

    const message = tsISO + method + endpoint + serializedParams;
    // console.log(new Date(), `Sign params: `, {
    //   message,
    //   secret: this.apiSecret,
    // });

    return {
      ...res,
      sign: await signMessage(message, this.apiSecret, 'base64', 'SHA-256'),
    };
  }

  /**
   * Generic handler to parse request exceptions
   */
  private parseException(e: any): unknown {
    if (this.options.parse_exceptions === false) {
      throw e;
    }

    // Something happened in setting up the request that triggered an Error
    if (!e.response) {
      if (!e.request) {
        throw e.message;
      }

      // request made but no response received
      throw e;
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const response: AxiosResponse = e.response;
    throw response.data;
    // throw {
    //   status: response.status,
    //   statusText: response.statusText,
    //   data: response.data,
    //   headers: response.headers,
    //   requestOptions: this.options,
    // };
  }
}
