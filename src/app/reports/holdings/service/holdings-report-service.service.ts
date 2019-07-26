import { Injectable } from '@angular/core';
import { ReportService } from 'src/app/report-service.interface';

@Injectable()
export class HoldingsReportServiceService implements ReportService {

  constructor() { }

  getData() {
    return 'holdings Data';
  }

  getColumns() {
    return 'holdings Columns';
  }

  getDrillThrough() {
    return 'Drill Through enabled';
  }
}
