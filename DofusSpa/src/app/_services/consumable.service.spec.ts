import { TestBed } from '@angular/core/testing';

import { ConsumableService } from './consumable.service';

describe('ConsumableService', () => {
  let service: ConsumableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
