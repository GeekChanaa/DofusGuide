import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Monster } from 'src/app/_models/monster';
import { AuthService } from 'src/app/_services/auth.service';
import { MonsterService } from 'src/app/_services/monster.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.sass']
})
export class MonstersComponent extends BaseDashboardComponent<Monster> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'ankamaID','name','url','imgUrl','level','type','description', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
    ankamaID: boolean,
    imgUrl: boolean,
    url: boolean,
    type: boolean,
    level: boolean,
    description: boolean,
  } = {
      id: true,
      name: true,
      ankamaID: true,
      imgUrl: true,
      url: true,
      type: true,
      level: true,
      description: true,
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
    private _equipmentService: MonsterService,
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
