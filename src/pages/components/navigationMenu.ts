import { Page } from "@playwright/test";

class NavigationComponents {
  constructor(protected page: Page) {}

  get homeButton() {
    return this.page.locator("a.navbar__brand");
  }

  get docsButton() {
    return this.page.locator('a[href="/docs/intro"]', { hasText: "Docs" });
  }

  get apiButton() {
    return this.page.locator('a[href="/docs/api/class-playwright"]', {
      hasText: "API",
    });
  }

  get communityButton() {
    return this.page.locator('a[href="/community/welcome"]', {
      hasText: "Community",
    });
  }
}

class SearchComponents {
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

export class TopBar {
  private _nav: NavigationComponents | undefined;
  private _search: SearchComponents | undefined;

  constructor(protected page: Page) {}

  get nav(): NavigationComponents {
    if (!this._nav) {
      this._nav = new NavigationComponents(this.page);
    }
    return this._nav;
  }

  get search(): SearchComponents {
    if (!this._search) {
      this._search = new SearchComponents(this.page);
    }
    return this._search;
  }
}
