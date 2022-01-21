import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Harvest } from 'src/app/_models/harvest';
import { AuthService } from 'src/app/_services/auth.service';
import { HarvestService } from 'src/app/_services/harvest.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Harvest> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    level: new FormControl(),
    imgUrl: new FormControl(),
    url: new FormControl(),
    professionID: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _harvestService : HarvestService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Harvest
  create() {
    this._harvestService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
