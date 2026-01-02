import { test, expect } from "../fixtures/fixture";

test.describe("Search modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("open search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();
  });

  test("open search modal popup with a shortcut key", async ({ homePage }) => {
    await expect(homePage.search.searchButton).toBeVisible();
    await homePage.search.searchButton.press("Control+K");
    await expect(homePage.search.searchInput).toBeVisible();
  });

  test("close search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();

    await searchInput.press("Escape");
    await expect(searchInput).toBeHidden();
  });

  test("should show quick results when a query is entered in search modal", async ({
    homePage,
  }) => {
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill("a");
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("should clear input when clear icon is clicked", async ({
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const clearIcon = homePage.search.clearIcon;
    await expect(homePage.search.searchInput).toHaveValue(text);
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

  test("applies search when pressing Enter", async ({ page, homePage }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await homePage.search.searchInput.press("Enter");
    await expect(page).toHaveTitle(/clock/i);
  });

  test("applies search when clicking a quick result", async ({
    page,
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await homePage.search.resultLists(0).click();
    await expect(page).toHaveTitle(/clock/i);
  });

  test("adds query to recent searches after applying search", async ({
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const result = homePage.search.resultLists(0);
    await expect(result).toHaveAttribute("aria-selected", "true");
    await result.click();
    await homePage.search.searchButton.click();
    await expect(homePage.search.recentSearch).toBeVisible();
  });

  test("removes a search term from recent searches", async ({ homePage }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const result = homePage.search.resultLists(0);
    await expect(result).toHaveAttribute("aria-selected", "true");
    await result.click();
    await homePage.search.searchButton.click();
    await expect(homePage.search.recentSearch).toBeVisible();
    await homePage.search.removeRecentSearch.click();
    await expect(homePage.search.recentSearch).toBeHidden();
  });
});
