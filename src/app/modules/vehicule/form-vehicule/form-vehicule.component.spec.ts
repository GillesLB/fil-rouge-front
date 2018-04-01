import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculeComponent } from './form-vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculeService } from '../../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

describe('FormVehiculeComponent', () => {
  let component: FormVehiculeComponent;
  let fixture: ComponentFixture<FormVehiculeComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;
  const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [FormsModule, HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, useValue: fakeRouter},
        VehiculeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
