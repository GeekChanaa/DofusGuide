import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Harvest } from 'src/app/_models/harvest';
import { AuthService } from 'src/app/_services/auth.service';
import { HarvestService } from 'src/app/_services/harvest.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-harvests',
  templateUrl: './harvests.component.html',
  styleUrls: ['./harvests.component.sass']
})
export class HarvestsComponent extends BaseDashboardComponent<Harvest> implements OnInit {

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
    private _harvestService: HarvestService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_harvestService,_authService)
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
