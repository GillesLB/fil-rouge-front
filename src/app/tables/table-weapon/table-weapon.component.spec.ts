import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupService } from '../../core/popup.service';
import { TableWeaponComponent } from './table-weapon.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableWeaponComponent', () => {
  let component: TableWeaponComponent;
  let fixture: ComponentFixture<TableWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableWeaponComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule, RouterModule],
      providers: [CaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
