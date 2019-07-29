import { Component, OnInit, Inject } from '@angular/core';
import { ReportService, REPORT_SERVICE } from '../../../report-service.interface';
import { HoldingsReportServiceService } from '../service/holdings-report-service.service';


@Component({
  selector: 'app-holdings-report',
  templateUrl: './holdings-report.component.html',
  styleUrls: ['./holdings-report.component.scss'],
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
