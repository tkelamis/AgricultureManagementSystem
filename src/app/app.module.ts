import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { OptionHoverHighlightDirective } from './directives/option-hover-highlight/option-hover-highlight.directive';
import { ProfitEstimateComponent } from './components/profit-estimate/profit-estimate.component';
import { WelcomeMessagesComponent } from './components/welcome-messages/welcome-messages.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './components/jobs/jobs.component';
import { PracticeComponent } from './practice/practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { JobsDescriptionOptionComponent } from './components/jobs/description/jobs-description-option/jobs-description-option.component';
import { PruningComponent } from './components/jobs/description/pruning/pruning.component';
import { IrrigationComponent } from './components/jobs/description/irrigation/irrigation.component';
import { ProfitEstimateMainComponent } from './components/profit-estimate/profit-estimate-main/profit-estimate-main.component';
import { AccessNotGrantedComponent } from './components/access-not-granted/access-not-granted.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionHoverHighlightDirective,
    ProfitEstimateComponent,
    WelcomeMessagesComponent,
    JobsComponent,
    PruningComponent,
    IrrigationComponent,
    PracticeComponent,
    PageNotFoundComponent,
    JobsDescriptionOptionComponent,
    ProfitEstimateMainComponent,
    AccessNotGrantedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
