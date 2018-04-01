import { TestBed, inject } from '@angular/core/testing';

import { VehiculeService } from './vehicule.service';
import { HttpClientModule } from '@angular/common/http';

describe('VehiculeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VehiculeService]
    });
  });

  it('should be created', inject([VehiculeService], (service: VehiculeService) => {
    expect(service).toBeTruthy();
  }));
});
