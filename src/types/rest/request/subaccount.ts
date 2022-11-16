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
