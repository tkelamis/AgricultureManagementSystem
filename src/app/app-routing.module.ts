import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AccessNotGrantedComponent } from './shared/components/access-not-granted/access-not-granted.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main', 
    pathMatch: 'full'
  },
  { path: 'main',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(w => w.DashboardModule)
  },
  { path: 'jobs',
    loadChildren: () => import('./features/jobs/jobs.module').then(j => j.JobsModule)
  },
  { path: 'financial',
    loadChildren: () => import('./features/financial/financial.module').then(f => f.FinancialModule)
  },
  { path: 'practice',
    loadChildren: () => import('./features/practice/practice.module').then(p => p.PracticeModule)
  },
  { path: 'main/accessNotGranted', component: AccessNotGrantedComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  
