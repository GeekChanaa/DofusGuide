import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Harness } from '../_models/harness';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class HarnessService extends AbstractService<Harness> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Harnesss/");
  }
}
