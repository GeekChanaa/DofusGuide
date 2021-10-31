import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PetStatistic } from '../_models/pet-statistic';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class PetStatisticService extends AbstractService<PetStatistic> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/PetStatistics/");
  }
}
