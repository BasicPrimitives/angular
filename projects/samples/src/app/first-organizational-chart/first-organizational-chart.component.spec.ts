import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOrganizationalChartComponent } from './first-organizational-chart.component';

describe('FirstOrganizationalChartComponent', () => {
  let component: FirstOrganizationalChartComponent;
  let fixture: ComponentFixture<FirstOrganizationalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstOrganizationalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOrganizationalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
