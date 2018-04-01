import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteLinkComponent } from './popup-delete-link.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { VehiculeService } from '../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PopupDeleteLinkComponent', () => {
  let component: PopupDeleteLinkComponent;
  let fixture: ComponentFixture<PopupDeleteLinkComponent>;
  const FakeDialogRef = {};
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDeleteLinkComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {provide: MatDialogRef, usevalue: FakeDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        VehiculeService
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
