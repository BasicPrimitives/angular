import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'bp-checkbox:not(a)',
    template: `<div class="checkbox-div">
    <input type="checkbox" name="checkbox" class="checkbox-input" [checked]="isSelected" (change)="onChange" [attr.data-id]="id" />
      <span name="selectiontext" class="checkbox-span" [attr.data-id]="id" >
        {{label}}
      </span>
    </div>`,
    styleUrls: ['./checkbox.component.css']
  })
export class CheckboxComponent {
  @Input()
  id: string | null = null;

  @Input()
  label: string = "Selected";

  @Input()
  isSelected: boolean = false;

  onChange = () => null;

  borderWidth: string = "1px";
};
