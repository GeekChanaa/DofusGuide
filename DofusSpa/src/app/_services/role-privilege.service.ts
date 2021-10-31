import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RolePrivilege } from '../_models/role-privilege';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class RolePrivilegeService extends AbstractService<RolePrivilege> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/RolePrivileges/");
  }
}
