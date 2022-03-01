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
import { HdvPricesRoutingModule } from './hdv-prices.routing';
import { HdvPricesComponent } from './hdv-prices.component';
import { MainSectionComponent } from './index/main-section/main-section.component';
import { CategoriesSectionComponent } from './index/categories-section/categories-section.component';
import { CategoryItemComponent } from './index/categories-section/category-item/category-item.component';

@NgModule({
  declarations: [
      HdvPricesComponent,
      IndexComponent,
      MainSectionComponent,
      CategoriesSectionComponent,
      CategoryItemComponent
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
    HdvPricesRoutingModule
  ],
  providers: [
  ]
})
export class HdvPricesModule { }
