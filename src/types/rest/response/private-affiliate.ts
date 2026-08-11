import type { AffiliateCommissionCategory } from '../request/affiliate.js';

export interface AffiliatePerformanceSummaryDetail {
  commissionCategory: AffiliateCommissionCategory;
  firstTraderCnt: string;
  traderCnt: string;
  vol: string;
  commission: string;
}

export interface AffiliatePerformanceSummary {
  uTime: string;
  inviteeCnt: string;
  depAmt: string;
  details: AffiliatePerformanceSummaryDetail[];
}

export interface InviteeDetail {
  inviteeLevel: string;
  joinTime: string;
  inviteeRebateRate: string;
  totalCommission: string;
  firstTradeTime: string;
  level: string;
  depAmt: string;
  wdAmt: string;
  volMonth: string;
  totalVol: string;
  accFee: string;
  kycTime: string;
  region: string;
  affiliateCode: string;
  /** Trading volume in selected periodType window (USDT). Only when periodType supplied. */
  volPeriod?: string;
}

export type AffiliateInviteeListKycStatus = 'unverified' | 'verified';

export interface AffiliateInviteeListItem {
  uid: string;
  country: string;
  joinTime: string;
  firstTradeTime: string;
  channelName: string;
  rebateRate: string;
  feeTierRank: string;
  kycStatus: AffiliateInviteeListKycStatus;
  kycTime: string;
  depAmt: string;
  totalVol: string;
  totalFee: string;
  totalCommission: string;
  isCompliant: boolean;
}

export type AffiliateLinkListLinkType = 'standard' | 'co_inviter';

export type AffiliateLinkListLinkStatus = 'normal' | 'abnormal';

export interface AffiliateLinkListItem {
  channelId: string;
  channelName: string;
  joinLink: string;
  linkType: AffiliateLinkListLinkType;
  inviterCommissionRate: string;
  coInviterCommissionRate: string;
  inviteeDiscountRate: string;
  inviteeCnt: string;
  traderCnt: string;
  totalCommission: string;
  commission24h: string;
  cTime: string;
  isDefault: boolean;
  linkStatus: AffiliateLinkListLinkStatus;
}

export type AffiliateChannelAssessmentStatus =
  | 'valid'
  | 'not_reach_trade'
  | 'not_reach_invite'
  | 'not_reach_both';

export type AffiliateInviterChannelStatus =
  | 'valid'
  | 'identity_invalid'
  | 'level_downgraded';

export type AffiliateCoInviterChannelStatus =
  | 'valid'
  | 'identity_invalid'
  | 'not_reach_assessment'
  | 'identity_invalid_and_not_reach_assessment';

export interface AffiliateCoInviterLinkListItem {
  channelId: string;
  channelName: string;
  joinLink: string;
  inviterCommissionRate: string;
  coInviterCommissionRate: string;
  inviteeDiscountRate: string;
  parUserName: string;
  coUserName: string;
  isCompliant: boolean;
  note?: string;
  isDefault: boolean;
  totalCommission: string;
  commission24h: string;
  inviteeCnt: string;
  traderCnt: string;
  clickCnt: string;
  totalFee: string;
  cTime: string;
  channelAssessmentStatus: AffiliateChannelAssessmentStatus;
  inviterChannelStatus: AffiliateInviterChannelStatus;
  coInviterChannelStatus: AffiliateCoInviterChannelStatus;
  linkStatus: AffiliateLinkListLinkStatus;
}

export interface AffiliateSubAffiliateListItem {
  subAffiliateUid: string;
  country: string;
  joinTime: string;
  subAffiliateLevel: string;
  commissionRate: string;
  isCompliant: boolean;
  inviteeCnt: string;
  traderCnt: string;
  depAmt: string;
  totalVol: string;
  totalFee: string;
  totalCommission: string;
}
