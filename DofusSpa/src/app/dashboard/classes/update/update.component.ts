import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Classe } from 'src/app/_models/classe';
import { ClasseService } from 'src/app/_services/classe.service';
import { BaseUpdateComponent } from '../../base-update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent extends BaseUpdateComponent<Classe> implements OnInit {

  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    level: new FormControl(),
    type: new FormControl(),
    url: new FormControl(),
    maleImg: new FormControl(),
    femaleImg: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private _classeService : ClasseService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    super();
    this.Errors(this.form01);
  }

  // Updating Classe
  update() {
    this._classeService.edit(this.data.id,this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
