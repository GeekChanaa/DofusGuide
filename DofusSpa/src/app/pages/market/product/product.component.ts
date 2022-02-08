import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  // Product ID
  productID : number;  

  // Constructor
  constructor(
    private _route : ActivatedRoute
  ) { }

  // On init cycle hook
  ngOnInit() {
   this._route.params.subscribe( data => {
     this.productID = data['id'];    
   })
  }



}
