import { MenuService, MenuItem } from './../../services/menu.service';
import { Component, OnInit, Input, HostListener, HostBinding, Renderer, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'base-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('visibilityChanged', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({opacity: 0}),
            animate(250, style({opacity: 1}))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            animate(100, style({opacity: 0}))
        ])
    ])
]
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute = false;
  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;
  constructor(public menuService: MenuService,
              private renderer: Renderer,
              private el: ElementRef,
              private router: Router) { }

  ngOnInit() {
      this.checkActiveRoute(this.router.url);
      this.router.events
      .subscribe((event) => {
          if (event instanceof NavigationEnd) {
              this.checkActiveRoute(event.url);
              console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
          }
      });
  }
  checkActiveRoute(route: string) {
    this.isActiveRoute = (route === '/' + this.item.route);
  }
  @HostListener('click', ['$event'])
  onClick(event): void {

    event.stopPropagation();
    // this is how we get vertical menu items to open and close
    if (this.item.submenu) {
      if (this.menuService.isVertical) {
          this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      // force horizontal menus to close by sending a mouseleave event
      const newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this.renderer.invokeElementMethod(
          this.el.nativeElement, 'dispatchEvent', [newEvent]);

      this.router.navigate(['/' + this.item.route]);
    }
  }

  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
        this.mouseInPopup = true;
    }
}

onPopupMouseLeave(event): void {
    if (!this.menuService.isVertical) {
        this.mouseInPopup = false;
    }
}
@HostListener('mouseenter')
onMouseEnter(): void {
    if (!this.menuService.isVertical) {
        if (this.item.submenu) {
            this.mouseInItem = true;
            if (this.parentIsPopup) {
                this.popupLeft = 160;
                this.popupTop = 0;
            }
        }
    }
}

@HostListener('mouseleave', ['$event'])
onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
        this.mouseInItem = false;
    }
}

}
