import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumReportComment } from 'src/app/_models/forum-report-comment';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumReportCommentService } from 'src/app/_services/forum-report-comment.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';  
@Component({
  selector: 'app-forum-report-comments',
  templateUrl: './forum-report-comments.component.html',
  styleUrls: ['./forum-report-comments.component.sass']
})
export class ForumReportCommentsComponent extends BaseDashboardComponent<ForumReportComment> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'forumCommentID', 'userID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    forumCommentID: boolean,
    userID: boolean,
  } = {
      id: true,
      forumCommentID: true,
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
    private _forumReportCommentService: ForumReportCommentService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_forumReportCommentService,_authService)
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
