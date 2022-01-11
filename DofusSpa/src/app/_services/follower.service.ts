import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Follower } from '../_models/follower';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class FollowerService extends AbstractService<Follower> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Followers/");
  }
}
