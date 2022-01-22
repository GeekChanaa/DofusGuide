import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Harvest } from 'src/app/_models/harvest';
import { HarvestService } from 'src/app/_services/harvest.service';
import { BaseUpdateComponent } from '../../base-update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent extends BaseUpdateComponent<Harvest> implements OnInit {

  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    level: new FormControl(),
    imgUrl: new FormControl(),
    url: new FormControl(),
    professionID: new FormControl(),
  });

  constructor(
    private _harvestService : HarvestService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    super();
    this.Errors(this.form01);
  }

  // Updating Harvest
  update() {
    this._harvestService.edit(this.data.id,this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
