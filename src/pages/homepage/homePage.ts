import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class HomePage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }
}
