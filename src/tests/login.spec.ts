//test/login.spec.ts
import { test, expect } from '../fixtures/fixture';

test('navigations', async ({ page, homePage, docsPage }) => {
  await page.goto('https://playwright.dev/');
  await homePage.docsButton.click();
  await expect(page).toHaveTitle(/installation/i);
  await docsPage.homeButton.click();
  await expect(page).toHaveTitle(/fast and reliable/i);
});

