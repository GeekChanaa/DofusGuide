import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonsterStatistic } from '../_models/monster-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MonsterStatisticService extends AbstractService<MonsterStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/MonsterStatistics/");
  }
}
