import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Decor } from 'src/app/_models/decor';
import { AuthService } from 'src/app/_services/auth.service';
import { DecorService } from 'src/app/_services/decor.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Decor> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    imgUrl: new FormControl(''),
    havenBagID: new FormControl('')
  });

  constructor(
    private _authService: AuthService,
    private _classeService : DecorService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Decor
  create() {
    this._classeService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
