import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Classe } from 'src/app/_models/classe';
import { AuthService } from 'src/app/_services/auth.service';
import { ClasseService } from 'src/app/_services/classe.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Classe> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    level: new FormControl(),
    type: new FormControl(),
    url: new FormControl(),
    maleImg: new FormControl(),
    femaleImg: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _classeService : ClasseService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Classe
  create() {
    this._classeService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
