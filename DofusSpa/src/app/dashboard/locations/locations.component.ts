import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from 'src/app/_models/location';
import { AuthService } from 'src/app/_services/auth.service';
import { LocationService } from 'src/app/_services/location.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.sass']
})
export class LocationsComponent extends BaseDashboardComponent<Location> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'name', 'professionID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
    professionID: boolean,
  } = {
      id: true,
      name: true,
      professionID: false,
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
    private _locationService: LocationService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_locationService,_authService)
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
