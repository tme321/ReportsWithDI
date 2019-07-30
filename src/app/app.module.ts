import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionModuleModule } from './transactions/transaction-module/transaction-module.module';
import { HoldingsModule } from './holdings/holdings/holdings.module';
import { NestedComponent } from './reports/shared/data-grid/nested/nested.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoldingsModule,
    TransactionModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
