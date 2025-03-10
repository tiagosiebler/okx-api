import { isWsSubscribeEvent } from '../src';

describe('type guards', () => {
  it('isWsSubscribeEvent()', () => {
    expect(
      isWsSubscribeEvent({ event: 'subscribe', arg: { channel: 'account' } }),
    ).toBeTruthy();
  });
});
