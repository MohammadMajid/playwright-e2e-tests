import { test, expect } from '@playwright/test';
import { log } from "../helpers/logger";

test.describe('nopCommerce E2E Tests', () => {
  test('should navigate to the homepage and verify title', async ({ page }) => {
    log.info('Navigating to nopCommerce homepage');
    await page.goto('https://demo.nopcommerce.com/');

    log.info('Verifying the page title');
    await expect(page).toHaveTitle(/nopCommerce demo store/);
  });
});