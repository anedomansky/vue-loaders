import { describe, test, expect } from 'vitest';

describe('LoaderDialog', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../components/LoaderDialog.vue');
    expect(cmp).toBeDefined();
  });
});
