import { TestBed } from '@angular/core/testing';

import { WeaponRecipeService } from './weapon-recipe.service';

describe('WeaponRecipeService', () => {
  let service: WeaponRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
