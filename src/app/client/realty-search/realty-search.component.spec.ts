import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtySearchComponent } from './realty-search.component';

describe('RealtySearchComponent', () => {
  let component: RealtySearchComponent;
  let fixture: ComponentFixture<RealtySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
