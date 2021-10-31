import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IdolRecipe } from '../_models/idol-recipe';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class IdolRecipeService extends AbstractService<IdolRecipe> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/IdolRecipes/");
  }
}
