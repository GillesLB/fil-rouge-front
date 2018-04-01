import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAssociateComponent } from './popup-associate.component';

describe('PopupAssociateComponent', () => {
  let component: PopupAssociateComponent;
  let fixture: ComponentFixture<PopupAssociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAssociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
