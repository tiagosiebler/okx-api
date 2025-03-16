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
  msg: string,
) {
  return {
    code,
    data,
    msg,
  };
}

const WRONG_PERMISSION_ERROR_MATCHER = /permission/gim;
const WRONG_PERMISSION_ERROR_ID = '50120';

export function permissionErrorResponse() {
  return expect.objectContaining({
    code: WRONG_PERMISSION_ERROR_ID,
    msg: expect.stringMatching(WRONG_PERMISSION_ERROR_MATCHER),
  });
}

export function minimumAssetRequirementError() {
  return errorResponseObject(
    '70006',
    [],
    expect.stringMatching(/minimum asset requirement/gim),
  );
}

export function algoIdParamError() {
  return errorResponseObject('51000', [], expect.stringMatching(/algoId/gim));
}

export function notAuthenticatedError() {
  return new Error(MISSING_CREDENTIALS_ERROR);
}
