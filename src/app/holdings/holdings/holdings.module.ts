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
  exports: [HoldingsReportComponent]
})
export class HoldingsModule {

 }
