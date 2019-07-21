import { Component } from '@angular/core';
import { CoreConfigService, CoreConfigSettings } from 'src/core/services/core-config.service';
import { MenuService } from 'src/core/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'artisan-delight';
  constructor(public menuService: MenuService,
              private coreConfigService: CoreConfigService) {
    const config: CoreConfigSettings = {
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    coreConfigService.configure(config);

    menuService.items = initialMenuItems;
  }
}
