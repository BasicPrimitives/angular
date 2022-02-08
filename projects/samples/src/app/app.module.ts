import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicPrimitivesModule } from 'basic-primitives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstOrganizationalChartComponent } from './first-organizational-chart/first-organizational-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstOrganizationalChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicPrimitivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
