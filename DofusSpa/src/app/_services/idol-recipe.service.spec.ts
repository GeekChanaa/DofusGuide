import { TestBed } from '@angular/core/testing';

import { IdolRecipeService } from './idol-recipe.service';

describe('IdolRecipeService', () => {
  let service: IdolRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdolRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
