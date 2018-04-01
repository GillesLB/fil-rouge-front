import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPieceofevidenceComponent } from './popup-pieceofevidence.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PopupPieceofevidenceComponent', () => {
  let component: PopupPieceofevidenceComponent;
  let fixture: ComponentFixture<PopupPieceofevidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPieceofevidenceComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPieceofevidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
