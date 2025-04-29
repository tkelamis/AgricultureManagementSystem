import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { PracticeChildComponent } from './practice-child/practice-child.component';


@NgModule({
  declarations: [
    PracticeComponent,
    PracticeChildComponent],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
