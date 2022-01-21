import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumReport } from 'src/app/_models/forum-report';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { ForumReportService } from 'src/app/_services/forum-report.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-forum-reports',
  templateUrl: './forum-reports.component.html',
  styleUrls: ['./forum-reports.component.sass']
})
export class ForumReportsComponent extends BaseDashboardComponent<ForumReport> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'forumPostID', 'userID','createdAt', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    forumPostID: boolean,
    userID: boolean,
    createdAt: boolean,
  } = {
      id: true,
      forumPostID: true,
      userID: false,
      createdAt: false,
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
    private _forumReportService: ForumReportService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_forumReportService,_authService)
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
