import { TestBed } from '@angular/core/testing';

import { WeaponCharService } from './weapon-char.service';

describe('WeaponCharService', () => {
  let service: WeaponCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
