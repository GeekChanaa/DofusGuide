import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HavenBag } from 'src/app/_models/haven-bag';
import { AuthService } from 'src/app/_services/auth.service';
import { HavenBagService } from 'src/app/_services/haven-bag.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<HavenBag> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    imgUrl: new FormControl(),
    url: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _havenBagService : HavenBagService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating HavenBag
  create() {
    this._havenBagService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
