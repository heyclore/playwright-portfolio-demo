import { Page } from '@playwright/test';

class NavigationComponents {
  constructor(protected page: Page) {}

  get homeButton(){
    return this.page.locator('a.navbar__brand');
  }

  get docsButton(){
    return this.page.locator('a[href="/docs/intro"]', { hasText: 'Docs' });
  }

  get apiButton(){
    return this.page.locator('a[href="/docs/api/class-playwright"]', { hasText: 'API' });
  }

  get communityButton(){
    return this.page.locator('a[href="/community/welcome"]', { hasText: 'Community' });
  }
}

export class NavigationMenu extends NavigationComponents {
  private _nav: NavigationMenu | undefined;

  constructor(protected page: Page) {
      super(page);
  }

  get nav(): NavigationMenu {
    if (!this._nav) {
      this._nav = new NavigationMenu(this.page);
    }
    return this._nav;
  }
}

