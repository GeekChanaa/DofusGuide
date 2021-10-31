import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MountStatistic } from '../_models/mount-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MountStatisticService extends AbstractService<MountStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/MountStatistics/");
  }
}
