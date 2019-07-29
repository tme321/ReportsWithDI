import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoldingsReportComponent } from './reports/holdings/holdings-report/holdings-report.component';
import { TransactionModuleModule } from './transactions/transaction-module/transaction-module.module';
import { SharedModule } from './shared/shared/shared.module';
import { HoldingsModule } from './holdings/holdings/holdings.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoldingsModule.forRoot('Holdings'),
    TransactionModuleModule.forRoot('Transaction'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
