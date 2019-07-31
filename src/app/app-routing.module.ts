import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsReportComponent } from './features/transactions/transactions-report/transactions-report.component';
import { HoldingsReportComponent } from './features/holdings/holdings-report/holdings-report.component';

const routes: Routes = [
{
  path: 'transactions',
  component: TransactionsReportComponent
},
{
  path: 'holdings',
  component : HoldingsReportComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
