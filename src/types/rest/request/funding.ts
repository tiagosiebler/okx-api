export interface FundsTransferRequest {
  ccy: string;
  amt: string;
  from: '6' | '18';
  to: '6' | '18';
  subAcct?: string;
  type?: '0' | '1' | '2' | '3' | '4';
  loanTrans?: boolean;
  clientId?: string;
  omitPosRisk?: string;
}

export interface WithdrawRequest {
  ccy: string;
  amt: string;
  dest: '3' | '4';
  toAddr: string;
  chain?: string;
  areaCode?: string;
  clientId?: string;
  // Recipient information for specific entity users doing on-chain/lightning withdrawal
  rcvrInfo?: {
    // Required: 'exchange' for exchange wallet, 'private' for private wallet
    walletType: 'exchange' | 'private';
    // Exchange ID (required if walletType = 'exchange'). Use '0' if exchange not in list
    exchId?: string;
    // Receiver's first name (required if walletType = 'exchange')
    rcvrFirstName?: string;
    // Receiver's last name (required if walletType = 'exchange')
    rcvrLastName?: string;
    // Recipient's country - English name or ISO 3166-1 two-letter code
    rcvrCountry?: string;
    // State/Province of the recipient
    rcvrCountrySubDivision?: string;
    // Town/city where the recipient is located
    rcvrTownName?: string;
    // Recipient's street address
    rcvrStreetName?: string;
  };
}

export interface FundingRateRequest {
  instId: string;
  before?: string;
  after?: string;
  limit?: string;
}

export interface GetDepositWithdrawStatusRequest {
  wdId?: string;
  txId?: string;
  ccy?: string;
  to?: string;
  chain?: string;
}
