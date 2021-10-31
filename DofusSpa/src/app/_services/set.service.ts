import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Set } from '../_models/set';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class SetService extends AbstractService<Set> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Sets/");
  }
}
