import { Component, OnInit, Input, Host, Inject } from '@angular/core';
import { REPORT_SERVICE, ReportService } from 'src/app/report-service.interface';

@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.scss']
})
export class ColumnChooserComponent implements OnInit {

  @Input() columns: any;

  constructor(
    @Inject(REPORT_SERVICE) private reportsService: ReportService,
  ) { }


  ngOnInit() {
    console.log(this.reportsService.getData());
  }

}
