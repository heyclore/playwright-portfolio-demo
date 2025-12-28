import { Page } from "@playwright/test";
import { TopBar } from "../components/topBar";

export class CommunityPage extends TopBar {
  constructor(public readonly page: Page) {
    super(page);
  }
}
