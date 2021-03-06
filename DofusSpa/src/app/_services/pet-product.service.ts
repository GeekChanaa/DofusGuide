import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractService } from './abstract-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetProduct } from '../_models/pet-product';

@Injectable({
  providedIn: 'root'
})
export class PetProductService extends AbstractService<PetProduct> {

  constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
    super(_http, environment.apiUrl+"/api/PetProducts/", _snackBar);
  }
}
