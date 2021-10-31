import { TestBed } from '@angular/core/testing';

import { MonsterAreaService } from './monster-area.service';

describe('MonsterAreaService', () => {
  let service: MonsterAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
