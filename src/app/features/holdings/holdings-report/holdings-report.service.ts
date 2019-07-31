import { Injectable } from '@angular/core';
import { ReportService } from 'src/app/shared/report/report-service.interface';

@Injectable()
export class HoldingsReportService implements ReportService {

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

  handleDataGridClick(e:any) {
    console.log('Holdings Report Data Grid was clicked');
  }

  handleColumnChooserClick(e:any) {
    console.log('Holdings Report Column Chooser was clicked');
  }

}
