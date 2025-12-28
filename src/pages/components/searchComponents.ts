import { Page } from "@playwright/test";

export class SearchComponents {
  constructor(protected page: Page) {}

  get searchButton() {
    return this.page.getByRole("button", { name: "Search (Ctrl+K)" });
  }

  get searchInput() {
    return this.page.getByRole("searchbox", { name: "Search" });
  }

  get clearIcon() {
    return this.page.getByRole("button", { name: "Clear the query" });
  }

  resultLists(index: number) {
    return this.page.locator(`#docsearch-hits${index}-item-${index}`);
  }

  get recentSearch() {
    return this.page.locator("#docsearch-recentSearches-item-0");
  }

  get removeRecentSearch() {
    return this.page.getByRole("button", {
      name: "Remove this search from history",
    });
  }
}
