import { Component, OnInit, Inject } from '@angular/core';
import { ReportService, REPORT_SERVICE, reportServiceFactory, REPORT_TYPE } from '../../../report-service.interface';


@Component({
  selector: 'app-holdings-report',
  templateUrl: './holdings-report.component.html',
  styleUrls: ['./holdings-report.component.scss'],
  providers: [
    { provide: REPORT_TYPE, useValue: 'Holdings' },
    { provide: REPORT_SERVICE, useFactory: reportServiceFactory,  deps: [REPORT_TYPE]}
  ]
})
export class HoldingsReportComponent implements OnInit {

  constructor(
    @Inject(REPORT_SERVICE) private reportsService: ReportService
  ) { }

  data = this.reportsService.getData();
  columns = this.reportsService.getColumns();
  drillThrough = this.reportsService.drillThrough ? this.reportsService.drillThrough() : undefined;

  ngOnInit() {
  }
}
