import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PracticeComponent } from './practice/practice.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JobsDescriptionOptionComponent } from './components/jobs/description/jobs-description-option/jobs-description-option.component';
import { ProfitEstimateMainComponent } from './components/profit-estimate/profit-estimate-main/profit-estimate-main.component';
import { authGuard } from './auth.guard';
import { AccessNotGrantedComponent } from './components/access-not-granted/access-not-granted.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  { path: 'main', component: WelcomeMessagesComponent},
  { path: 'jobs',component: JobsComponent },
  { path: 'jobs/descriptions', component: JobsDescriptionOptionComponent },
  { path: 'profitEstimate', component: ProfitEstimateMainComponent, canActivate:[authGuard], data: {title:'hy!!!!'}},
  { path: 'profitEstimate/descriptions', component: ProfitEstimateComponent },
  { path: 'main/practice', component: PracticeComponent},
  { path: 'main/accessNotGranted', component: AccessNotGrantedComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
