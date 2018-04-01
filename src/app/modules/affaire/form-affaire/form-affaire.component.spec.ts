import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAffaireComponent } from './form-affaire.component';

describe('FormAffaireComponent', () => {
  let component: FormAffaireComponent;
  let fixture: ComponentFixture<FormAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
