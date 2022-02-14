import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';
import { FirstFamilyChartComponent } from './first-family-chart.component';
import { SelectingCursorItemComponent } from './selecting-cursor-item.component';
import { SelectingHighlightItemComponent } from './selecting-highlight-item.component';
import { AddingNewItemsToChartAtRuntimeComponent } from './adding-new-items-to-chart-at-runtime.component';

const routes: Routes = [
  { path: 'firstorganizationalchart', component: FirstOrganizationalChartComponent },
  { path: 'firstfamilychart', component: FirstFamilyChartComponent },
  { path: 'selectingcursoritem', component: SelectingCursorItemComponent },
  { path: 'selectinghighlightitem', component: SelectingHighlightItemComponent },
  { path: 'addingnewitemstochartatruntime', component: AddingNewItemsToChartAtRuntimeComponent },
  { path: '', redirectTo: '/firstorganizationalchart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
