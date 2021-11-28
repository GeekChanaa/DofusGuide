import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Equipment } from 'src/app/_models/equipment';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { BaseDashboardComponent } from '../base-dashboard';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent extends BaseDashboardComponent<Equipment> implements OnInit {

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
    private _equipmentService: EquipmentService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_equipmentService,_authService)
  }

  // On init cycle hook
  ngOnInit() {
    this.reloadData();
  }

}
