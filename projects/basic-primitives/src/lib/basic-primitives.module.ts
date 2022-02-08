import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgDiagramComponent } from './diagrams/org-diagram.component';
import { RotatedText } from './diagrams/rotated-text.component';
import { ItemComponent } from './diagrams/components/item.component';
import { HighlightComponent } from './diagrams/components/highlight.component';
import { BaseDiagramComponent } from './diagrams/base-diagram.component';
import { CursorComponent } from './diagrams/components/cursor.component';
import { CheckboxComponent } from './diagrams/components/checkbox.component';
import { GroupTitleComponent } from './diagrams/components/group-title.component';
import { DotHighlightComponent } from './diagrams/components/dot-highlight.component';
import { LevelBackgroundComponent } from './diagrams/components/level-background.component';
import { LevelTitleComponent } from './diagrams/components/level-title.component';



@NgModule({
  declarations: [
    BaseDiagramComponent,
    OrgDiagramComponent,
    RotatedText,
    ItemComponent,
    CursorComponent,
    HighlightComponent,
    DotHighlightComponent,
    CheckboxComponent,
    GroupTitleComponent,
    LevelBackgroundComponent,
    LevelTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrgDiagramComponent,
    RotatedText
  ]
})
export class BasicPrimitivesModule { }
