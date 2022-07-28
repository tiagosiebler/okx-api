import { MISSING_CREDENTIALS_ERROR } from '../src/util/BaseRestClient';

export function successResponseList() {
  return expect.any(Array);
}

export function successResponseObject() {
  return expect.any(Object);
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
