export interface CreateSignalResult {
  signalChanId: string;
  signalToken: string;
}

export interface GetSignalsResult {
  signalChanId: string;
  signalChanName: string;
  signalChanDesc: string;
  signalChanToken: string;
  signalSourceType: string;
}

export interface CreateSignalBotResult {
  algoId: string;
  algoClOrdId: string;
  sCode: string;
  sMsg: string;
}

export interface CancelSignalBotsResult {
  algoId: string;
  sCode: string;
  sMsg: string;
}
