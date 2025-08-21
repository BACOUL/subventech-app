import { defineConfig, devices } from '@playwright/test';

const PORT = 3000;

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL || `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    ...devices['Desktop Chrome'],
  },
  // Lance ton site pour les tests (build + start)
  webServer: {
    command: 'npm run build && npm run start',
    port: PORT,
    reuseExistingServer: !process.env.CI
  }
});
