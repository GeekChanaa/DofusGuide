import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Classe } from '../_models/classe';
import { AbstractService } from './abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends AbstractService<Classe> {

constructor(protected _http: HttpClient, protected _snackBar : MatSnackBar) {
  super(_http, environment.apiUrl+"/api/classes/",_snackBar);
}

}
