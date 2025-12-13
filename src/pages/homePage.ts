//pages/homePage.ts
import { NavigationMenu} from './navigationMenu.ts';

export class HomePage extends NavigationMenu {
  constructor(private page: Page) {
    super(page);
  }
}

