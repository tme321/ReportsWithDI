import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { ColumnChooserComponent } from './report/column-chooser/column-chooser.component';
import { DataGridComponent } from './report/data-grid/data-grid.component';
import { NestedComponent } from './report/data-grid/nested/nested.component';

@NgModule({
  declarations: [
    ColumnChooserComponent,
    DataGridComponent,
    NestedComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    ColumnChooserComponent,
    DataGridComponent,
    ReportComponent,
  ]
})
export class SharedModule { }
