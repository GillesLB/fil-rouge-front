import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVehiculeComponent } from './table-vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule, MatDialog, MatDialogModule } from '@angular/material';
import { PopupService } from '../../core/popup.service';
import { ActivatedRoute } from '@angular/router';
import { VehiculeService } from '../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
import { CaseService } from '../../core/api/case.service';

describe('TableVehiculeComponent', () => {
  let component: TableVehiculeComponent;
  let fixture: ComponentFixture<TableVehiculeComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, MatDialogModule, HttpClientModule],
      providers: [
        {provide: ActivatedRoute, usevalue: fakeActivatedRoute},
        PopupService,
        VehiculeService,
        CaseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
