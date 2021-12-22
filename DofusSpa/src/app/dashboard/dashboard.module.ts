import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardCommonModule } from './dashboard-common/dashboard-common.module';
import { NavbarComponent } from './Navbar/Navbar.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';
import { CreateComponent } from './forum-comments/create/create.component';
import { UpdateComponent } from './forum-comments/update/update.component';
import { ForumLikesComponent } from './forum-likes/forum-likes.component';


@NgModule({
  declarations: [						
      DashboardComponent,
      NavbarComponent,
      
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
