import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class DocsPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get goto() {
    return this.page.goto("https://playwright.dev/docs/intro");
  }

  get introductionButton() {
    return this.page.locator('a[href="#introduction"]');
  }

  get installingButton() {
    return this.page.locator('a[href="#install"]');
  }

  get updatingButton() {
    return this.page.locator('a[href="#updating"]');
  }

  get requirementsButton() {
    return this.page.locator('a[href="#requirements"]');
  }

  get exampleButton() {
    return this.page.locator('a[href="#example"]');
  }
}
