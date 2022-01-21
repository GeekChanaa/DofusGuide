import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductComment } from '../_models/product-comment';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProductCommentService extends AbstractService<ProductComment> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ProductComments/");
  }
}
