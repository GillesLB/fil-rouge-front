import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateVehiculeComponent } from './associate-vehicule.component';

describe('AssociateVehiculeComponent', () => {
  let component: AssociateVehiculeComponent;
  let fixture: ComponentFixture<AssociateVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
