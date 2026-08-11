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
