import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Consumable } from 'src/app/_models/consumable';
import { AuthService } from 'src/app/_services/auth.service';
import { ConsumableService } from 'src/app/_services/consumable.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Consumable> implements OnInit  {
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
    imgUrl: new FormControl(),
    url: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _consumableService : ConsumableService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Consumable
  create() {
    this._consumableService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
