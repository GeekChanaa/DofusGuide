import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipment } from '../_models/equipment';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends AbstractService<Equipment> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Equipments/");
  }
}
