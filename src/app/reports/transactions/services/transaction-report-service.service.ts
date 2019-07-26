import { Injectable } from '@angular/core';
import { ReportService } from 'src/app/report-service.interface';

@Injectable()
export class TransactionReportServiceService implements ReportService {

  constructor() { }


  getData() {
    return 'Transaction Data';
  }

  getColumns() {
    return 'Transaction Columns';
  }
}
