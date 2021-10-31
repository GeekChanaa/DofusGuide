import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Privilege } from '../_models/privilege';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService extends AbstractService<Privilege> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Privileges/");
  }
}
