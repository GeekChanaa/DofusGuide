import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Privilege } from 'src/app/_models/privilege';
import { AuthService } from 'src/app/_services/auth.service';
import { PrivilegeService } from 'src/app/_services/privilege.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Privilege> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _privilegeService : PrivilegeService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Privilege
  create() {
    this._privilegeService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
