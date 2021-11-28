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
import { DressingRoomComponent } from './dressing-room.component';
import { DressingRoomRoutingModule } from './dressing-room.routing';

@NgModule({
  declarations: [
      DressingRoomComponent,
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
    DressingRoomRoutingModule
  ],
  providers: [
  ]
})
export class DressingRoomModule { }
