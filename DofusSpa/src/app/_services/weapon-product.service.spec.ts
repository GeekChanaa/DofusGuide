import { TestBed } from '@angular/core/testing';

import { WeaponProductService } from './weapon-product.service';

describe('WeaponProductService', () => {
  let service: WeaponProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
