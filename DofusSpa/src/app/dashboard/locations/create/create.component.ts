import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from 'src/app/_models/location';
import { AuthService } from 'src/app/_services/auth.service';
import { LocationService } from 'src/app/_services/location.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Location> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    professionID: new FormControl()
  });

  constructor(
    private _authService: AuthService,
    private _locationService : LocationService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Location
  create() {
    this._locationService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
