import { NgModule, ModuleWithProviders, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoldingsReportServiceService } from 'src/app/reports/holdings/service/holdings-report-service.service';
import { HoldingsReportComponent } from 'src/app/reports/holdings/holdings-report/holdings-report.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { REPORT_SERVICE, reportServiceFactory, REPORT_TYPE } from 'src/app/report-service.interface';

@NgModule({
  declarations: [
    HoldingsReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    { provide: REPORT_SERVICE, useFactory: reportServiceFactory, deps: [REPORT_TYPE ]
  }
  ],
  exports: [HoldingsReportComponent]
})
export class HoldingsModule {
  static forRoot(reportType: string): ModuleWithProviders {
    debugger;
    return {
      ngModule: HoldingsModule,
      providers: [
        {provide: REPORT_TYPE, useValue: reportType}
      ]
    };
  }
 }
