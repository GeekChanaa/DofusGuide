import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCommonModule } from '../dashboard-common/dashboard-common.module';
import { DashboardRoutingModule } from '../dashboard.routing';
import { EquipmentsComponent } from './equipments.component';
import { CreateComponent } from './create/create.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    EquipmentsComponent,
    CreateComponent,
    UpdateComponent
   ],
  imports: [
    CommonModule,
    DashboardCommonModule,
  ],
  exports : [
  ],
  providers: [
  ]
})
export class EquipmentsModule { }
