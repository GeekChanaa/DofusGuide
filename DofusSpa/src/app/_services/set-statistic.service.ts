import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SetStatistic } from '../_models/set-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class SetStatisticService extends AbstractService<SetStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/SetStatistics/");
  }
}
