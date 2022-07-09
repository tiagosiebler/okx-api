import { createHmac } from 'crypto';

export function signMessage(message: string, secret: string): string {
  return createHmac('sha256', secret).update(message).digest('base64');
}
