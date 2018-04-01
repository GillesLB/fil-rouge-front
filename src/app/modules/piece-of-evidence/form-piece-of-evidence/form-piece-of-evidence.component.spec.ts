import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPieceOfEvidenceComponent } from './form-piece-of-evidence.component';

describe('FormPieceOfEvidenceComponent', () => {
  let component: FormPieceOfEvidenceComponent;
  let fixture: ComponentFixture<FormPieceOfEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPieceOfEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPieceOfEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
