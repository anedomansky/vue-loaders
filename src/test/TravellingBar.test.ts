import { describe, test, expect } from 'vitest';

describe('TravellingBar', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/TravellingBar.vue');
    expect(cmp).toBeDefined();
  });
});
