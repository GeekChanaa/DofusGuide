import { TestBed } from '@angular/core/testing';

import { IdolService } from './idol.service';

describe('IdolService', () => {
  let service: IdolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
