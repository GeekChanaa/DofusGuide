import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HavenBag } from '../_models/haven-bag';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class HavenBagService extends AbstractService<HavenBag> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/HavenBags/");
  }
}
