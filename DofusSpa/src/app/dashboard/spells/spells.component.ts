import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Spell } from 'src/app/_models/spell';
import { AuthService } from 'src/app/_services/auth.service';
import { SpellService } from 'src/app/_services/spell.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.sass']
})
export class SpellsComponent extends BaseDashboardComponent<Spell> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'name', 'variant','classeID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    name: boolean,
    variant: boolean,
    classeID: boolean,
  } = {
      id: true,
      name: true,
      variant: false,
      classeID: false,
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
    private _spellService: SpellService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_spellService,_authService)
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
