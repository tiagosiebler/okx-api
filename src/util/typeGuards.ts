import { APIResponse } from '../types/rest';

export function isRawAPIResponse(
  response: unknown
): response is APIResponse<unknown> {
  if (typeof response !== 'object' || !response) {
    return false;
  }

  if ('code' in response && 'msg' in response && 'data' in response) {
    return true;
  }

  return false;
}
