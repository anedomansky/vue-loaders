import { describe, test, expect } from 'vitest';

describe('FlippingHexagons', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/FlippingHexagons.vue');
    expect(cmp).toBeDefined();
  });
});
