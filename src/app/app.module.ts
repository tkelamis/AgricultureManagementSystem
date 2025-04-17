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
import { PruningComponent } from './components/jobs/pruning/pruning.component';
import { IrrigationComponent } from './components/jobs/irrigation/irrigation.component';
import { FadeInDirective } from './fade-in.directive';
import { FadeInWrapperComponent } from './fade-in-wrapper/fade-in-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionHoverHighlightDirective,
    ProfitEstimateComponent,
    WelcomeMessagesComponent,
    JobsComponent,
    PruningComponent,
    IrrigationComponent,
    FadeInDirective,
    FadeInWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
