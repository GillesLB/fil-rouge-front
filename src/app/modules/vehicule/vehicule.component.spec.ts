import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeComponent } from './vehicule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('VehiculeComponent', () => {
  let component: VehiculeComponent;
  let fixture: ComponentFixture<VehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
