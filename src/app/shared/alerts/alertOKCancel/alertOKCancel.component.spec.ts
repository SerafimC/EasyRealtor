import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponentOKCancel } from './alertOKCancel.component';

describe('AlertComponentOKCancel', () => {
  let component: AlertComponentOKCancel;
  let fixture: ComponentFixture<AlertComponentOKCancel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponentOKCancel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponentOKCancel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
