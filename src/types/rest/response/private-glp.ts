export interface GlpMakerTaker {
  maker: string;
  taker: string;
}

export interface GlpVolumeBuckets {
  typeA: GlpMakerTaker | null;
  typeBTotal: GlpMakerTaker | null;
  tradfiX2: GlpMakerTaker | null;
  total: GlpMakerTaker;
}

export interface GlpShareBuckets {
  typeA: GlpMakerTaker | null;
  typeBAdj: GlpMakerTaker | null;
  total: GlpMakerTaker;
}

export interface GlpDailyMetrics {
  volume: GlpVolumeBuckets;
  share: GlpShareBuckets;
}

export interface GlpMtdMetrics extends GlpDailyMetrics {
  mtdStatus: string;
  qualifyingShare: GlpMakerTaker;
}

export interface GlpProgramPerformance {
  program: string;
  marketMakerBusinessId: string;
  enrollmentStatus: string;
  marketMakerLevelId: string;
  enrolledTierDisplay: string;
  qualifyingPool: string;
  qualifyingRows: string[];
  daily: GlpDailyMetrics;
  mtd: GlpMtdMetrics;
}

export interface GlpTodayPerformance {
  dataReady: boolean;
  dataDate: string;
  account: {
    masterAccountId: string;
    combinedAccountIds: string[];
  };
  programs: GlpProgramPerformance[];
}

export interface GlpHistoricalPerformanceItem {
  date: string;
  volume: GlpVolumeBuckets;
  share: GlpShareBuckets;
}

export type GlpV2Program = 'GLP_A' | 'GLP_B';

export type GlpV2Side = 'MAKER' | 'TAKER';

export type GlpV2Instrument = 'SPOT' | 'PERP' | 'FUT_NTO';

/** Estimated or assessed tier outcome. Empty string when unavailable. */
export type GlpV2TierOutcome =
  | ''
  | 'disqualify'
  | 'downgrade'
  | 'qualify'
  | 'upgrade';

export type GlpV2AssessPeriod = 'PREVIOUS' | 'CURRENT';

export interface GlpV2TierRequirement {
  /** GLP tier name. */
  tier: string;
  /**
   * Required market share as a decimal fraction. `"0.007"` = 0.7%.
   * `null` when unavailable.
   */
  share: string | null;
}

export interface GlpV2OverviewPerformance {
  /** Trading date. Unix timestamp in milliseconds. */
  date: string;
  /** Assessment period containing this trading date. */
  assessPeriod: GlpV2AssessPeriod;
  /** Week-to-date market share as a decimal fraction. `null` when unavailable. */
  share: string | null;
  /** Week-to-date trading volume. `null` when unavailable. */
  vol: string | null;
}

export interface GlpV2OverviewProgram {
  /**
   * Product and trading-side identifier.
   * `14` SPOT MAKER, `15` FUT_NTO MAKER, `16` PERP MAKER,
   * `17` SPOT TAKER, `18` FUT_NTO TAKER, `19` PERP TAKER.
   */
  bizId: string;
  /** GLP program name. */
  program: GlpV2Program;
  side: GlpV2Side;
  /** `SPOT` spot, `PERP` perpetuals, `FUT_NTO` expiry futures and Nitro. */
  instrument: GlpV2Instrument;
  /** GLP tier currently in effect. Empty string when unavailable. */
  currentTier: string;
  /** Estimated GLP tier from the latest assessment. Empty string when unavailable. */
  estNextTier: string;
  /** Estimated tier outcome. Empty string when unavailable. */
  estNextStatus: GlpV2TierOutcome;
  /**
   * Earliest date a downgrade can take effect. Unix timestamp in milliseconds.
   * Empty string when not applicable.
   */
  gracePeriodEndTime: string;
  /** Market-share thresholds for GLP tiers. */
  requirement: GlpV2TierRequirement[];
  /** Week-to-date performance by trading date. */
  performance: GlpV2OverviewPerformance[];
}

export interface GlpV2Overview {
  /** Active GLP enrollments. Empty array when none available. */
  programs: GlpV2OverviewProgram[];
}

export interface GlpV2AssessmentPerformance {
  /** Trading date. Unix timestamp in milliseconds. */
  date: string;
  /** Daily trading volume before weighting. `null` when unavailable. */
  origVol: string | null;
  /** Daily market share as a decimal fraction. `null` when unavailable. */
  origShare: string | null;
  /** Adjusted daily trading volume. `null` when unavailable. */
  adjVol: string | null;
  /** Adjusted daily market share as a decimal fraction. `null` when unavailable. */
  adjShare: string | null;
  /** Week-to-date trading volume before weighting. `null` when unavailable. */
  accOrigVol: string | null;
  /** Week-to-date market share as a decimal fraction. `null` when unavailable. */
  accOrigShare: string | null;
  /** Adjusted week-to-date trading volume. `null` when unavailable. */
  accAdjVol: string | null;
  /** Adjusted week-to-date market share as a decimal fraction. `null` when unavailable. */
  accAdjShare: string | null;
}

export interface GlpV2AssessmentDetails {
  /** Start of the assessment period. Unix timestamp in milliseconds. */
  assessStartTime: string;
  /** End of the assessment period. Unix timestamp in milliseconds. */
  assessEndTime: string;
  /** Daily and week-to-date performance. Empty array when no data available. */
  performance: GlpV2AssessmentPerformance[];
}

export interface GlpV2PerformanceHistoryItem {
  /** Start of the assessment period. Unix timestamp in milliseconds. */
  assessStartTime: string;
  /** End of the assessment period. Unix timestamp in milliseconds. */
  assessEndTime: string;
  /** GLP tier used for this assessment. */
  tier: string;
  /** Tier determined by this assessment. Empty string when unavailable. */
  nextTier: string;
  /** Trading volume for the assessment period before weighting. `null` when unavailable. */
  accOrigVol: string | null;
  /** Market share for the assessment period as a decimal fraction. `null` when unavailable. */
  accOrigShare: string | null;
  /** Adjusted trading volume for the assessment period. `null` when unavailable. */
  accAdjVol: string | null;
  /** Adjusted market share for the assessment period as a decimal fraction. `null` when unavailable. */
  accAdjShare: string | null;
  /** Tier outcome. Empty string when unavailable. */
  assessResult: GlpV2TierOutcome;
}

export interface GlpV2PerformanceHistory {
  /** Weekly assessment results. Empty array when no history available. */
  performance: GlpV2PerformanceHistoryItem[];
}
