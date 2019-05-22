import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUserChartsComponent } from './sales-user-charts.component';

describe('SalesUserChartsComponent', () => {
  let component: SalesUserChartsComponent;
  let fixture: ComponentFixture<SalesUserChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesUserChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUserChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
