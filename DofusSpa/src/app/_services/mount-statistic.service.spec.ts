import { TestBed } from '@angular/core/testing';

import { MountStatisticService } from './mount-statistic.service';

describe('MountStatisticService', () => {
  let service: MountStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
