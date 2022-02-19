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
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { BasicPrimitivesModule } from 'basic-primitives';

import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';
import { FirstFamilyChartComponent } from './first-family-chart.component';
import { AddingNewItemsToChartAtRuntimeComponent } from './adding-new-items-to-chart-at-runtime.component';
import { AutoSizeComponent } from './auto-size.component';
import { SelectingCursorItemComponent } from './selecting-cursor-item.component';
import { SelectingHighlightItemComponent } from './selecting-highlight-item.component';
import { SelectingItemsComponent } from './selecting-items.component';
import { ShowFrameComponent } from './show-frame.component';
import { ItemTemplateComponent } from './item-template.component';
import { ButtonsPanelComponent } from './buttons-panel.component';
import { PageSizeOrganizationalChartComponent } from './page-size-organizational-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstOrganizationalChartComponent,
    FirstFamilyChartComponent,
    AddingNewItemsToChartAtRuntimeComponent,
    PageSizeOrganizationalChartComponent,
    AutoSizeComponent,
    SelectingCursorItemComponent,
    SelectingHighlightItemComponent,
    SelectingItemsComponent,
    ShowFrameComponent,
    ButtonsPanelComponent,
    ItemTemplateComponent
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
    MatTreeModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
