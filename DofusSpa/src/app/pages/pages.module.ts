import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PagesComponent } from './pages.component';
import { SidebarItemComponent } from './common/sidebar/sidebar-item/sidebar-item.component';
import { SidebarGroupComponent } from './common/sidebar/sidebar-group/sidebar-group.component';


@NgModule({
  declarations: [						
      HomeComponent,
      NavbarComponent,
      SidebarComponent,
      PagesComponent,
      SidebarItemComponent,
      SidebarGroupComponent
   ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [
  ]
})
export class PagesModule { }
