import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/_models/role';
import { AuthService } from 'src/app/_services/auth.service';
import { RoleService } from 'src/app/_services/role.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Role> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    name: new FormControl(''),
    classeID: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _roleService : RoleService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Role
  create() {
    this._roleService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
