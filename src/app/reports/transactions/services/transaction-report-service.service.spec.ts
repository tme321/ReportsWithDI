import { TestBed } from '@angular/core/testing';

import { TransactionReportServiceService } from './transaction-report-service.service';

describe('TransactionReportServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionReportServiceService = TestBed.get(TransactionReportServiceService);
    expect(service).toBeTruthy();
  });
});
