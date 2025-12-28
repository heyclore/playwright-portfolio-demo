import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homepage/homePage";
import { DocsPage } from "../pages/docspage/docsPage";
import { ApiPage } from "../pages/api/apiPage";
import { CommunityPage } from "../pages/community/communityPage";

type PageFixture = {
  homePage: HomePage;
  docsPage: DocsPage;
  apiPage: ApiPage;
  communityPage: CommunityPage;
};

// Define fixtures for loginPage and dashboardPage
export const test = base.extend<PageFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  docsPage: async ({ page }, use) => {
    await use(new DocsPage(page));
  },
  apiPage: async ({ page }, use) => {
    await use(new ApiPage(page));
  },
  communityPage: async ({ page }, use) => {
    await use(new CommunityPage(page));
  },
});

export { expect } from "@playwright/test";
