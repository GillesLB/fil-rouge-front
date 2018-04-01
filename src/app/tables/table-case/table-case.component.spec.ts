import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCaseComponent } from './table-case.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { HttpClientModule } from '@angular/common/http';


describe('TableCaseComponent', () => {
  let component: TableCaseComponent;
  let fixture: ComponentFixture<TableCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, RouterModule, HttpClientModule],
      declarations: [ TableCaseComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [CaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
