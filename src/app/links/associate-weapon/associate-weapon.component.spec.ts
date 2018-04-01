import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateWeaponComponent } from './associate-weapon.component';

describe('AssociateWeaponComponent', () => {
  let component: AssociateWeaponComponent;
  let fixture: ComponentFixture<AssociateWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
