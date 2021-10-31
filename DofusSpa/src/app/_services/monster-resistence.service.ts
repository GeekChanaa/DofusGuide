import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonsterResistence } from '../_models/monster-resistence';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MonsterResistenceService extends AbstractService<MonsterResistence> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/MonsterResistences/");
  }
}
