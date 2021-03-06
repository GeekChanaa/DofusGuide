import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Follower } from 'src/app/_models/follower';
import { AuthService } from 'src/app/_services/auth.service';
import { FollowerService } from 'src/app/_services/follower.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.sass']
})
export class FollowersComponent extends BaseDashboardComponent<Follower> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'userID', 'followID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    userID: boolean,
    followID: boolean,
  } = {
      id: true,
      userID: true,
      followID: false,
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
    private _followerService: FollowerService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_followerService,_authService)
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
