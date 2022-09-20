import { describe, test, expect } from 'vitest';

describe('JumpingDots', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/JumpingDots.vue');
    expect(cmp).toBeDefined();
  });
});
