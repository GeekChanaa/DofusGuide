import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCommonModule } from '../dashboard-common/dashboard-common.module';
import { DashboardRoutingModule } from '../dashboard.routing';
import { CreateComponent } from './create/create.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { UpdateComponent } from './update/update.component';
import { ClassesComponent } from './classes.component';


@NgModule({
  declarations: [
    ClassesComponent,
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
export class ClassesModule { }
