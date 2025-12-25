//pages/homePage.ts
import { Page } from '@playwright/test';
import { NavigationMenu} from '../components/navigationMenu'


export class HomePage extends NavigationMenu {
  constructor(page: Page) {
    super(page);
  }
}

