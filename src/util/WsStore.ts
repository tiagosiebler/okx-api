import WebSocket from 'isomorphic-ws';
import { DefaultLogger } from './logger';
import { WsKey } from './websocket-util';

export enum WsConnectionStateEnum {
  INITIAL = 0,
  CONNECTING = 1,
  CONNECTED = 2,
  CLOSING = 3,
  RECONNECTING = 4,
  // ERROR = 5,
}
/** A "topic" is always a string */
type WsTopic = string;

/**
 * A "Set" is used to ensure we only subscribe to a topic once (tracking a list of unique topics we're expected to be connected to)
 * Note: Accurate duplicate tracking only works for plaintext topics. E.g. JSON objects may not be seen as duplicates if keys are in different orders. If that's needed, check the FTX implementation.
 */
interface WsStoredState<WSTopic> {
  /** The currently active websocket connection */
  ws?: WebSocket;
  /** The current lifecycle state of the connection (enum) */
  connectionState?: WsConnectionStateEnum;
  /** A timer that will send an upstream heartbeat (ping) when it expires */
  activePingTimer?: ReturnType<typeof setTimeout> | undefined;
  /** A timer tracking that an upstream heartbeat was sent, expecting a reply before it expires */
  activePongTimer?: ReturnType<typeof setTimeout> | undefined;
  /** If a reconnection is in progress, this will have the timer for the delayed reconnect */
  activeReconnectTimer?: ReturnType<typeof setTimeout> | undefined;
  /**
   * All the topics we are expected to be subscribed to (and we automatically resubscribed to if the connection drops)
   * A "Set" is used to ensure we only subscribe to a topic once (tracking a list of unique topics we're expected to be connected to)
   *
   * Note: Accurate duplicate tracking using a Set only works for plaintext topics. E.g. JSON objects may not be seen as duplicates if keys are in different orders.
   * More complex topics (objects) are matched using the isDeepObjectMatch function
   */
  subscribedTopics: Set<WSTopic>;
}

export function isDeepObjectMatch(object1: any, object2: any): boolean {
  if (typeof object2 !== typeof object1) {
    return false;
  }

  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();

  const hasSameKeyCount = keys1.length === keys2.length;
  if (!hasSameKeyCount) {
    // console.log('not same key count', { keys1, keys2 });
    // not the same amount of keys or keys don't match
    return false;
  }

  const hasSameKeyNames = keys1.every((val, i) => val === keys2[i]);
  if (!hasSameKeyNames) {
    // console.log('not same key names: ', { keys1, keys2 });
    return false;
  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!isDeepObjectMatch(value1, value2)) {
        return false;
      }
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

type WSSimpleTopic = string;

export class WsStore<WSComplexTopic> {
  private wsState: Record<
    WsKey | string,
    WsStoredState<WSComplexTopic | WSSimpleTopic>
  > = {};
  private logger: typeof DefaultLogger;

  constructor(logger: typeof DefaultLogger) {
    this.logger = logger || DefaultLogger;
    this.wsState = {};
  }

  /** Get WS stored state for key, optionally create if missing */
  get(
    wsKey: WsKey,
    createIfMissing?: true
  ): WsStoredState<WSComplexTopic | WSSimpleTopic>;
  get(
    wsKey: WsKey,
    createIfMissing?: false
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined;
  get(
    wsKey: WsKey,
    createIfMissing?: boolean
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined {
    if (this.wsState[wsKey]) {
      return this.wsState[wsKey];
    }

    if (createIfMissing) {
      return this.create(wsKey);
    }
  }

  getKeys(): WsKey[] {
    return Object.keys(this.wsState) as WsKey[];
  }

  create(
    wsKey: WsKey
  ): WsStoredState<WSComplexTopic | WSSimpleTopic> | undefined {
    if (this.hasExistingActiveConnection(wsKey)) {
      this.logger.warning(
        'WsStore setConnection() overwriting existing open connection: ',
        this.getWs(wsKey)
      );
    }
    this.wsState[wsKey] = {
      subscribedTopics: new Set(),
      connectionState: WsConnectionStateEnum.INITIAL,
    };
    return this.get(wsKey);
  }

  delete(wsKey: WsKey) {
    if (this.hasExistingActiveConnection(wsKey)) {
      const ws = this.getWs(wsKey);
      this.logger.warning(
        'WsStore deleting state for connection still open: ',
        ws
      );
      ws?.close();
    }
    delete this.wsState[wsKey];
  }

  /* connection websocket */

  hasExistingActiveConnection(wsKey: WsKey) {
    return this.get(wsKey) && this.isWsOpen(wsKey);
  }

  getWs(wsKey: WsKey): WebSocket | undefined {
    return this.get(wsKey)?.ws;
  }

  setWs(wsKey: WsKey, wsConnection: WebSocket): WebSocket {
    if (this.isWsOpen(wsKey)) {
      this.logger.warning(
        'WsStore setConnection() overwriting existing open connection: ',
        this.getWs(wsKey)
      );
    }
    this.get(wsKey, true)!.ws = wsConnection;
    return wsConnection;
  }

  /* connection state */

  isWsOpen(wsKey: WsKey): boolean {
    const existingConnection = this.getWs(wsKey);
    return (
      !!existingConnection &&
      existingConnection.readyState === existingConnection.OPEN
    );
  }

  getConnectionState(wsKey: WsKey): WsConnectionStateEnum {
    return this.get(wsKey, true)!.connectionState!;
  }

  setConnectionState(wsKey: WsKey, state: WsConnectionStateEnum) {
    this.get(wsKey, true)!.connectionState = state;
  }

  isConnectionState(wsKey: WsKey, state: WsConnectionStateEnum): boolean {
    return this.getConnectionState(wsKey) === state;
  }

  /* subscribed topics */

  getTopics(wsKey: WsKey): Set<WSComplexTopic | WSSimpleTopic> {
    return this.get(wsKey, true).subscribedTopics;
  }

  getTopicsByKey(): Record<string, Set<WSComplexTopic | WSSimpleTopic>> {
    const result = {};
    for (const refKey in this.wsState) {
      result[refKey] = this.getTopics(refKey as WsKey);
    }
    return result;
  }

  addTopic(wsKey: WsKey, topic: WsTopic) {
    return this.getTopics(wsKey).add(topic);
  }

  /** Add subscribed topic to store, only if not already subscribed */
  addComplexTopic(wsKey: WsKey, topic: WSComplexTopic) {
    if (this.getMatchingTopic(wsKey, topic)) {
      return this.getTopics(wsKey);
    }
    // console.log('add complex topic: ', topic);
    return this.getTopics(wsKey).add(topic);
  }

  deleteTopic(wsKey: WsKey, topic: WsTopic) {
    return this.getTopics(wsKey).delete(topic);
  }

  /** Remove subscribed topic from store */
  deleteComplexTopic(wsKey: WsKey, topic: WSComplexTopic) {
    const storedTopic = this.getMatchingTopic(wsKey, topic);
    if (storedTopic) {
      this.getTopics(wsKey).delete(storedTopic);
    }

    return this.getTopics(wsKey);
  }

  // Since topics are objects we can't rely on the set to detect duplicates
  getMatchingTopic(
    key: WsKey,
    topic: WsTopic | WSComplexTopic
  ): WSComplexTopic | WSSimpleTopic | undefined {
    if (typeof topic === 'string') {
      if (this.getTopics(key).has(topic)) {
        return topic;
      } else {
        return undefined;
      }
    }

    const allTopics = this.getTopics(key).values();
    for (const storedTopic of allTopics) {
      // console.log('?: ', {
      //   isMatch: isDeepObjectMatch(topic, storedTopic),
      //   newTopic: topic,
      //   storedTopic: storedTopic,
      // });
      if (isDeepObjectMatch(topic, storedTopic)) {
        return storedTopic;
      }
    }
  }
}
