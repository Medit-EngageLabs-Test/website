import { test, expect } from '@playwright/test';

test.describe('Sito vetrina Engage Labs', () => {
  test('la landing è pubblica e mostra il brand nella navbar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Engage Labs' })).toBeVisible();
  });

  test('il menu espone i link verso le sezioni ad ancora', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('.site-nav');
    await expect(nav.getByRole('link', { name: 'Chi siamo' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Servizi' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Contatti' })).toBeVisible();
  });

  test('la pagina contiene le sezioni chi-siamo, servizi e il footer contatti', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.locator('#chi-siamo')).toBeVisible();
    await expect(page.locator('#servizi')).toBeVisible();
    await expect(page.locator('footer#contatti')).toBeVisible();
  });

  // ── Health check ───────────────────────────────────────────────────────────

  test('backend /health returns healthy', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body).toMatchObject({ status: 'healthy' });
  });
});
