import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from '../components/jobs/jobs.component';
import { PruningComponent } from '../components/jobs/description/pruning/pruning.component';
import { IrrigationComponent } from '../components/jobs/description/irrigation/irrigation.component';
import { JobsDescriptionOptionComponent } from '../components/jobs/description/jobs-description-option/jobs-description-option.component';
import { AddJobComponent } from '../components/jobs/add-job/add-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    JobsComponent,
    PruningComponent,
    IrrigationComponent,
    JobsDescriptionOptionComponent,
    AddJobComponent
  ],
  imports: [
    
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    JobsComponent,
    PruningComponent,
    IrrigationComponent,
    JobsDescriptionOptionComponent,
    AddJobComponent
  ]
})
export class JobsModule { }
