export interface SubscribeOkusdRequest {
  amt: string;
  clOrdId: string;
}

export interface RedeemOkusdRequest {
  amt: string;
  /** "1" = fast (real-time); "2" = standard (D+5/D+6) */
  redeemType: '1' | '2';
  clOrdId: string;
}
