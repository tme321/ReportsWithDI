import { Component, OnInit, Input, Host, Inject } from '@angular/core';
import { ReportService, REPORT_SERVICE } from 'src/app/report-service.interface';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() data: any;

  constructor(
    @Inject(REPORT_SERVICE) private reportsService: ReportService,
  ) { }

  ngOnInit() {
    console.log(this.reportsService.getData());
  }

}
