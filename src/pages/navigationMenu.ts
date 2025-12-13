//pages/navigationMenu.ts

export class NavigationMenu {
  constructor(private page: Page) {}

  get homeButton(){
    return this.page.locator('a.navbar__brand');
  }

  get docsButton(){
    return this.page.locator('a[href="/docs/intro"]', { hasText: 'Docs' });
  }
}

