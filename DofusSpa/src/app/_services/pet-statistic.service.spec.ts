import { TestBed } from '@angular/core/testing';

import { PetStatisticService } from './pet-statistic.service';

describe('PetStatisticService', () => {
  let service: PetStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
