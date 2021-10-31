import { TestBed } from '@angular/core/testing';

import { ConsumableStatisticService } from './consumable-statistic.service';

describe('ConsumableStatisticService', () => {
  let service: ConsumableStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumableStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
