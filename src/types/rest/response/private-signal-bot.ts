export interface CreateSignalResponse {
  signalChanId: string;
  signalToken: string;
}

export interface GetSignalsResponse {
  signalChanId: string;
  signalChanName: string;
  signalChanDesc: string;
  signalChanToken: string;
  signalSourceType: string;
}

export interface CreateSignalBotResponse {
  algoId: string;
  algoClOrdId: string;
  sCode: string;
  sMsg: string;
}

export interface CancelSignalBotsResponse {
  algoId: string;
  sCode: string;
  sMsg: string;
}
