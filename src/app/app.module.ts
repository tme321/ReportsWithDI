import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoldingsModule } from './features/holdings/holdings.module';
import { TransactionModule } from './features/transactions/transaction.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoldingsModule,
    TransactionModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
