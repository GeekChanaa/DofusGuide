import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductStatistic } from '../_models/product-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProductStatisticService extends AbstractService<ProductStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/ProductStatistics/");
  }
}
