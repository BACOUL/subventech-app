// tests/a11y.spec.ts
import { test, expect } from '@playwright/test';

test('Accueil Subventech se charge et a un titre', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Subventech/i);
});
