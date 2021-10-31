import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mount } from '../_models/mount';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class MountService extends AbstractService<Mount> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Mounts/");
  }
}
