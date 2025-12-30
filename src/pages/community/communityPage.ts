import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class CommunityPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get goto() {
    return this.page.goto("https://playwright.dev/community/welcome");
  }

  get ambassadorButton() {
    return this.page.locator('a[href="#ambassador"]');
  }

  get contributingButton() {
    return this.page.locator('a[href="#contributing"]');
  }

  get blogButton() {
    return this.page.locator('a[href="#blog"]');
  }

  get newsButton() {
    return this.page.locator('a[href="#news"]');
  }

  get githubButton() {
    return this.page.locator('a[href="#github"]');
  }
}
