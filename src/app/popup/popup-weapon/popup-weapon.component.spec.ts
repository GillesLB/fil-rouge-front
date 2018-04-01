import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWeaponComponent } from './popup-weapon.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PopupWeaponComponent', () => {
  let component: PopupWeaponComponent;
  let fixture: ComponentFixture<PopupWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupWeaponComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
