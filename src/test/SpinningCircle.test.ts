import { describe, test, expect } from 'vitest';

describe('SpinningCircle', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/SpinningCircle.vue');
    expect(cmp).toBeDefined();
  });
});
