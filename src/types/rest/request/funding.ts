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
  /**
   * Address type:
   * - 1: wallet address, email, phone, or login account name
   * - 2: UID (only for whitelisted users; applicable only when dest=3)
   */
  toAddrType?: '1' | '2';
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

export interface GetDepositHistoryRequest {
  ccy?: string; // Currency, e.g. BTC
  depId?: string; // Deposit ID
  fromWdId?: string; // Internal transfer initiator's withdrawal ID
  txId?: string; // Hash record of the deposit
  type?: '3' | '4'; // Deposit Type: 3=internal transfer, 4=deposit from chain
  state?: '0' | '1' | '2' | '8' | '11' | '12' | '13' | '14' | '17'; // Status of deposit
  after?: string; // Pagination of data to return records earlier than the requested ts (Unix timestamp in milliseconds)
  before?: string; // Pagination of data to return records newer than the requested ts (Unix timestamp in milliseconds)
  limit?: string; // Number of results per request. Max is 100; default is 100
}
