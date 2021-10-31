import { TestBed } from '@angular/core/testing';

import { SetStatisticService } from './set-statistic.service';

describe('SetStatisticService', () => {
  let service: SetStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
