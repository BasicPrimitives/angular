import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDiagramComponent } from './org-diagram.component';

describe('OrgDiagramComponent', () => {
  let component: OrgDiagramComponent;
  let fixture: ComponentFixture<OrgDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
