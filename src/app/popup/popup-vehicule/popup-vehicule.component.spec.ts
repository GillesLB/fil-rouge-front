import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupVehiculeComponent } from './popup-vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VehiculeService } from '../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PopupVehiculeComponent', () => {
  let component: PopupVehiculeComponent;
  let fixture: ComponentFixture<PopupVehiculeComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupVehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule, HttpClientModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        VehiculeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
