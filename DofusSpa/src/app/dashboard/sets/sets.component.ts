import { Component, OnInit } from '@angular/core';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { Set } from '../../_models/set';
import { SetService } from 'src/app/_services/set.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.sass']
})
export class SetsComponent extends BaseDashboardComponent<Set> implements OnInit {

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
    private _equipmentService: SetService,
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
