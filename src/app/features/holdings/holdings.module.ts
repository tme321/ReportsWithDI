import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoldingsReportComponent } from './holdings-report/holdings-report.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HoldingsReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    /**
     * Normally I would just provide the REPORT_SERVICE token here as 
     * HoldingsReportService but this will result in a singleton 
     * instance of that service.  In order to closely match the functionality
     * of your factory method I instead provided it inside the 
     * HoldingsReportComponent instead.
     */
    //{ provide: REPORT_SERVICE, useClass: HoldingsReportService }

  ],
  exports: [HoldingsReportComponent]
})
export class HoldingsModule {}
