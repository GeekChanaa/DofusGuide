import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../_models/location';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends AbstractService<Location> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/locations/");
  }
}
