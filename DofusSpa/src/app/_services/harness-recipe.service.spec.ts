import { TestBed } from '@angular/core/testing';

import { HarnessRecipeService } from './harness-recipe.service';

describe('HarnessRecipeService', () => {
  let service: HarnessRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarnessRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
