import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponentOK } from './alertOK.component';

describe('AlertComponentOK', () => {
  let component: AlertComponentOK;
  let fixture: ComponentFixture<AlertComponentOK>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponentOK ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponentOK);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
