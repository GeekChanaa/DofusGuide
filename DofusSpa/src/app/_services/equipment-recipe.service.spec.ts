import { TestBed } from '@angular/core/testing';

import { EquipmentRecipeService } from './equipment-recipe.service';

describe('EquipmentRecipeService', () => {
  let service: EquipmentRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
