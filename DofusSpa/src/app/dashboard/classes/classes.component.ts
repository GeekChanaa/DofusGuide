import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Classe } from 'src/app/_models/classe';
import { AuthService } from 'src/app/_services/auth.service';
import { ClasseService } from 'src/app/_services/classe.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass']
})
export class ClassesComponent extends BaseDashboardComponent<Classe> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'ankamaID', 'name', 'level', 'maleImg', 'femaleImg', 'url', 'description', 'type', 'actions'];

  // The columns that we want to display
  showColumns: {
    id: boolean,
    name: boolean,
    level: boolean,
    ankamaID: boolean,
    maleImg: boolean,
    femaleImg: boolean,
    url: boolean,
    description: boolean,
    type: boolean,
  } = {
      id: true,
      name: true,
      level: true,
      ankamaID: true,
      maleImg: false,
      femaleImg: false,
      url: false,
      description: false,
      type: false,
    };
  dataSource: any;
  cities: any;
  city: any = {};
  model: any = {};

  // Progress Bar (state)
  loader: boolean = false;

  // Params for filtering and sorting
  globalParams: any = {};


  constructor(
    private _classeService: ClasseService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog, _classeService, _authService)
  }
  // On init cycle hook
  ngOnInit() {
    this.reloadData();
  }

  // Open Create Dialog
  openCreateDialog() {
    this.dialog.open(CreateComponent).afterClosed().subscribe((data) => {
      this.reloadData();
    });
  }

  // Open Update Dialog
  openEditDialog(id: number) {
    this.dialog.open(UpdateComponent, { data: { id: id } }).afterClosed().subscribe((data) => {
      this.reloadData
    })
  }

}
