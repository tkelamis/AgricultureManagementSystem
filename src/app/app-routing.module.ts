import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path:'',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: WelcomeMessagesComponent },
  { path: 'profitEstimate', component: ProfitEstimateComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
