// tests/a11y.spec.ts
import { test, expect } from '@playwright/test';

test('Accueil SubvenTech a un titre', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Subven/i);
});
