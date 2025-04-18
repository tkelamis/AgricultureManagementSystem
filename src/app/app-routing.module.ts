import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PracticeComponent } from './practice/practice.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', // The empty path will match the root and redirect to 'main'
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  { path: 'main', component: WelcomeMessagesComponent },
  { path: 'main/profitEstimate', component: ProfitEstimateComponent },
  { path: 'jobs',
    children: [
      { path: 'options', component: JobsComponent}
    ]
  },
  { path: 'main/practice', component: PracticeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
