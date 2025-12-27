import { test, expect } from "../fixtures/fixture";

test("open and close search modal popup", async ({ page, homePage }) => {
  await page.goto("https://playwright.dev/");

  await homePage.search.searchButton.click();
  const searchInput = homePage.search.searchInput;
  await expect(searchInput).toBeVisible();

  await searchInput.press("Escape");
  await expect(searchInput).toBeHidden();
});
