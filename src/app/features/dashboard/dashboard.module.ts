import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    WelcomeMessagesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
