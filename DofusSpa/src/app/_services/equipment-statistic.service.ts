import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EquipmentStatistic } from '../_models/equipment-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentStatisticService extends AbstractService<EquipmentStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/EquipmentStatistics/");
  }
}
