import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Privilege } from 'src/app/_models/privilege';
import { AuthService } from 'src/app/_services/auth.service';
import { PrivilegeService } from 'src/app/_services/privilege.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.sass']
})
export class PrivilegesComponent extends BaseDashboardComponent<Privilege> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'name', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
  } = {
      id: true,
      name: true,
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
    private _equipmentService: PrivilegeService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_equipmentService,_authService)
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
