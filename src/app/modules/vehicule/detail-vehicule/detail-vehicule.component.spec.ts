import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVehiculeComponent } from './detail-vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from '../../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';
import { CaseService } from '../../../core/api/case.service';

describe('DetailVehiculeComponent', () => {
  let component: DetailVehiculeComponent;
  let fixture: ComponentFixture<DetailVehiculeComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;
  const fakeRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {provide: Router, usevalue: fakeRouter},
        VehiculeService,
        CaseService
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
