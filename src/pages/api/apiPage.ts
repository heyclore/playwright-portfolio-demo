import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class ApiPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }

  get goto() {
    return this.page.goto("https://playwright.dev/docs/api/class-playwright");
  }

  get propertiersButton() {
    return this.page.locator('a[href="#properties"]');
  }

  get chromiumButton() {
    return this.page.locator('a[href="#chromium"]');
  }

  get devicesButton() {
    return this.page.locator('a[href="#devices"]');
  }

  get errorsButton() {
    return this.page.locator('a[href="#errors"]');
  }

  get requestButton() {
    return this.page.locator('a[href="#request"]');
  }
}
