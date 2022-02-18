import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { EquipmentProductService } from 'src/app/_services/equipment-product.service';
import { EquipmentService } from 'src/app/_services/equipment.service';
import { ProductService } from 'src/app/_services/product.service';
import { ProductStatistic } from 'src/app/_models/product-statistic';

@Component({
  selector: 'app-sell-equipment',
  templateUrl: './sell-equipment.component.html',
  styleUrls: ['./sell-equipment.component.sass']
})
export class SellEquipmentComponent implements OnInit {

  // Product
  product : any = {};

  // Equipment Product to be created
  equipmentProduct : any = {};

  // Equipment Statistics
  statistics : any[] = [];

  // Product Statistics
  productStatistics : any[] = [];

  // Equipments
  equipments : any[] = [];

  // Filtering and searching params
  globalParams : any = {};

  constructor(
    private _equipmentService : EquipmentService,
    private _cdr : ChangeDetectorRef,
    private _productService : ProductService,
    private _equipmentProductService : EquipmentProductService,
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this.searchEquipment("");
  }

  // Searching for equipment by name
  searchEquipment(name : string){
    this.globalParams.SearchBy = "Name";
    this.globalParams.SearchValue = name;
    this._equipmentService.getAll(1,15,this.globalParams).subscribe(data => {
      this.equipments = data.result;
      this._cdr.detectChanges();
    })
  }

  // Getting Statistics of item
  getStatistics(id : number){
    this.equipmentProduct.equipmentID = id; 
    this._equipmentService.getById(id).subscribe(data => {
      this.statistics = data.statistics;      
    });
  }

  // Creating the product
  createProduct(){
    this.product.userID = this._authService.decodedToken.nameid;
    this.product.status = "active";
    this.product.quantity = 1;
    var productStatistic : any = {};
    var productstats = [];
    for (var key in this.productStatistics) {
      productStatistic.value = this.productStatistics[key];
      productStatistic.name = key;
      productstats.push(productStatistic);
    }
    this.product.statistics = productstats;
    console.log(this.product);
    this._productService.create(this.product).subscribe(data => {
      console.log(data);
      this.equipmentProduct.productID = data.id;
      this._equipmentProductService.create(this.equipmentProduct).subscribe(data => {
        console.log("Product Created Successfully");
      });
      
      // Creating EquipmentProduct
    })
  }
}
