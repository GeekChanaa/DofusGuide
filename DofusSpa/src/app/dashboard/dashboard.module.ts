import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { EquipmentsComponent } from './equipments/equipments.component';
import { DashboardCommonModule } from './dashboard-common/dashboard-common.module';
import { NavbarComponent } from './Navbar/Navbar.component';


@NgModule({
  declarations: [						
      EquipmentsComponent,
      DashboardComponent,
      NavbarComponent
   ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCommonModule
  ],
  exports : [
  ],
  providers: [
  ]
})
export class DashboardModule { }
