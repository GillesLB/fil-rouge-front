import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreateAssociateComponent } from './popup-create-associate.component';

describe('PopupCreateAssociateComponent', () => {
  let component: PopupCreateAssociateComponent;
  let fixture: ComponentFixture<PopupCreateAssociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreateAssociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreateAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
