import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.scss']
})
export class ColumnChooserComponent implements OnInit {

  @Input() columns: any;

  constructor() { }


  ngOnInit() {
  }

}
