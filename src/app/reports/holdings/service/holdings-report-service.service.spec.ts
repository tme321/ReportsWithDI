import { TestBed } from '@angular/core/testing';

import { HoldingsReportServiceService } from './holdings-report-service.service';

describe('HoldingsReportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoldingsReportServiceService = TestBed.get(HoldingsReportServiceService);
    expect(service).toBeTruthy();
  });
});
