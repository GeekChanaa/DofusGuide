import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Weapon } from 'src/app/_models/weapon';
import { AuthService } from 'src/app/_services/auth.service';
import { WeaponService } from 'src/app/_services/weapon.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.sass']
})
export class WeaponsComponent extends BaseDashboardComponent<Weapon> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id','name', 'level','description','url','imgUrl','type', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    ankamaId: boolean,
    level: boolean,
    name: boolean,
    type: boolean,
    url: boolean,
    imgUrl: boolean,
    description: boolean,
  } = {
    id:true,
    ankamaId: true,
    level: true,
    name: false,
    type: false,
    url: false,
    imgUrl: false,
    description: false,
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
    private _weaponService: WeaponService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_weaponService,_authService)
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
