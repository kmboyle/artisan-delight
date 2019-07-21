import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreContentComponent } from './core-content.component';

describe('CoreContentComponent', () => {
  let component: CoreContentComponent;
  let fixture: ComponentFixture<CoreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
