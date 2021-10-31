import { TestBed } from '@angular/core/testing';

import { IdolStatisticService } from './idol-statistic.service';

describe('IdolStatisticService', () => {
  let service: IdolStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdolStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
