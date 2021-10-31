import { TestBed } from '@angular/core/testing';

import { ConsumableRecipeService } from './consumable-recipe.service';

describe('ConsumableRecipeService', () => {
  let service: ConsumableRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumableRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
