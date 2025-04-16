import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  { path:'', component: WelcomeMessagesComponent },
  { path: 'profitEstimate', component: ProfitEstimateComponent },
  { path: 'jobs', component: JobsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
