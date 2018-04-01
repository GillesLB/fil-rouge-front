import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVehiculesComponent } from './table-vehicules.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { VehiculeService } from '../../core/api/vehicule.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableVehiculesComponent', () => {
  let component: TableVehiculesComponent;
  let fixture: ComponentFixture<TableVehiculesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVehiculesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule],
      providers: [VehiculeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
