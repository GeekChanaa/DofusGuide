import { TestBed } from '@angular/core/testing';

import { MonsterDropService } from './monster-drop.service';

describe('MonsterDropService', () => {
  let service: MonsterDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
