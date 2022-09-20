import { describe, test, expect } from 'vitest';

describe('LoaderItem', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/LoaderItem.vue');
    expect(cmp).toBeDefined();
  });
});
