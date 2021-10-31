import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pet } from '../_models/pet';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class PetService extends AbstractService<Pet> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Pets/");
  }
}
