import { TestBed } from '@angular/core/testing';

import { EquipmentProductService } from './equipment-product.service';

describe('EquipmentProductService', () => {
  let service: EquipmentProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
