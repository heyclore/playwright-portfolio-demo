import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class HomePage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get goto() {
    return this.page.goto("https://playwright.dev/");
  }

  get getStartedButton() {
    return this.page.locator('a[href="/docs/intro"]');
  }

  get githubButton() {
    return this.page.locator(
      'a[href="https://github.com/microsoft/playwright"]',
    );
  }

  get stargazerButton() {
    return this.page.locator(
      'a[href="https://github.com/microsoft/playwright/stargazers"]',
    );
  }
}
