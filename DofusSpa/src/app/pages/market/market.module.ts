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

@NgModule({
  declarations: [
      MarketComponent,
      IndexComponent,
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
    MarketRoutingModule
  ],
  providers: [
  ]
})
export class MarketModule { }
