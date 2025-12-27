import { test, expect } from '../fixtures/fixture';

test('navigations menu components', async ({ page, homePage, docsPage, apiPage, communityPage }) => {
  await page.goto('https://playwright.dev/');

  await homePage.nav.docsButton.click();
  await expect(page).toHaveTitle(/installation/i);

  await docsPage.nav.apiButton.click();
  await expect(page).toHaveTitle(/playwright librabry | playwright/i);

  await apiPage.nav.communityButton.click();
  await expect(page).toHaveTitle(/welcome | playwright/i);

  await communityPage.nav.homeButton.click();
  await expect(page).toHaveTitle(/fast and reliable/i);
});

