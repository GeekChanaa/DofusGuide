import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EquipmentProduct } from '../_models/equipment-product';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentProductService extends AbstractService<EquipmentProduct> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/EquipmentRecipes/");
  }
}