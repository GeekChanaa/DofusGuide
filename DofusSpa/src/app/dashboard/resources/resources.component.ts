import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resource } from 'src/app/_models/resource';
import { AuthService } from 'src/app/_services/auth.service';
import { ResourceService } from 'src/app/_services/resource.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.sass']
})
export class ResourcesComponent extends BaseDashboardComponent<Resource> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'ankamaID','name','level','type','url','imgUrl','description', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    ankamaID: boolean,
    name: boolean,
    level: boolean,
    type: boolean,
    url: boolean,
    imgUrl: boolean,
    description: boolean,
  } = {
      id: true,
      ankamaID: true,
      name: true,
      level: true,
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
    private _resourceService: ResourceService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_resourceService,_authService)
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
