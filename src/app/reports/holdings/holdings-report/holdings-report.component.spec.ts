import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsReportComponent } from './holdings-report.component';

describe('HoldingsReportComponent', () => {
  let component: HoldingsReportComponent;
  let fixture: ComponentFixture<HoldingsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
