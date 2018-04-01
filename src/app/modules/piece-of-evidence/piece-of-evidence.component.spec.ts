import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceOfEvidenceComponent } from './piece-of-evidence.component';

describe('PieceOfEvidenceComponent', () => {
  let component: PieceOfEvidenceComponent;
  let fixture: ComponentFixture<PieceOfEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceOfEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceOfEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
