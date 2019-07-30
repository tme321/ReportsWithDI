import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsReportComponent } from 'src/app/reports/transactions/transactions-report/transactions-report.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    TransactionsReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  exports: [
    TransactionsReportComponent
  ]
})
export class TransactionModuleModule {

 }
