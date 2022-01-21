import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Idol } from 'src/app/_models/idol';
import { AuthService } from 'src/app/_services/auth.service';
import { IdolService } from 'src/app/_services/idol.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.sass']
})
export class IdolsComponent extends BaseDashboardComponent<Idol> implements OnInit {

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
    private _equipmentService: IdolService,
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
