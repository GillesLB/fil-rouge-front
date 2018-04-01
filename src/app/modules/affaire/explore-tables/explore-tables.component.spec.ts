import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTablesComponent } from './explore-tables.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ExploreTablesComponent', () => {
  let component: ExploreTablesComponent;
  let fixture: ComponentFixture<ExploreTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTablesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
