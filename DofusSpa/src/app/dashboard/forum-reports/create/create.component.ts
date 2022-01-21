import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumReport } from 'src/app/_models/forum-report';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumReportService } from 'src/app/_services/forum-report.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<ForumReport> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    forumPostID: new FormControl(''),
    userID: new FormControl(''),
    createdAt: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _forumReportService : ForumReportService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating ForumReport
  create() {
    this._forumReportService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
