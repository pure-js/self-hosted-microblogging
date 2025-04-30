/* eslint-disable import/no-extraneous-dependencies */
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'tests/**/*.spec.ts'],
    coverage: {
      provider: 'v8', // or 'v8'
    },
  },
});
