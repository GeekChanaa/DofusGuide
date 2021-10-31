import { TestBed } from '@angular/core/testing';

import { MonsterResistenceService } from './monster-resistence.service';

describe('MonsterResistenceService', () => {
  let service: MonsterResistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterResistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
