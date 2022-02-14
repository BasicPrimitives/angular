import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';

import { BasicPrimitivesModule } from 'basic-primitives';

import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';
import { FirstFamilyChartComponent } from './first-family-chart.component';
import { AddingNewItemsToChartAtRuntimeComponent } from './adding-new-items-to-chart-at-runtime.component';
import { SelectingCursorItemComponent } from './selecting-cursor-item.component';
import { SelectingHighlightItemComponent } from './selecting-highlight-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstOrganizationalChartComponent,
    FirstFamilyChartComponent,
    AddingNewItemsToChartAtRuntimeComponent,
    SelectingCursorItemComponent,
    SelectingHighlightItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BasicPrimitivesModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
