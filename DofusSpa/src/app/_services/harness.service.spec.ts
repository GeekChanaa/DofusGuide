import { TestBed } from '@angular/core/testing';

import { HarnessService } from './harness.service';

describe('HarnessService', () => {
  let service: HarnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
