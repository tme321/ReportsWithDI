import { Component } from '@angular/core';
import { REPORT_SERVICE } from 'src/app/shared/report/report-service.interface';
import { HoldingsReportService } from './holdings-report.service';

/**
 * The HoldingsReportComponent is only acting as a dynamic provider
 * for the REPORT_SERVICE token.  Its only job, when using this pattern
 * is to set the injection token and then invoke the shared 
 * ReportComponent in its template.
 */
@Component({
  selector: 'app-holdings-report',
  templateUrl: './holdings-report.component.html',
  styleUrls: ['./holdings-report.component.scss'],
  providers: [
    /**
     * Here I provided the HoldingsReportService to the REPORT_SERVICE
     * token because I assumed that you want HoldingsReportService 
     * instances to not be singletons.  Normally, I would want singletons
     * of HoldingsReportService and therefore I would just provide it in
     * HoldingsModule.  But just in case you have an explicit need for 
     * individual instances of the service declaring the provider here will
     * still give you that behavior.
     */
    { provide: REPORT_SERVICE, useClass: HoldingsReportService }
  ]
})
export class HoldingsReportComponent {}
