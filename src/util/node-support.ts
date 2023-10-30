import * as CryptoJS from 'crypto-js'

export function signMessage(message: string, secret: string): string {
  const sha256 = CryptoJS.HmacSHA256(message, secret)
  return CryptoJS.enc.Base64.stringify(sha256);
}
