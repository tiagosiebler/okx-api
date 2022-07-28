export interface SubAccount {
  enable: boolean;
  subAcct: string;
  type: string;
  label: string;
  mobile: string;
  gAuth: boolean;
  canTransOut: boolean;
  ts: string;
}

export interface SubAccountAPIReset {
  subAcct: string;
  label: string;
  apiKey: string;
  perm: string;
  ip: string;
  ts: string;
}

export interface SubAccountBalanceDetail {
  availBal: string;
  availEq: string;
  cashBal: string;
  ccy: string;
  crossLiab: string;
  disEq: string;
  eq: string;
  eqUsd: string;
  frozenBal: string;
  interest: string;
  isoEq: string;
  isoLiab: string;
  liab: string;
  maxLoan: string;
  mgnRatio: string;
  notionalLever: string;
  ordFrozen: string;
  twap: string;
  uTime: string;
  upl: string;
  uplLiab: string;
}

export interface SubAccountBalances {
  adjEq: string;
  details: SubAccountBalanceDetail[];
  imr: string;
  isoEq: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  ordFroz: string;
  totalEq: string;
  uTime: string;
}

export interface SubAccountTransferResult {
  transId: string;
}
