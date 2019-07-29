import { NgModule, Inject, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsReportComponent } from 'src/app/reports/transactions/transactions-report/transactions-report.component';
import { REPORT_SERVICE, reportServiceFactory, REPORT_TYPE } from 'src/app/report-service.interface';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    TransactionsReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {
      provide: REPORT_SERVICE,
      useFactory: reportServiceFactory,
      deps:[REPORT_TYPE]
    }
  ],
  exports: [
    TransactionsReportComponent
  ]
})
export class TransactionModuleModule {

  static forRoot(reportType: string): ModuleWithProviders {
    return {
      ngModule: TransactionModuleModule,
      providers: [
        {provide: REPORT_TYPE, useValue: reportType}
      ]
    };
  }
 }
