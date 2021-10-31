import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Furniture } from '../_models/furniture';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService extends AbstractService<Furniture> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Furnitures/");
  }
}
