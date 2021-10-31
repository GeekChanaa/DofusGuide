import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Role } from '../_models/role';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends AbstractService<Role> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Roles/");
  }
}
