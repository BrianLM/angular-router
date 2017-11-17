import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';


import { EarlyLifeComponent } from './early-life/early-life.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LinksComponent,
    ResumeComponent,
    EarlyLifeComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
