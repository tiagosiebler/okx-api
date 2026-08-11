export type AffiliatePeriodType =
  | 'last_7d'
  | 'last_30d'
  | 'this_month'
  | 'last_month'
  | 'total'
  | 'today'
  | 'this_week'
  | 'custom';

export type AffiliateCommissionCategory = 'SPOT' | 'DERIVATIVE' | 'BSC';

export type AffiliateKycStatus = 'unverified' | 'verified';

export type AffiliateLinkType = 'standard' | 'co_inviter';

export type AffiliateLinkStatus = 'normal' | 'abnormal';

export type AffiliateInviteeListOrderBy =
  | 'cTime'
  | 'depAmt'
  | 'vol'
  | 'fee'
  | 'rebate';

export type AffiliateSubAffiliateListOrderBy =
  | 'cTime'
  | 'depAmt'
  | 'vol'
  | 'fee'
  | 'rebate';

export type AffiliateOrderDir = 'asc' | 'desc';

export interface GetAffiliatePerformanceSummaryRequest {
  periodType?: AffiliatePeriodType;
  /** Required when periodType=custom, together with end. Inclusive. */
  begin?: string;
  /** Required when periodType=custom, together with begin. Inclusive. */
  end?: string;
}

export interface GetInviteeDetailRequest {
  uid: string;
  /**
   * Stats window for `volPeriod`: last_7d, last_30d, this_month, last_month, total, today, this_week.
   * When omitted, volPeriod is not returned.
   */
  periodType?: Exclude<AffiliatePeriodType, 'custom'>;
}

export interface GetAffiliateInviteeListRequest {
  page?: string;
  limit?: string;
  periodType?: AffiliatePeriodType;
  /** Required when periodType=custom, together with end. Inclusive. */
  begin?: string;
  /** Required when periodType=custom, together with begin. Inclusive. */
  end?: string;
  keyword?: string;
  commissionCategory?: AffiliateCommissionCategory;
  orderBy?: AffiliateInviteeListOrderBy;
  orderDir?: AffiliateOrderDir;
  kycStatus?: AffiliateKycStatus;
  subAffiliateUid?: string;
  /** External user UIDs for exact match. Single or up to 100 comma-separated. */
  uid?: string;
  /** Filter lower bound on joinTime (Unix ms). Required with joinTimeEnd; max 90d span, not older than 180d. */
  joinTimeBegin?: string;
  /** Filter upper bound on joinTime (Unix ms). Required with joinTimeBegin. */
  joinTimeEnd?: string;
}

export interface GetAffiliateLinkListRequest {
  page?: string;
  limit?: string;
  linkType?: AffiliateLinkType;
  linkStatus?: AffiliateLinkStatus;
}

export interface GetAffiliateCoInviterLinkListRequest {
  page?: string;
  limit?: string;
  linkStatus?: AffiliateLinkStatus;
}

export interface GetAffiliateSubAffiliateListRequest {
  page?: string;
  limit?: string;
  keyword?: string;
  commissionCategory?: AffiliateCommissionCategory;
  orderBy?: AffiliateSubAffiliateListOrderBy;
  orderDir?: AffiliateOrderDir;
}
