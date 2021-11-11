import { TestBed } from '@angular/core/testing';

import { ProductStatisticService } from './product-statistic.service';

describe('ProductStatisticService', () => {
  let service: ProductStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
