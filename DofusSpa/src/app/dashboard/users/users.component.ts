import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { UserService } from 'src/app/_services/user.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent extends BaseDashboardComponent<User> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'firstName','lastName','email','phone', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    firstName: boolean,
    lastName: boolean,
    phone: boolean,
    email: boolean,
  } = {
      id: true,
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
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
    private _userService: UserService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_userService,_authService)
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
