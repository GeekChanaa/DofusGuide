import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesCommonComponent } from './pages-common.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryLinkCardComponent } from './category-link-card/category-link-card.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarGroupComponent } from './sidebar/sidebar-group/sidebar-group.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PagesCommonComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarComponent,
    CategoryLinkCardComponent,
    SidebarItemComponent,
    SidebarGroupComponent,
    PageHeaderComponent
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    SidebarComponent,
    CategoryLinkCardComponent,
    SidebarItemComponent,
    SidebarGroupComponent,
    PageHeaderComponent
  ]
})
export class PagesCommonModule { }
