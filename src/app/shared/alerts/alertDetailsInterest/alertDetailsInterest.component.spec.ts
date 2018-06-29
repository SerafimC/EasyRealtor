import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponentDetailsInterest } from './alertDetailsInterest.component';

describe('AlertComponentDetailsInterest', () => {
  let component: AlertComponentDetailsInterest;
  let fixture: ComponentFixture<AlertComponentDetailsInterest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponentDetailsInterest ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponentDetailsInterest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
