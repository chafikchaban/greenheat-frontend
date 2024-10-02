// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  retries: 1,
  use: {
    browserName: 'chromium',
    headless: false,
  },
});
