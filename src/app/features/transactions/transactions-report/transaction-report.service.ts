import { Injectable } from '@angular/core';
import { ReportService } from 'src/app/shared/report/report-service.interface';

@Injectable()
export class TransactionReportService implements ReportService {

  constructor() { }


  getData() {
    return 'Transaction Data';
  }

  getColumns() {
    return 'Transaction Columns';
  }

  handleDataGridClick(e:any) {
    console.log('Transactions Report Data Grid was clicked');
  }

  handleColumnChooserClick(e:any) {
    console.log('Transactions Report Column Chooser was clicked');
  }
}
