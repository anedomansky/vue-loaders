import { describe, test, expect } from 'vitest';

describe('PulsatingDot', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/PulsatingDot.vue');
    expect(cmp).toBeDefined();
  });
});
