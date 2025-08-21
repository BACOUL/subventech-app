// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'off',
  },
  webServer: {
    command: 'npx next start -p 3000',
    port: 3000,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
