//utils/lazyPageObject.ts
import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';

export function createLazyFixturea<T>(importPath: string) {
  return async ({ page }, use) => {
    let instance: T | null = null;

    await use({
      get: async (): Promise<T> => {
        if (!instance) {
          const { default: importedPage } = await import(importPath);  // Lazy import
          instance = new importedPage(page);  // Instantiate once
        }
        console.log(333);
        return instance;
      }
    });
  };
}

/*
 * // utils/lazyPageObject.ts
export function createLazyFixture<T>(importPath: string) {
  return async ({ page }, use) => {
    let instance: T | null = null;

    await use({
      get: async (): Promise<T> => {
        if (!instance) {
          const { default: importedPage } = await import(importPath);
          instance = new importedPage(page);
        }
        return instance;
      },
    });
  };
}
*/

export function createLazyFixture<T>(importPath: string) {
  return async ({ page }: { page: Page }, use: (arg: T) => {
    let instance: T | null = null;

    const getInstance = async (): {
      if (!instance) {
        const importedModule = await import(importPath);
        //        const ImportedClass = importedModule.HomePage || importedModule.default;

        //instance = new ImportedClass(page);
      }
      return instance;
    };

    await use(await getInstance());
  };
}

