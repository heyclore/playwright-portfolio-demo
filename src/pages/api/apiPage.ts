import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class ApiPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }
}
