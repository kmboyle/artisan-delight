import { Directive, OnDestroy, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenService } from '../services/screen.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[screenBelowLarge]'
})
export class ScreenBelowLargeDirective implements OnDestroy {

  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<{}>,
              private screenService: ScreenService) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }

}
