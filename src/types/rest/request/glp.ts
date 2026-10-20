export type GlpProgram = 'SPOT' | 'PERP' | 'FUT_NTO';

export interface GetGlpHistoricalPerformanceRequest {
  program: GlpProgram;
  begin?: string;
  end?: string;
  limit?: string;
}

/**
 * Product and trading-side identifier.
 * `14` SPOT MAKER, `15` FUT_NTO MAKER, `16` PERP MAKER,
 * `17` SPOT TAKER, `18` FUT_NTO TAKER, `19` PERP TAKER.
 */
export type GlpV2BizId = '14' | '15' | '16' | '17' | '18' | '19';

export interface GetGlpV2AssessmentDetailsRequest {
  bizId: GlpV2BizId;
}

export interface GetGlpV2PerformanceHistoryRequest {
  bizId: GlpV2BizId;
}
