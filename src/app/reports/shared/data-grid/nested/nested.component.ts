import { Component, OnInit, Inject } from '@angular/core';
import { REPORT_SERVICE, ReportService } from 'src/app/report-service.interface';

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
