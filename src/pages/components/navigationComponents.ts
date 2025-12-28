import { Page } from "@playwright/test";

export class NavigationComponents {
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
