import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsReportComponent } from './transactions-report/transactions-report.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TransactionsReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    /**
     * Normally I would just provide the REPORT_SERVICE token here as 
     * TransactionReportService but this will result in a singleton 
     * instance of that service.  In order to closely match the functionality
     * of your factory method I instead provided it inside the 
     * TransactionsReportComponent instead.
     */
    //{ provide: REPORT_SERVICE, useClass: TransactionReportService }
  ],
  exports: [
    TransactionsReportComponent
  ]
})
export class TransactionModule {}
