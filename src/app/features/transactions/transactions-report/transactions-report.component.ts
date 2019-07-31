import { Component } from '@angular/core';
import { REPORT_SERVICE } from 'src/app/shared/report/report-service.interface';
import { TransactionReportService } from './transaction-report.service';

/**
 * The TransactionsReportComponent is only acting as a dynamic provider
 * for the REPORT_SERVICE token.  Its only job, when using this pattern
 * is to set the injection token and then invoke the shared 
 * ReportComponent in its template.
 */
@Component({
  selector: 'app-transactions-report',
  templateUrl: './transactions-report.component.html',
  styleUrls: ['./transactions-report.component.scss'],
  providers: [
    /**
     * Here I provided the TransactionReportService to the REPORT_SERVICE
     * token because I assumed that you want TransactionReportService 
     * instances to not be singletons.  Normally, I would want singletons
     * of TransactionReportService and therefore I would just provide it in
     * TransactionModule.  But just in case you have an explicit need for 
     * individual instances of the service declaring the provider here will
     * still give you that behavior.
     */
    { provide: REPORT_SERVICE, useClass: TransactionReportService }
  ]
})
export class TransactionsReportComponent {}
