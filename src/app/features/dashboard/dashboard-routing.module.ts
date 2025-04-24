import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';

const routes: Routes = [
  { path: '', component: WelcomeMessagesComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
