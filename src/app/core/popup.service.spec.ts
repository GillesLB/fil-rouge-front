import { TestBed, inject } from '@angular/core/testing';

import { PopupService } from './popup.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';


describe('PopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
      providers: [PopupService]
    });
  });

  it('should be created', inject([PopupService], (service: PopupService) => {
    expect(service).toBeTruthy();
  }));
});
