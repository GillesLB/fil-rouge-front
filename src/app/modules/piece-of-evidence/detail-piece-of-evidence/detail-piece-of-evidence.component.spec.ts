import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPieceOfEvidenceComponent } from './detail-piece-of-evidence.component';

describe('DetailPieceOfEvidenceComponent', () => {
  let component: DetailPieceOfEvidenceComponent;
  let fixture: ComponentFixture<DetailPieceOfEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPieceOfEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPieceOfEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
