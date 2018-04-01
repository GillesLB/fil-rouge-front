import { TestBed, inject } from '@angular/core/testing';

import { WeaponService } from './weapon.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeaponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeaponService]
    });
  });

  it('should be created', inject([WeaponService], (service: WeaponService) => {
    expect(service).toBeTruthy();
  }));
});
