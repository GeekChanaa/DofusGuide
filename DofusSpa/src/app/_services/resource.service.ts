import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resource } from '../_models/resource';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ResourceService extends AbstractService<Resource> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Resources/");
  }
}
