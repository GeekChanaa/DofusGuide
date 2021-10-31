import { TestBed } from '@angular/core/testing';

import { EquipmentStatisticService } from './equipment-statistic.service';

describe('EquipmentStatisticService', () => {
  let service: EquipmentStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
