import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveChangesModalComponent } from '../../shared/modals/save-changes-modal/save-changes-modal.component';
import { PruningComponent } from './components/pruning/pruning.component';
import { IrrigationComponent } from './components/irrigation/irrigation.component';
import { JobsDescriptionOptionComponent } from './components/jobs-description-option/jobs-description-option.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { JobsMainComponent } from './components/jobs-main/jobs-main.component';
import { JobsRoutingModule } from './jobs-routing.module';



@NgModule({
  declarations: [
    JobsMainComponent,
    PruningComponent,
    IrrigationComponent,
    JobsDescriptionOptionComponent,
    AddJobComponent,
    SaveChangesModalComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
],
  exports: [
    JobsMainComponent,
    PruningComponent,
    IrrigationComponent,
    JobsDescriptionOptionComponent,
    AddJobComponent,
    SaveChangesModalComponent
  ]
})
export class JobsModule { }
