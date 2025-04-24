import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDebugTracing } from '@angular/router';
import { ProfitEstimateComponent } from './features/financial/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './features/dashboard/components/welcome-messages/welcome-messages.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { JobsDescriptionOptionComponent } from './features/jobs/components/jobs-description-option/jobs-description-option.component';
import { FinancialMainComponent } from './features/financial/financial-main/financial-main.component';
import { AccessNotGrantedComponent } from './shared/components/access-not-granted/access-not-granted.component';
import { returnWithoutSaveGuard } from './core/guards/return-without-save.guard';
import { AddJobComponent } from './features/jobs/components/add-job/add-job.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  { path: 'main', component: WelcomeMessagesComponent},
  { path: 'jobs',
    loadChildren: () => import('./features/jobs/jobs.module').then(j => j.JobsModule)
  },
  { path: 'financial',
    loadChildren: () => import('./features/financial/financial.module').then(f => f.FinancialModule)
  },
  { path: 'profitEstimate', component: FinancialMainComponent, data: {title:'hy!!!!'}},
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


  
