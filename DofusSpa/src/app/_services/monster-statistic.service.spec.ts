import { TestBed } from '@angular/core/testing';

import { MonsterStatisticService } from './monster-statistic.service';

describe('MonsterStatisticService', () => {
  let service: MonsterStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
