import { ASSET_BILL_TYPE } from '../../../constants';

export interface FundingCurrency {
  canDep: boolean;
  canInternal: boolean;
  canWd: boolean;
  ccy: string;
  chain: string;
  logoLink: string;
  mainNet: boolean;
  maxFee: string;
  maxWd: string;
  minDep: string;
  minDepArrivalConfirm: string;
  minFee: string;
  minWd: string;
  minWdUnlockConfirm: string;
  name: string;
  needTag: boolean;
  usedWdQuota: string;
  wdQuota: string;
  wdTickSz: string;
}

export interface FundingBalance {
  availBal: string;
  bal: string;
  ccy: string;
  frozenBal: string;
}

export interface AccountAssetValuation {
  details: {
    classic: string;
    earn: string;
    funding: string;
    trading: string;
  };
  totalBal: string;
  ts: string;
}

export interface FundTransferResult {
  transId: string;
  ccy: string;
  clientId: string;
  from: string;
  amt: string;
  to: string;
}
export interface FundTransferState {
  amt: string;
  ccy: string;
  clientId: string;
  from: string;
  instId: never; // deprecated
  state: string;
  subAcct: string;
  to: string;
  toInstId: never; // deprecated
  transId: string;
  type: string;
}

export interface AssetBillDetails {
  billId: string;
  ccy: string;
  clientId: string;
  balChg: string;
  bal: string;
  type: `${ASSET_BILL_TYPE}`;
  ts: string;
}

export interface WithdrawResponse {
  ccy: string,
  chain: string,
  amt: string,
  wdId: string,
  clientId: string,
}