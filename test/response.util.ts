import { MISSING_CREDENTIALS_ERROR } from '../src/util/BaseRestClient';

export function successResponseList(successMsg: string | null = '') {
  return {
    code: '0',
    msg: successMsg,
    data: expect.any(Array),
  };
}

export function successResponseObject(successMsg: string | null = 'OK') {
  return {
    code: '0',
    msg: successMsg,
    data: expect.any(Object),
  };
}

export function errorResponseObject(
  code: string,
  data: null | any = null,
  msg: string
) {
  return {
    code,
    data,
    msg,
  };
}

export function notAuthenticatedError() {
  return new Error(MISSING_CREDENTIALS_ERROR);
}
