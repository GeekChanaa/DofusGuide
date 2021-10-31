import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Harvest } from '../_models/harvest';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class HarvestService extends AbstractService<Harvest> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Harvests/");
  }
}
