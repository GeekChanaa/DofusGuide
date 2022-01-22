import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';
import { AbstractService } from './abstract-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<Product> {

  constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
    super(_http, environment.apiUrl+"/api/Products/", _snackBar);
  }
}
