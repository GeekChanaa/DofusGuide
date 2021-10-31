import { TestBed } from '@angular/core/testing';

import { WeaponStatisticService } from './weapon-statistic.service';

describe('WeaponStatisticService', () => {
  let service: WeaponStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
