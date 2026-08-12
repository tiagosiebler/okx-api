export type GlpProgram = 'SPOT' | 'PERP' | 'FUT_NTO';

export interface GetGlpHistoricalPerformanceRequest {
  program: GlpProgram;
  begin?: string;
  end?: string;
  limit?: string;
}
