import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layout/main/main.component';
import { OptionHoverHighlightDirective } from './shared/directives/option-hover-highlight.directive';
import { WelcomeMessagesComponent } from './features/dashboard/components/welcome-messages/welcome-messages.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticeComponent } from './features/practice/practice/practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AccessNotGrantedComponent } from './shared/components/access-not-granted/access-not-granted.component';
import { LeftMenuOptionsComponent } from './layout/left-menu-options/left-menu-options.component';
import { JobsModule } from './features/jobs/jobs.module';
import { ProfitEstimateComponent } from './features/financial/profit-estimate/profit-estimate.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { FarmsModule } from './features/farms/farms.module';
import { FinancialModule } from './features/financial/financial.module';
import { PracticeModule } from './features/practice/practice.module';

@NgModule({
  declarations: [
    MainComponent,
    OptionHoverHighlightDirective,
    PageNotFoundComponent,
    AccessNotGrantedComponent,
    LeftMenuOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    JobsModule ,
    DashboardModule,
    FarmsModule,
    FinancialModule,
    PracticeModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
