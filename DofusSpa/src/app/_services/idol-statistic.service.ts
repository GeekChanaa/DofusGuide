import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IdolStatistic } from '../_models/idol-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class IdolStatisticService extends AbstractService<IdolStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/IdolStatistics/");
  }
}
