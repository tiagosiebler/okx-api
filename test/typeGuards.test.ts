import { isWsSubscribeEvent } from '../src/index.js';

describe('type guards', () => {
  it('isWsSubscribeEvent()', () => {
    expect(
      isWsSubscribeEvent({ event: 'subscribe', arg: { channel: 'account' } }),
    ).toBeTruthy();
  });
});
