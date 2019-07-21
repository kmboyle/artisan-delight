import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenBelowLargeDirective } from './directives/screen-below-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { CoreContentComponent } from './core-content/core-content.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';
import { CoreHeaderComponent } from './core-header/core-header.component';
import { CoreBodyComponent } from './core-body/core-body.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CoreContentComponent,
    CoreFooterComponent,
    CoreHeaderComponent,
    CoreBodyComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent
  ],
  exports: [
    CoreBodyComponent
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that the Base Module is only injected once
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
