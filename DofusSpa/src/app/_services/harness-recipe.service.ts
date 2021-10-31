import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HarnessRecipe } from '../_models/harness-recipe';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class HarnessRecipeService extends AbstractService<HarnessRecipe> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/HarnessRecipes/");
  }
}
