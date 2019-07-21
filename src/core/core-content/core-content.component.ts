import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'core-content',
  templateUrl: './core-content.component.html',
  styleUrls: ['./core-content.component.css']
})
export class CoreContentComponent implements OnInit {

  constructor(public menuService: MenuService,
              public screenService: ScreenService) { }

  ngOnInit() {
    console.log(this.menuService.isVertical);
  }

}
