export interface CollateralAsset {
  ccy: string;
  amt: string;
  notionalUsd: string;
}

export interface CollateralAssetsResponse {
  assets: CollateralAsset[];
}

export interface SupplementaryCollateral {
  ccy: string;
  amt: string;
}

export interface MaxLoanRequest {
  borrowCcy: string;
  supCollateral?: SupplementaryCollateral[];
}

export interface MaxLoanResponse {
  borrowCcy: string;
  maxLoan: string;
  notionalUsd: string;
  remainingQuota: string;
}

export interface AdjustCollateralRequest {
  type: 'add' | 'reduce';
  collateralCcy: string;
  collateralAmt: string;
}

export interface LoanCurrencyData {
  ccy: string;
  amt: string;
}

export interface RiskWarningData {
  instId: string;
  liqPx: string;
}

export interface LoanInfo {
  loanNotionalUsd: string;
  loanData: LoanCurrencyData[];
  collateralNotionalUsd: string;
  collateralData: LoanCurrencyData[];
  riskWarningData: RiskWarningData;
  curLTV: string;
  marginCallLTV: string;
  liqLTV: string;
}

export interface LoanHistoryRequest {
  type?:
    | 'borrowed'
    | 'repaid'
    | 'collateral_locked'
    | 'collateral_released'
    | 'forced_repayment_buy'
    | 'forced_repayment_sell'
    | 'forced_liquidation'
    | 'partial_liquidation';
  after?: string;
  before?: string;
  limit?: string;
}

export interface LoanHistoryItem {
  refId: string;
  type: string;
  ccy: string;
  amt: string;
  ts: string;
}

export interface AccruedInterestRequest {
  ccy?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AccruedInterestItem {
  refId: string;
  ccy: string;
  loan: string;
  interest: string;
  interestRate: string;
  ts: string;
}
