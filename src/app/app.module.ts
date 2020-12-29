import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivityGraphComponent } from './activity-graph/activity-graph.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { AboutUsComponent } from './about-us/about-us.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityGraphComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule, NgApexchartsModule, AppRoutingModule, FormsModule, NgSelectModule, ReactiveFormsModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
