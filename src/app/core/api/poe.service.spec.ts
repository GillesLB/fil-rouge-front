import { TestBed, inject } from '@angular/core/testing';

import { PoeService } from './poe.service';
import { HttpClientModule } from '@angular/common/http';

describe('PoeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PoeService]
    });
  });

  it('should be created', inject([PoeService], (service: PoeService) => {
    expect(service).toBeTruthy();
  }));
});
