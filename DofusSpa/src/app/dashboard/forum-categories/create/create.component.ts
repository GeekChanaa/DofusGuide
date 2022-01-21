import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumCategory } from 'src/app/_models/forum-category';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumCategoryService } from 'src/app/_services/forum-category.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<ForumCategory> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    createdAt: new FormControl(''),
    userID: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _forumCategoryService : ForumCategoryService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating ForumCategory
  create() {
    this._forumCategoryService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
