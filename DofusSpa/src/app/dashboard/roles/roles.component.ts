import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/app/_models/role';
import { AuthService } from 'src/app/_services/auth.service';
import { RoleService } from 'src/app/_services/role.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.sass']
})
export class RolesComponent extends BaseDashboardComponent<Role> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'name', 'level', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
    level: boolean,
  } = {
      id: true,
      name: true,
      level: false,
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
    private _roleService: RoleService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_roleService,_authService)
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
