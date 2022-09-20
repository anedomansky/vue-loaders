import { describe, test, expect } from 'vitest';

describe('LoaderContainer', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/LoaderContainer.vue');
    expect(cmp).toBeDefined();
  });
});
