import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Follower } from 'src/app/_models/follower';
import { AuthService } from 'src/app/_services/auth.service';
import { FollowerService } from 'src/app/_services/follower.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<Follower> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    userID: new FormControl(''),
    followID: new FormControl('')
  });

  constructor(
    private _authService: AuthService,
    private _followerService : FollowerService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Follower
  create() {
    this._followerService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
