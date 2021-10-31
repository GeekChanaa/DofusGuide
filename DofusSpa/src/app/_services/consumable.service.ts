import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consumable } from '../_models/consumable';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ConsumableService extends AbstractService<Consumable> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/consumables/");
  }
}
