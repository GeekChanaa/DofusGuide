import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HavenBag } from 'src/app/_models/haven-bag';
import { AuthService } from 'src/app/_services/auth.service';
import { HavenBagService } from 'src/app/_services/haven-bag.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-haven-bags',
  templateUrl: './haven-bags.component.html',
  styleUrls: ['./haven-bags.component.sass']
})
export class HavenBagsComponent extends BaseDashboardComponent<HavenBag> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'name', 'ankamaID','url','imgUrl', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
    ankamaID: boolean,
    url: boolean,
    imgUrl: boolean,
  } = {
      id: true,
      name: true,
      ankamaID: false,
      url: false,
      imgUrl: false,
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
    private _equipmentService: HavenBagService,
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
