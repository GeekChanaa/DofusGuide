import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonsterDrop } from '../_models/monster-drop';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MonsterDropService extends AbstractService<MonsterDrop> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/MonsterDrops/");
  }
}
