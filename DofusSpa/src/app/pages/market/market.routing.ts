import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { SellResourceComponent } from './sell-resource/sell-resource.component';
import { SellWeaponComponent } from './sell-weapon/sell-weapon.component';
import { SellEquipmentComponent } from './sell-equipment/sell-equipment.component';
import { SellPetComponent } from './sell-pet/sell-pet.component';

export const PagesRoutes: Routes = [
    { path : '' , component : IndexComponent},
    { path : 'product/:id' , component : ProductComponent},
    { path : 'products' , component : ProductsComponent},
    { path : 'sell-product' , component : SellProductComponent},
    { path : 'sell-resource' , component : SellResourceComponent},
    { path : 'sell-weapon' , component : SellWeaponComponent},
    { path : 'sell-equipment' , component : SellEquipmentComponent},
    { path : 'sell-pet' , component : SellPetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class MarketRoutingModule{
}
