import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MonsterResistence } from '../_models/monster-resistence';
import { AbstractService } from './abstract-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MonsterResistenceService extends AbstractService<MonsterResistence> {

  constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
    super(_http, environment.apiUrl+"/api/MonsterResistences/", _snackBar);
  }
}
