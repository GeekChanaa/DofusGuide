import { TestBed } from '@angular/core/testing';

import { PetProductService } from './pet-product.service';

describe('PetProductService', () => {
  let service: PetProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
