import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableWeaponsComponent } from './table-weapons.component';
import { MatTableModule } from '@angular/material';
import { WeaponService } from '../../core/api/weapon.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// description de l'objet à tester
describe('TableWeaponsComponent', () => {
  let component: TableWeaponsComponent;
  let fixture: ComponentFixture<TableWeaponsComponent>;

  // execution de code avant le test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWeaponsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule],
      providers: [WeaponService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // description de la fonctionnalité à tester (ici, doit créer)
  it('should create', () => {
    // evaluation du cas à tester (ici, la valeur est : vrai)
    expect(component).toBeTruthy();
  });
});
