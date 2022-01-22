import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeaponRecipe } from '../_models/weapon-recipe';
import { AbstractService } from './abstract-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class WeaponRecipeService extends AbstractService<WeaponRecipe> {

  constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
    super(_http, environment.apiUrl+"/api/WeaponRecipes/",_snackBar);
  }
}
