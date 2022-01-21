import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Furniture } from 'src/app/_models/furniture';
import { AuthService } from 'src/app/_services/auth.service';
import { FurnitureService } from 'src/app/_services/furniture.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.sass']
})
export class FurnituresComponent extends BaseDashboardComponent<Furniture> implements OnInit {

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
    private _furnitureService: FurnitureService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_furnitureService,_authService)
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
