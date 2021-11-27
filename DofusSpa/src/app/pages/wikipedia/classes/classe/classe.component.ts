import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classe } from 'src/app/_models/classe';
import { ClasseService } from 'src/app/_services/classe.service';
import { RoleService } from 'src/app/_services/role.service';
import { SpellService } from 'src/app/_services/spell.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SpellDialogComponent } from './spell-dialog/spell-dialog.component';
import { RoleDialogComponent } from './role-dialog/role-dialog.component';
@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.sass']
})
export class ClasseComponent implements OnInit {

  // Id of the classe
  id : number;
  // The classe
  classe : Classe;
  // Constructor
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _classeService : ClasseService,
    private _spellService : SpellService,
    private _roleService : RoleService,
    private _dialog : MatDialog
  ) { }

  ngOnInit() {
    this.id = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.getClasse(this.id);
  }

  // Getting the classes
  getClasse(id : number){
    this._classeService.getById(id).subscribe((data) => {
      this.classe = data;
    })
  }

  // Show spell
  showSpell(id : number){
    this._spellService.getById(id).subscribe(data => {
      this._dialog.open(SpellDialogComponent, {
        data : {spell : data}
      });
    })
  }

  // Show role
  showRole(id : number){
    this._roleService.getById(id).subscribe(data => {
      this._dialog.open(RoleDialogComponent, {
        data : {role : data}
      })
    })
  }

}
