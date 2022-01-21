import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquipmentProduct } from 'src/app/_models/equipment-product';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentProductService } from 'src/app/_services/equipment-product.service';
import { BaseCreateComponent } from '../../base-create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent extends BaseCreateComponent<EquipmentProduct> implements OnInit  {
  model: any = {};
  states: any;
  valid: boolean = true;
  inputs : string[] = [];
  // Form Group And It's Form Controls
  form01 = new FormGroup({
    equipmentID: new FormControl(''),
    productID: new FormControl(''),
  });

  constructor(
    private _authService: AuthService,
    private _equipmentProductService : EquipmentProductService
    ) {
    super();
    this.Errors(this.form01);
  }

  // Creating Classe
  create() {
    this._equipmentProductService.create(this.form01.value).subscribe();
  }

  // On Init cycle hook
  ngOnInit(){
    this.inputs = Object.keys(this.form01.controls);
  }
}
