import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDebugTracing } from '@angular/router';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JobsDescriptionOptionComponent } from './components/jobs/description/jobs-description-option/jobs-description-option.component';
import { ProfitEstimateMainComponent } from './components/profit-estimate/profit-estimate-main/profit-estimate-main.component';
import { authGuard } from './guards/auth.guard';
import { AccessNotGrantedComponent } from './components/access-not-granted/access-not-granted.component';
import { returnWithoutSaveGuard } from './guards/return-without-save.guard';
import { AddJobComponent } from './components/jobs/add-job/add-job.component';
import { LeftMenuOptionsComponent } from './components/left-menu-options/left-menu-options.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  { path: 'main', component: WelcomeMessagesComponent},
  { path: 'jobs',component: JobsComponent },
  { path: 'jobs/descriptions', component: JobsDescriptionOptionComponent, canDeactivate:[returnWithoutSaveGuard]  },
  { path: 'jobs/addJob', component: AddJobComponent, canDeactivate:[returnWithoutSaveGuard]  },
  { path: 'profitEstimate', component: ProfitEstimateMainComponent, canActivate:[authGuard], data: {title:'hy!!!!'}},
  { path: 'profitEstimate/descriptions', component: ProfitEstimateComponent },
  { path: 'main/practice', component: AddJobComponent},
  { path: 'main/accessNotGranted', component: AccessNotGrantedComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
