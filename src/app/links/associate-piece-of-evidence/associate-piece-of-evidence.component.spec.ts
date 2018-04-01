import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatePieceOfEvidenceComponent } from './associate-piece-of-evidence.component';

describe('AssociatePieceOfEvidenceComponent', () => {
  let component: AssociatePieceOfEvidenceComponent;
  let fixture: ComponentFixture<AssociatePieceOfEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatePieceOfEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatePieceOfEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
