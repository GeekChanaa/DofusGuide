import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentProduct } from 'src/app/_models/equipment-product';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentProductService } from 'src/app/_services/equipment-product.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-equipment-products',
  templateUrl: './equipment-products.component.html',
  styleUrls: ['./equipment-products.component.sass']
})
export class EquipmentProductsComponent extends BaseDashboardComponent<EquipmentProduct> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'equipmentID', 'productID', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    equipmentID: boolean,
    productID: boolean,
  } = {
      id: true,
      equipmentID: true,
      productID: false,
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
    private _equipmentProductService: EquipmentProductService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_equipmentProductService,_authService)
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
