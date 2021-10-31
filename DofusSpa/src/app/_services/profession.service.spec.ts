/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfessionService } from './profession.service';

describe('Service: Job', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessionService]
    });
  });

  it('should ...', inject([ProfessionService], (service: ProfessionService) => {
    expect(service).toBeTruthy();
  }));
});
