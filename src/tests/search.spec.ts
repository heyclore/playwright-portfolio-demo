import { test, expect } from "../fixtures/fixture";

test.describe("Login Feature", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("open and close search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();

    await searchInput.press("Escape");
    await expect(searchInput).toBeHidden();
  });

  test("close search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();

    await searchInput.press("Escape");
    await expect(searchInput).toBeHidden();
  });

  test("should clear input when clear icon is clicked", async ({
    homePage,
  }) => {
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill("foo");
    const clearIcon = homePage.search.clearIcon;
    await expect(homePage.search.searchInput).toHaveValue("foo");
    await expect(clearIcon).toBeVisible();

    await clearIcon.click();
    await expect(homePage.search.searchInput).toHaveValue("");
    await expect(clearIcon).toBeHidden();
  });

  test("should can use arrow key to navigate the quick results", async ({
    page,
    homePage,
  }) => {
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill("a");
    const firstResult = homePage.search.resultLists(0);
    const secondResult = homePage.search.resultLists(1);
    await expect(firstResult).toHaveAttribute("aria-selected", "true");
    await expect(secondResult).toHaveAttribute("aria-selected", "false");

    await page.keyboard.press("ArrowDown");
    await expect(firstResult).toHaveAttribute("aria-selected", "false");
    await expect(secondResult).toHaveAttribute("aria-selected", "true");
  });
});
