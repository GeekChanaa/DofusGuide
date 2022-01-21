import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumReportComment } from 'src/app/_models/forum-report-comment';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumReportCommentService } from 'src/app/_services/forum-report-comment.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<ForumReportComment> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    forumCommentID: new FormControl(''),
    userID: new FormControl('')
  });

  constructor(
    private _authService: AuthService,
    private _forumReportCommentService : ForumReportCommentService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Classe
  create() {
    this._forumReportCommentService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
