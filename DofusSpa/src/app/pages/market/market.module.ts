import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market.routing';
import { MainSectionComponent } from './index/main-section/main-section.component';
import { BiddingSectionComponent } from './index/bidding-section/bidding-section.component';
import { PopularProductsComponent } from './index/popular-products/popular-products.component';
import { HotProductsComponent } from './index/hot-products/hot-products.component';
import { ProductsSectionComponent } from './index/products-section/products-section.component';
import { SellItemComponent } from './index/sell-item/sell-item.component';
import { MarketCommonModule } from './market-common/market-common.module';

@NgModule({
  declarations: [
      MarketComponent,
      IndexComponent,
      MainSectionComponent,
      BiddingSectionComponent,
      PopularProductsComponent,
      HotProductsComponent,
      ProductsSectionComponent,
      SellItemComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatPaginatorModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MarketRoutingModule,
    MarketCommonModule
  ],
  providers: [
  ]
})
export class MarketModule { }
