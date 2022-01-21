import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/_models/product';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';
import { BaseDashboardComponent } from '../base-dashboard';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent extends BaseDashboardComponent<Product> implements OnInit {

  // columns of mat table
  displayedColumns: string[] = ['id', 'price','betOn','description','userID','status','quantity', 'actions'];

  // The columns that we want to display
  showColumns: {
    id:boolean,
    price: boolean,
    betOn: boolean,
    description: boolean,
    userID: boolean,
    status: boolean,
    quantity: boolean,
  } = {
      id: true,
      price: true,
      betOn: true,
      description: false,
      userID: false,
      status: false,
      quantity: false,
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
    private _productService: ProductService,
    protected dialog: MatDialog,
    public _authService: AuthService,
  ) {
    super(dialog,_productService,_authService)
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
