import { Page } from '@playwright/test';
import { NavigationMenu} from '../components/navigationMenu'


export class ApiPage extends NavigationMenu{
  constructor(public readonly page: Page) {
      super(page);
  }
}

