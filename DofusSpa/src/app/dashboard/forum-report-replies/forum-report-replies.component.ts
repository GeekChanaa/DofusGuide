import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumReportReply } from 'src/app/_models/forum-report-reply';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumReportReplyService } from 'src/app/_services/forum-report-reply.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-forum-report-replies',
  templateUrl: './forum-report-replies.component.html',
  styleUrls: ['./forum-report-replies.component.sass']
})
export class ForumReportRepliesComponent extends BaseDashboardComponent<ForumReportReply> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'forumReplyID', 'userID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    forumReplyID: boolean,
    userID: boolean,
  } = {
      id: true,
      forumReplyID: true,
      userID: false,
    };
  dataSource: any;
  cities: any;
  city: any = {};
  model: any = {};

  // Progress Bar (state)
  loader : boolean = false;

  // Params for filtering and sorting
  globalParams: any = {};


  constructor(
    private _forumReportReplyService: ForumReportReplyService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_forumReportReplyService,_authService)
  }
  // On init cycle hook
  ngOnInit() {
    this.reloadData();
  }

  // Open Create Dialog
  openCreateDialog(){
    this.dialog.open(CreateComponent).afterClosed().subscribe((data) => {
      this.reloadData();
    });
  }

  // Open Update Dialog
  openEditDialog(id : number){
    this.dialog.open(UpdateComponent, {data : {id : id}}).afterClosed().subscribe((data) => {
      this.reloadData
    })
  }

}
