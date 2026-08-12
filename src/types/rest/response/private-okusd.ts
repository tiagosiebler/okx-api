export interface OkusdLimitBucket {
  personalDailyLimit: string;
  personalUsedAmt: string;
  platformDailyLimit: string;
  platformUsedAmt: string;
  feeRate?: string;
}

export interface OkusdSubLimit extends OkusdLimitBucket {
  maxSubAmt: string;
}

export interface OkusdLimits {
  subLimit: OkusdSubLimit;
  fastRedeemLimit: OkusdLimitBucket;
  stdRedeemLimit: OkusdLimitBucket;
  ts: string;
}

export interface OkusdSubscribeResult {
  ordId: string;
  clOrdId: string;
  ccy: string;
  amt: string;
  okusdAmt: string;
  state: string;
  ts: string;
}

export interface OkusdRedeemResult {
  ordId: string;
  clOrdId: string;
  ccy: string;
  amt: string;
  fee: string;
  usdtAmt: string;
  redeemType: string;
  state: string;
  estSettlementTime: string;
  ts: string;
}
