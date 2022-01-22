import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ground } from 'src/app/_models/ground';
import { GroundService } from 'src/app/_services/ground.service';
import { BaseUpdateComponent } from '../../base-update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent extends BaseUpdateComponent<Ground> implements OnInit {

  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    havenBagID: new FormControl(''),
    imgUrl: new FormControl(),
  });

  constructor(
    private _groundService : GroundService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    super();
    this.Errors(this.form01);
  }

  // Updating Ground
  update() {
    this._groundService.edit(this.data.id,this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
