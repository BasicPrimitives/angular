import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';
import { FirstFamilyChartComponent } from './first-family-chart.component';
import { AddingNewItemsToChartAtRuntimeComponent } from './adding-new-items-to-chart-at-runtime.component';
import { PageSizeOrganizationalChartComponent } from './page-size-organizational-chart.component';
import { AutoSizeComponent } from './auto-size.component';
import { SelectingCursorItemComponent } from './selecting-cursor-item.component';
import { SelectingHighlightItemComponent } from './selecting-highlight-item.component';
import { SelectingItemsComponent } from './selecting-items.component';
import { ShowFrameComponent } from './show-frame.component';
import { ButtonsPanelComponent } from './buttons-panel.component';
import { GroupTitleComponent } from './group-title.component';
import { GroupTitleTemplateComponent } from './group-title-template.component';
import { LabelsComponent } from './labels.component';
import { ItemTemplateComponent } from './item-template.component';
import { ChildrenPlacementTypeComponent } from './children-placement-type.component';
import { CrossBranchAlignmentComponent } from './cross-branch-alignment.component';
import { ChildrenAndAssistantsLevelOffsetComponent } from './children-and-assistants-level-offset.component';
import { AdviserAndAssistantItemTypesComponent } from './adviser-and-assistant-item-types.component';
import { SubAdviserAndSubAssistantItemTypesComponent } from './sub-adviser-and-sub-assistant-item-types.component';
import { GeneralPartnerItemTypeComponent } from './general-partner-item-type.component';
import { LimitedPartnerItemTypeComponent } from './limited-partner-item-type.component';
import { AdviserPartnerItemTypeComponent } from './adviser-partner-item-type.component';
import { MultipleRootItemsInChartComponent } from './multiple-root-items-in-chart.component';
import { MatrixLayoutOfMultipleRootItemsInChartComponent } from './matrix-layout-of-multiple-root-items-in-chart.component';
import { SelectionPathModeComponent } from './selection-path-mode.component';
import { InactiveItemsComponent } from './inactive-items.component';
import { CustomLayoutWithInvisibleItemsComponent } from './custom-layout-with-invisible-items.component';
import { PlaceAssistantsAboveChildrenComponent } from './place-assistants-above-children.component';
import { PlaceAdvisersAboveChildrenComponent } from './place-advisers-above-children.component';
import { SkippedLevelsComponent } from './skipped-levels.component';
import { InactiveFamilyItemsComponent } from './inactive-family-items.component';
import { MatrixLayoutInFamilyChartComponent } from './matrix-layout-in-family-chart.component';
import { MatrixGroupsInFamilyChartComponent } from './matrix-groups-in-family-chart.component';
import { LabelsCascadesInFamilyChartComponent } from './labels-cascades-in-family-chart.component';
import { LabelsAndMatrixInFamilyChartComponent } from './labels-and-matrix-in-family-chart.component';
import { FamilyChartItemsOrderingComponent } from './family-chart-items-ordering.component';
import { MultipleFamiliesOrderingComponent } from './multiple-families-ordering.component';
import { FamilyChartPrimaryParentComponent } from './family-chart-primary-parent.component';
import { LoopsInFamilyChartComponent } from './loops-in-family-chart.component';
import { SelectionPathModeInFamilyChartComponent } from './selection-path-mode-in-family-chart.component';
import { ZoomWithItemTemplateComponent } from './zoom-with-item-template.component';
import { ZoomWithCssScaleTransformComponent } from './zoom-with-css-scale-transform.component';
import { ItemTemplateLabelComponent } from './item-template-label.component';
import { SelectionCheckboxInItemTemplateComponent } from './selection-checkbox-in-item-template.component';
import { CursorTemplateComponent } from './cursor-template.component';
import { HighlightTemplateComponent } from './highlight-template.component';
import { ConnectorAnnotationComponent } from './connector-annotation.component';
import { ShapeAnnotationComponent } from './shape-annotation.component';
import { LevelAnnotationComponent } from './level-annotation.component';
import { LevelAnnotationTemplateComponent } from './level-annotation-template.component';
import { HighlightPathAnnotationComponent } from './highlight-path-annotation.component';
import { PertChartComponent } from './pert-chart.component';
import { FamilyHideGrandParentsConnectionsComponent } from './family-hide-grand-parents-connections.component';

const routes: Routes = [
  { path: 'firstorganizationalchart', component: FirstOrganizationalChartComponent },
  { path: 'firstfamilychart', component: FirstFamilyChartComponent },
  { path: 'addingnewitemstochartatruntime', component: AddingNewItemsToChartAtRuntimeComponent },
  { path: 'pagesizeorganizationalchart', component: PageSizeOrganizationalChartComponent },
  { path: 'autosize', component: AutoSizeComponent },
  { path: 'selectingcursoritem', component: SelectingCursorItemComponent },
  { path: 'selectinghighlightitem', component: SelectingHighlightItemComponent },
  { path: 'selectingitems', component: SelectingItemsComponent },
  { path: 'showframe', component: ShowFrameComponent },
  { path: 'buttonspanel', component: ButtonsPanelComponent },
  { path: 'grouptitle', component: GroupTitleComponent },
  { path: 'grouptitletemplate', component: GroupTitleTemplateComponent },
  { path: 'labels', component: LabelsComponent },
  { path: "childrenplacementtype", component: ChildrenPlacementTypeComponent },
  { path: "crossbranchalignment", component: CrossBranchAlignmentComponent},
  { path: "childrenandassistantsleveloffset", component: ChildrenAndAssistantsLevelOffsetComponent},
  { path: "adviserandassistantitemtypes", component: AdviserAndAssistantItemTypesComponent},
  { path: "subadviserandsubassistantitemtypes", component: SubAdviserAndSubAssistantItemTypesComponent },
  { path: "generalpartneritemtype", component: GeneralPartnerItemTypeComponent },
  { path: "limitedpartneritemtype", component: LimitedPartnerItemTypeComponent },
  { path: "adviserpartneritemtype", component: AdviserPartnerItemTypeComponent },
  { path: "multiplerootitemsinchart", component: MultipleRootItemsInChartComponent},
  { path: "matrixlayoutofmultiplerootitemsinchart", component: MatrixLayoutOfMultipleRootItemsInChartComponent },
  { path: "selectionpathmode", component: SelectionPathModeComponent },
  { path: "inactiveitems", component: InactiveItemsComponent },
  { path: "customlayoutwithinvisibleitems", component: CustomLayoutWithInvisibleItemsComponent },
  { path: "placeassistantsabovechildren", component: PlaceAssistantsAboveChildrenComponent },
  { path: "placeadvisersabovechildren", component: PlaceAdvisersAboveChildrenComponent },
  { path: "skippedlevels", component: SkippedLevelsComponent },
  { path: "inactivefamilyitems", component: InactiveFamilyItemsComponent },
  { path: "matrixlayoutinfamilychart", component: MatrixLayoutInFamilyChartComponent },
  { path: "matrixgroupsinfamilychart", component: MatrixGroupsInFamilyChartComponent },
  { path: "labelscascadesinfamilychart", component: LabelsCascadesInFamilyChartComponent },
  { path: "labelsnmatrixinfamilychart", component: LabelsAndMatrixInFamilyChartComponent },
  { path: "familychartitemsordering", component: FamilyChartItemsOrderingComponent },
  { path: "multiplefamiliesordering", component: MultipleFamiliesOrderingComponent },
  { path: "familychartprimaryparent", component: FamilyChartPrimaryParentComponent },
  { path: "loopsinfamilychart", component: LoopsInFamilyChartComponent },
  { path: "selectionpathmodeinfamilychart", component: SelectionPathModeInFamilyChartComponent },
  { path: "itemtemplate", component: ItemTemplateComponent },
  { path: "zoomwithitemtemplate", component: ZoomWithItemTemplateComponent },
  { path: "zoomwithcssscaletransform", component: ZoomWithCssScaleTransformComponent },
  { path: "itemtemplatelabel", component: ItemTemplateLabelComponent },
  { path: "selectioncheckboxinitemtemplate", component: SelectionCheckboxInItemTemplateComponent },
  { path: "cursortemplate", component: CursorTemplateComponent },
  { path: "highlighttemplate", component: HighlightTemplateComponent },
  { path: "connectorannotation", component: ConnectorAnnotationComponent },
  { path: "shapeannotation", component: ShapeAnnotationComponent },
  { path: "levelannotation", component: LevelAnnotationComponent },
  { path: "levelannotationtemplate", component: LevelAnnotationTemplateComponent },
  { path: "highlightpathannotation", component: HighlightPathAnnotationComponent },
  { path: "pertchart", component: PertChartComponent},
  { path: "familyhidegrandparentsconnections", component: FamilyHideGrandParentsConnectionsComponent },
  { path: '', redirectTo: '/firstorganizationalchart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
