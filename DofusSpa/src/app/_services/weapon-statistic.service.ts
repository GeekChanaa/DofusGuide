import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeaponStatistic } from '../_models/weapon-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class WeaponStatisticService extends AbstractService<WeaponStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/WeaponStatistics/");
  }
}
