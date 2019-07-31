import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * No longer need to inject the REPORT_SERVICE token.  This is now
 * a dumb component that just receives @Inputs and signals back with
 * @Outputs.
 */
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent {
  @Input() data: any;
  @Output() dgClick = new EventEmitter<any>(); 

  onClick() {
    this.dgClick.next(this.data);
  }
}
