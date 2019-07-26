import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsReportComponent } from './reports/transactions/transactions-report/transactions-report.component';
import { HoldingsReportComponent } from './reports/holdings/holdings-report/holdings-report.component';
import { ColumnChooserComponent } from './reports/shared/column-chooser/column-chooser.component';
import { DataGridComponent } from './reports/shared/data-grid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsReportComponent,
    HoldingsReportComponent,
    ColumnChooserComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
