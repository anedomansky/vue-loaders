import { describe, test, expect } from 'vitest';

describe('CirclingSquares', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/CirclingSquares.vue');
    expect(cmp).toBeDefined();
  });
});
