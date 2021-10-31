import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weapon } from '../_models/Weapon';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class WeaponService extends AbstractService<Weapon> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/weapons/");
  }
}
