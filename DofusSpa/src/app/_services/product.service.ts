import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractService<Product> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Products/");
  }
}
