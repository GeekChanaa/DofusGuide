import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumReportReply } from 'src/app/_models/forum-report-reply';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumReportReplyService } from 'src/app/_services/forum-report-reply.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<ForumReportReply> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    forumReplyID: new FormControl(''),
    userID: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _forumReportReplyService : ForumReportReplyService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating ForumReportReply
  create() {
    this._forumReportReplyService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
