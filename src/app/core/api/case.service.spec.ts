import { TestBed, inject } from '@angular/core/testing';

import { CaseService } from './case.service';
import { HttpClientModule } from '@angular/common/http';
import { Case } from '../model';

describe('CaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CaseService]
    });
  });

  it('should be created', inject([CaseService], (service: CaseService) => {
    expect(service).toBeTruthy();
  }));
});
