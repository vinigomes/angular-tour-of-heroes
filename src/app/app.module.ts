import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  declarations: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
