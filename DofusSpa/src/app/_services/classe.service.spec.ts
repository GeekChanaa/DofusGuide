/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClasseService } from './classe.service';

describe('Service: Classe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClasseService]
    });
  });

  it('should ...', inject([ClasseService], (service: ClasseService) => {
    expect(service).toBeTruthy();
  }));
});
