import { Component, OnInit, Inject } from '@angular/core';
import { REPORT_SERVICE, ReportService } from '../../report-service.interface';

/**
 * I wasn't really sure what the point of this component was 
 * so for now I just removed it from the DG template and otherwise
 * left it alone.  But I would make it into a dumb component and 
 * handle it in a similar manner to both the data grid and
 * column chooser components; not inject the REPORT_SERVICE directly
 * into it.
 */
@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {

  constructor(
    @Inject(REPORT_SERVICE) private reportService: ReportService,
  ) { }

  data = this.reportService.getData();

  ngOnInit() {
  }

}
