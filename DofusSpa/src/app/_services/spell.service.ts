import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Spell } from '../_models/spell';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class SpellService extends AbstractService<Spell> {

  constructor(protected _http: HttpClient) {
    super(_http, environment.apiUrl+"/api/Spells/");
  }
}
