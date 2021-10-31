import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonsterArea } from '../_models/monster-area';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MonsterAreaService extends AbstractService<MonsterArea> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/MonsterAreas/");
  }
}
