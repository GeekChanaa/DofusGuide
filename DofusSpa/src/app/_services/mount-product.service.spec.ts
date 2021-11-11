import { TestBed } from '@angular/core/testing';

import { MountProductService } from './mount-product.service';

describe('MountProductService', () => {
  let service: MountProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
