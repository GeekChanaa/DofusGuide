import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumCategory } from 'src/app/_models/forum-category';
import { AuthService } from 'src/app/_services/auth.service';
import { ForumCategoryService } from 'src/app/_services/forum-category.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-forum-categories',
  templateUrl: './forum-categories.component.html',
  styleUrls: ['./forum-categories.component.sass']
})
export class ForumCategoriesComponent extends BaseDashboardComponent<ForumCategory> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'title', 'description','createdAt','userID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    title: boolean,
    description: boolean,
    createdAt: boolean,
    userID: boolean,
  } = {
      id: true,
      title: true,
      description: false,
      createdAt: false,
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
    private _forumCategoryService: ForumCategoryService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_forumCategoryService,_authService)
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
