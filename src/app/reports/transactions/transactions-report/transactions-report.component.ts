import { Component, OnInit, Inject } from '@angular/core';
import { REPORT_SERVICE, ReportService } from '../../../report-service.interface';
import { TransactionReportServiceService } from '../services/transaction-report-service.service';

export function transactionReportService() {
  return new TransactionReportServiceService();
}

@Component({
  selector: 'app-transactions-report',
  templateUrl: './transactions-report.component.html',
  styleUrls: ['./transactions-report.component.scss'],
  providers: [
    {provide: REPORT_SERVICE, useFactory: transactionReportService }
  ]
})
export class TransactionsReportComponent implements OnInit {

  constructor(
    @Inject(REPORT_SERVICE) private reportService: ReportService,
  ) { }

  columns = this.reportService.getColumns();
  data = this.reportService.getData();
  drillThrough = this.reportService.drillThrough ? this.reportService.drillThrough() : undefined;

  ngOnInit() {
  }
}
