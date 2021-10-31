import { TestBed } from '@angular/core/testing';

import { HavenBagService } from './haven-bag.service';

describe('HavenBagService', () => {
  let service: HavenBagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HavenBagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
