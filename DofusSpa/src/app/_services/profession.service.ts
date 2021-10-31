import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profession } from '../_models/profession';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService extends AbstractService<Profession> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/professions/");
  }
  
  }
