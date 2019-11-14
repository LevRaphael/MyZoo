import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastsComponent } from './beasts.component';

describe('BeastsComponent', () => {
  let component: BeastsComponent;
  let fixture: ComponentFixture<BeastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
