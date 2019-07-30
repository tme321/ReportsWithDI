import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnChooserComponent } from 'src/app/reports/shared/column-chooser/column-chooser.component';
import { DataGridComponent } from 'src/app/reports/shared/data-grid/data-grid.component';
import { NestedComponent } from 'src/app/reports/shared/data-grid/nested/nested.component';

@NgModule({
  declarations: [
    ColumnChooserComponent,
    DataGridComponent,
    NestedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColumnChooserComponent,
    DataGridComponent,
  ]
})
export class SharedModule { }
