//pages/docsPage.ts
import { Page } from '@playwright/test';
import { NavigationMenu} from '../components/navigationMenu';

export class DocsPage extends NavigationMenu {
  constructor(page: Page) {
    super(page);
  }
}

