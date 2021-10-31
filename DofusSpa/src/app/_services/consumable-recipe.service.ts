import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsumableRecipe } from '../_models/consumable-recipe';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ConsumableRecipeService extends AbstractService<ConsumableRecipe> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/consumableRecipes/");
  }
}
