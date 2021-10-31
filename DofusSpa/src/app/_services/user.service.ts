import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService<User> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Users/");
  }
}
