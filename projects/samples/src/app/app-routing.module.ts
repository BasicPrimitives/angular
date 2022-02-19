import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';
import { FirstFamilyChartComponent } from './first-family-chart.component';
import { PageSizeOrganizationalChartComponent } from './page-size-organizational-chart.component';
import { AutoSizeComponent } from './auto-size.component';
import { SelectingCursorItemComponent } from './selecting-cursor-item.component';
import { SelectingHighlightItemComponent } from './selecting-highlight-item.component';
import { SelectingItemsComponent } from './selecting-items.component';
import { ShowFrameComponent } from './show-frame.component';
import { ButtonsPanelComponent } from './buttons-panel.component';
import { AddingNewItemsToChartAtRuntimeComponent } from './adding-new-items-to-chart-at-runtime.component';
import { ItemTemplateComponent } from './item-template.component';

const routes: Routes = [
  { path: 'firstorganizationalchart', component: FirstOrganizationalChartComponent },
  { path: 'firstfamilychart', component: FirstFamilyChartComponent },
  { path: 'pagesizeorganizationalchart', component: PageSizeOrganizationalChartComponent },
  { path: 'autosize', component: AutoSizeComponent },
  { path: 'selectingcursoritem', component: SelectingCursorItemComponent },
  { path: 'selectinghighlightitem', component: SelectingHighlightItemComponent },
  { path: 'selectingitems', component: SelectingItemsComponent },
  { path: 'showframe', component: ShowFrameComponent },
  { path: 'buttonspanel', component: ButtonsPanelComponent },
  { path: 'addingnewitemstochartatruntime', component: AddingNewItemsToChartAtRuntimeComponent },
  { path: 'itemtemplate', component: ItemTemplateComponent },
  { path: '', redirectTo: '/firstorganizationalchart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
