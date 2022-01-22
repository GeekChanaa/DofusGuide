import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from 'src/app/_models/location';
import { LocationService } from 'src/app/_services/location.service';
import { BaseUpdateComponent } from '../../base-update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent extends BaseUpdateComponent<Location> implements OnInit {

  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    ankamaID: new FormControl(''),
    name: new FormControl(''),
    professionID: new FormControl()
  });

  constructor(
    private _locationService : LocationService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    super();
    this.Errors(this.form01);
  }

  // Updating Location
  update() {
    this._locationService.edit(this.data.id,this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
