import { Page } from "@playwright/test";
import { NavigationMenu } from "../components/navigationMenu";

export class HomePage extends NavigationMenu {
  constructor(public readonly page: Page) {
    super(page);
  }
}
