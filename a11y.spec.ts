import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Pages à tester (ajoute-en d'autres si besoin)
const routes = ['/', '/dossier', '/aides', '/profil'];

for (const route of routes) {
  test.describe(`a11y ${route}`, () => {
    test(`aucune violation sérieuse/critique sur ${route}`, async ({ page }) => {
      await page.goto(route);

      // Axe analyse
      const results = await new AxeBuilder({ page }).analyze();

      // Filtre seulement les impacts sérieux/critique
      const serious = results.violations.filter(v =>
        ['serious', 'critical'].includes(v.impact || '')
      );

      // Affiche en cas d'échec
      if (serious.length) {
        console.log(
          '\nViolations a11y:',
          serious.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodes: v.nodes.map(n => n.html).slice(0, 3) // un aperçu
          }))
        );
      }

      expect(serious, 'Aucune violation sérieuse/critique attendue').toEqual([]);
    });
  });
}
