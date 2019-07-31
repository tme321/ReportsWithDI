import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * No longer need to inject the REPORT_SERVICE token.  This is now
 * a dumb component that just receives @Inputs and signals back with
 * @Outputs.
 */
@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.scss']
})
export class ColumnChooserComponent {
  @Input() columns: any;
  @Output() ccClick = new EventEmitter<any>();

  onClick() {
    this.ccClick.next(this.columns);
  }
}
