import { Page } from "@playwright/test";
import { NavigationComponents } from "./navigationComponents";
import { SearchComponents } from "./searchComponents";

export class TopBar {
  private _nav: NavigationComponents | undefined;
  private _search: SearchComponents | undefined;

  constructor(protected page: Page) {}

  get nav(): NavigationComponents {
    if (!this._nav) {
      this._nav = new NavigationComponents(this.page);
    }
    return this._nav;
  }

  get search(): SearchComponents {
    if (!this._search) {
      this._search = new SearchComponents(this.page);
    }
    return this._search;
  }
}
