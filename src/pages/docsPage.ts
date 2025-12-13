//pages/docsPage.ts
import { NavigationMenu} from './navigationMenu.ts';

export class DocsPage extends NavigationMenu {
  constructor(private page: Page) {
    super(page);
  }
}

