import { Component, Inject } from '@angular/core';
import { REPORT_SERVICE, ReportService } from './report-service.interface';

/**
 * Here a generic report component accepts a service according to the
 * REPORT_SERVICE provided by its injector parent.  The two components 
 * HoldingsReportComponent and TransactionsReportComponent both 
 * separately provide the token as their own versions of the service.
 * 
 * Then this component acts as a smart component where it is responsible
 * for passing data down to its DataGridComponent and 
 * ColumnChooserComponent components.  Those components should also be 
 * dispatching events up that this component can add listeners to and 
 * respond accordingly by calling the appropriate handler in the service 
 * it was injected with.
 */
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  data = this.reportsService.getData();
  columns = this.reportsService.getColumns();
  drillThrough = this.reportsService.drillThrough ? this.reportsService.drillThrough() : undefined;

  constructor(@Inject(REPORT_SERVICE) private reportsService: ReportService) { }

  onDgClick(e: any) {
    console.log('data grid was clicked:',e);
    this.reportsService.handleDataGridClick(e);
  }

  onCcClick(e: any) {
    console.log('column chooser was clicked:',e);
    this.reportsService.handleColumnChooserClick(e);
  }
}
