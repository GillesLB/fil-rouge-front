import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePieceofevidenceComponent } from './table-pieceofevidence.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../core/api/case.service';
import { HttpClientModule } from '@angular/common/http';

describe('TablePieceofevidenceComponent', () => {
  let component: TablePieceofevidenceComponent;
  let fixture: ComponentFixture<TablePieceofevidenceComponent>;
  const fakeActivatedRoute = {
    snapshot: {data: {}}
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePieceofevidenceComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [MatTableModule, HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        CaseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePieceofevidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
