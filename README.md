# Playwright Portfolio Demo

This repository showcases a test automation suite built using **Playwright** with TypeScript. It demonstrates the ability to create robust, maintainable, and scalable automated tests for web applications. The suite focuses on end-to-end testing, page object modeling, and leveraging Playwright's features for efficient testing.

## Project Overview

This repository contains a collection of automated end-to-end tests for a sample web application, developed using Playwright and TypeScript. The primary goal is to demonstrate proficiency in building and structuring modern, reliable test automation suites.

## Key Features Tested

Based on the project structure (`src/tests/` and `src/pages/`), this demo likely covers:

*   **Navigation**: Testing navigation between different pages of the application (e.g., Home, Docs, Community, API).
*   **Search Functionality**: Validating the search input and results.
*   **Page Interactions**: Basic UI element interactions and assertions.

*(Note: Specific features tested are inferred from file names and structure. For precise details, please refer to the test files within `src/tests/`.)*

## Technologies Used

*   **Playwright**: For end-to-end test automation across major browsers.
*   **TypeScript**: For writing type-safe test scripts and page object definitions.
*   **Node.js**: The runtime environment for executing Playwright commands and managing project dependencies.

## Project Structure

The project is organized to promote clarity and maintainability:

*   `playwright.config.ts`: Playwright configuration file, defining test directories, timeouts, viewport settings, and browser targets.
*   `package.json`: Manages project dependencies and defines scripts for running tests.
*   `src/`: Contains the source code for the test suite.
    *   `fixtures/`: Custom Playwright test fixtures for shared setup or teardown logic.
    *   `pages/`: Implements the Page Object Model (POM), with classes representing different pages and components of the application.
    *   `tests/`: Contains the actual end-to-end test files (e.g., `navigation.spec.ts`, `search.spec.ts`).
*   `test-results/`: Directory where Playwright generates test reports, traces, and screenshots.

## Design Approach & Best Practices

This project adheres to modern test automation principles:

*   **Page Object Model (POM)**: Utilizes page objects (defined in `src/pages/`) to encapsulate UI elements and their interactions, enhancing test maintainability and reusability.
*   **Modularity**: Tests are organized into distinct spec files within `src/tests/`, making them easy to locate and manage.
*   **TypeScript Integration**: Leverages TypeScript for strong typing, improving code quality, reducing runtime errors, and enhancing developer productivity.
*   **Configuration Management**: `playwright.config.ts` centralizes configuration for test execution, including browser options and timeouts.

## Portfolio Value

This project demonstrates the ability to:

*   Set up and configure a Playwright testing environment from scratch.
*   Implement the Page Object Model (POM) for scalable and maintainable test automation.
*   Write effective end-to-end tests using TypeScript.
*   Organize test suites logically for efficient execution and reporting.
*   Utilize Playwright's features for managing test configurations and execution.

## Project Tree
```tree
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.ts
├── src
│   ├── fixtures
│   │   └── fixture.ts
│   ├── pages
│   │   ├── api
│   │   │   └── apiPage.ts
│   │   ├── community
│   │   │   └── communityPage.ts
│   │   ├── components
│   │   │   ├── navigationComponents.ts
│   │   │   ├── searchComponents.ts
│   │   │   └── topBar.ts
│   │   ├── docspage
│   │   │   └── docsPage.ts
│   │   └── homepage
│   │       └── homePage.ts
│   └── tests
│       ├── navigation.spec.ts
│       └── search.spec.ts
└── tsconfig.json

```

## Quick Test Overview
```typescript
import { test, expect } from "../fixtures/fixture";

test("navigations menu components", async ({
  page,
  homePage,
  docsPage,
  apiPage,
  communityPage,
}) => {
  await page.goto("https://playwright.dev/");

  await homePage.nav.docsButton.click();
  await expect(page).toHaveTitle(/installation/i);

  await docsPage.nav.apiButton.click();
  await expect(page).toHaveTitle(/playwright librabry | playwright/i);

  await apiPage.nav.communityButton.click();
  await expect(page).toHaveTitle(/welcome | playwright/i);

  await communityPage.nav.homeButton.click();
  await expect(page).toHaveTitle(/fast and reliable/i);
});
```
```typescript
import { test, expect } from "../fixtures/fixture";

test.describe("Search modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("open and close search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();

    await searchInput.press("Escape");
    await expect(searchInput).toBeHidden();
  });

  test("close search modal popup", async ({ homePage }) => {
    await homePage.search.searchButton.click();
    const searchInput = homePage.search.searchInput;
    await expect(searchInput).toBeVisible();

    await searchInput.press("Escape");
    await expect(searchInput).toBeHidden();
  });

  test("should show quick results when a query is entered in search modal", async ({
    homePage,
  }) => {
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill("a");
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("should clear input when clear icon is clicked", async ({
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const clearIcon = homePage.search.clearIcon;
    await expect(homePage.search.searchInput).toHaveValue(text);
    await expect(clearIcon).toBeVisible();

    await clearIcon.click();
    await expect(homePage.search.searchInput).toHaveValue("");
    await expect(clearIcon).toBeHidden();
  });

  test("should can use arrow key to navigate the quick results", async ({
    page,
    homePage,
  }) => {
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill("a");
    const firstResult = homePage.search.resultLists(0);
    const secondResult = homePage.search.resultLists(1);
    await expect(firstResult).toHaveAttribute("aria-selected", "true");
    await expect(secondResult).toHaveAttribute("aria-selected", "false");

    await page.keyboard.press("ArrowDown");
    await expect(firstResult).toHaveAttribute("aria-selected", "false");
    await expect(secondResult).toHaveAttribute("aria-selected", "true");
  });

  test("applies search when pressing Enter", async ({ page, homePage }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await homePage.search.searchInput.press("Enter");
    await expect(page).toHaveTitle(/clock/i);
  });

  test("applies search when clicking a quick result", async ({
    page,
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    await expect(homePage.search.resultLists(0)).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await homePage.search.resultLists(0).click();
    await expect(page).toHaveTitle(/clock/i);
  });

  test("adds query to recent searches after applying search", async ({
    homePage,
  }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const result = homePage.search.resultLists(0);
    await expect(result).toHaveAttribute("aria-selected", "true");
    await result.click();
    await homePage.search.searchButton.click();
    await expect(homePage.search.recentSearch).toBeVisible();
  });

  test("removes a search term from recent searches", async ({ homePage }) => {
    const text = "clock";
    await homePage.search.searchButton.click();
    await homePage.search.searchInput.fill(text);
    const result = homePage.search.resultLists(0);
    await expect(result).toHaveAttribute("aria-selected", "true");
    await result.click();
    await homePage.search.searchButton.click();
    await expect(homePage.search.recentSearch).toBeVisible();
    await homePage.search.removeRecentSearch.click();
    await expect(homePage.search.recentSearch).toBeHidden();
  });
});
```
---

Feel free to reach out if you have any questions or would like to discuss this project further.
