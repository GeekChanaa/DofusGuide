import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeaponChar } from '../_models/weapon-char';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class WeaponCharService extends AbstractService<WeaponChar> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/WeaponChars/");
  }
}
