import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Furniture } from 'src/app/_models/furniture';
import { AuthService } from 'src/app/_services/auth.service';
import { FurnitureService } from 'src/app/_services/furniture.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Furniture> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    havenBagID: new FormControl(''),
    imgUrl: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _furnitureService : FurnitureService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Furniture
  create() {
    this._furnitureService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
