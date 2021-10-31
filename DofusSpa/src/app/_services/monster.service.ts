import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Monster } from '../_models/monster';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MonsterService extends AbstractService<Monster> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Monsters/");
  }
}
