import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class DocsPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }
}
