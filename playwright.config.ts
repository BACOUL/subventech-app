import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [['list']],
  use: {
    ...devices['Desktop Chrome'],
    headless: true,
    baseURL: 'http://localhost:3000',
    trace: 'off'
  },
  // Lance l'app en prod pour les tests : build -> start
  webServer: {
    command: 'npm run build && npm run start',
    port: 3000,
    reuseExistingServer: true,
    timeout: 120 * 1000
  }
});
