export type LogParams = null | any;

export const DefaultLogger = {
  /** Ping/pong events and other raw messages that might be noisy. Enable this while troubleshooting. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trace: (...params: LogParams): void => {
    // console.log(params);
  },
  info: (...params: LogParams): void => {
    console.log(params);
  },
  error: (...params: LogParams): void => {
    console.error(params);
  },
};

export type DefaultLogger = typeof DefaultLogger;
