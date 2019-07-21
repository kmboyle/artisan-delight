import { MenuService } from './../services/menu.service';
import { ScreenService } from './../services/screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'core-header',
  templateUrl: './core-header.component.html',
  styleUrls: ['./core-header.component.css']
})
export class CoreHeaderComponent implements OnInit {

  constructor(public screenService: ScreenService,
              public menuService: MenuService) {
  }

  ngOnInit() {
  }

}
