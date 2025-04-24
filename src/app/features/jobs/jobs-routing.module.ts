import { JobsMainComponent } from './components/jobs-main/jobs-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsDescriptionOptionComponent } from './components/jobs-description-option/jobs-description-option.component';
import { returnWithoutSaveGuard } from '../../core/guards/return-without-save.guard';
import { AddJobComponent } from './components/add-job/add-job.component';


const routes: Routes = [
  { path: '', component: JobsMainComponent },
  { path: 'descriptions', component: JobsDescriptionOptionComponent, canDeactivate:[returnWithoutSaveGuard]  },
  { path: 'addJob', component: AddJobComponent, canDeactivate:[returnWithoutSaveGuard]  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class JobsRoutingModule { }
