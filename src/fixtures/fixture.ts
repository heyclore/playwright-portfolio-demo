//fixtures/fixture.ts
import { test as base } from '@playwright/test';
import { createLazyFixture } from '../utils/lazyPageObject';
import { HomePage } from '../pages/homepage/homePage.ts';
import { DocsPage } from '../pages/docspage/docsPage.ts';

type MyFixtures = {
  homePage: HomePage;
  docsPage: DocsPage;
};

// Define fixtures for loginPage and dashboardPage
export const test = base.extend<MyFixtures>({
  homePage: async({ page }, use) => {
    await use(new HomePage(page));
  },
  docsPage: async({ page }, use) => {
    await use(new DocsPage(page));
  }
});

export { expect } from '@playwright/test';

