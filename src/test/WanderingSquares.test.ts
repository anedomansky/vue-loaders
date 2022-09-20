import { describe, test, expect } from 'vitest';

describe('WanderingSquares', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/WanderingSquares.vue');
    expect(cmp).toBeDefined();
  });
});
