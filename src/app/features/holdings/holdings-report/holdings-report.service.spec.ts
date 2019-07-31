import { TestBed } from '@angular/core/testing';

import { HoldingsReportService } from './holdings-report.service';

describe('HoldingsReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoldingsReportService = TestBed.get(HoldingsReportService);
    expect(service).toBeTruthy();
  });
});
