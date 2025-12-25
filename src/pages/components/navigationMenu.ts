//pages/navigationMenu.ts
import { Page } from '@playwright/test';

export class NavigationMenu {
  constructor(protected page: Page) {}

  get homeButton(){
    return this.page.locator('a.navbar__brand');
  }

  get docsButton(){
    return this.page.locator('a[href="/docs/intro"]', { hasText: 'Docs' });
  }
}

