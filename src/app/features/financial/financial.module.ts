import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialMainComponent } from './financial-main/financial-main.component';
import { ProfitEstimateComponent } from './profit-estimate/profit-estimate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FinancialMainComponent,
    ProfitEstimateComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    FormsModule
  ]
})
export class FinancialModule { }
