import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ground } from 'src/app/_models/ground';
import { AuthService } from 'src/app/_services/auth.service';
import { GroundService } from 'src/app/_services/ground.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Ground> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    havenBagID: new FormControl(''),
    imgUrl: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _groundService : GroundService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Classe
  create() {
    this._groundService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
