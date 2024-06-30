type AccountType = '6' | '18';

export interface SubAccountTransferRequest {
  ccy: string;
  amt: string;
  from: AccountType;
  to: AccountType;
  fromSubAccount: string;
  toSubAccount: string;
  loanTrans?: boolean;
  omitPosRisk?: boolean;
}

export interface GetSubAccountMaxWithdrawalsRequest {
  subAcct: string;
  ccy?: string;
}

export interface GetManagedSubAccountTransferHistoryRequest {
  ccy?: string;
  type?: '0' | '1';
  subAcct?: string;
  subUid?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface LoanAllocation {
  subAcct: string;
  loanAlloc: string;
}

export interface SetSubAccountLoanAllocationRequest {
  enable: boolean;
  alloc?: LoanAllocation[];
}
