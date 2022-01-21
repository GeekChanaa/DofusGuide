import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Decor } from 'src/app/_models/decor';
import { AuthService } from 'src/app/_services/auth.service';
import { DecorService } from 'src/app/_services/decor.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-decors',
  templateUrl: './decors.component.html',
  styleUrls: ['./decors.component.sass']
})
export class DecorsComponent extends BaseDashboardComponent<Decor> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'imgUrl', 'havenBagID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    imgUrl: boolean,
    havenBagID: boolean,
  } = {
      id: true,
      imgUrl: true,
      havenBagID: false,
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
    private _decorService: DecorService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_decorService,_authService)
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
