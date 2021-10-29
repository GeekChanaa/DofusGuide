import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PagesComponent } from './pages.component';
import { SidebarItemComponent } from './common/sidebar/sidebar-item/sidebar-item.component';
import { SidebarGroupComponent } from './common/sidebar/sidebar-group/sidebar-group.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { PagesCommonModule } from './common/pages-common.module';


@NgModule({
  declarations: [						
      HomeComponent,
      PagesComponent,
   ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PagesCommonModule
  ],
  exports : [
  ],
  providers: [
  ]
})
export class PagesModule { }
