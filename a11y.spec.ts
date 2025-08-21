import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibilité – pages clés', () => {
  test('Home (/) – aucune violation serious/critical', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();

    const serious = results.violations.filter(v =>
      v.impact === 'serious' || v.impact === 'critical'
    );

    // Log lisible si jamais ça échoue en local
    if (serious.length) {
      console.log('Violations a11y (serious/critical):');
      for (const v of serious) console.log(`- ${v.id}: ${v.help} (${v.impact})`);
    }

    expect(serious).toEqual([]);
  });

  test('/brand – aucune violation serious/critical', async ({ page }) => {
    // si /brand n’existe pas encore, garde ce test, il passera quand tu auras créé la page
    await page.goto('/brand');
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter(v =>
      v.impact === 'serious' || v.impact === 'critical'
    );
    if (serious.length) {
      console.log('Violations a11y (serious/critical) /brand :');
      for (const v of serious) console.log(`- ${v.id}: ${v.help} (${v.impact})`);
    }
    expect(serious).toEqual([]);
  });
});
