import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialMainComponent } from './financial-main/financial-main.component';
import { ProfitEstimateComponent } from './profit-estimate/profit-estimate.component';

const routes: Routes = [
  { path: '', component: FinancialMainComponent },
  { path: 'profitEstimation', component: ProfitEstimateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
