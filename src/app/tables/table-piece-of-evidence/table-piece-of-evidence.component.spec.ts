import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePieceOfEvidenceComponent } from './table-piece-of-evidence.component';

describe('TablePieceOfEvidenceComponent', () => {
  let component: TablePieceOfEvidenceComponent;
  let fixture: ComponentFixture<TablePieceOfEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePieceOfEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePieceOfEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
