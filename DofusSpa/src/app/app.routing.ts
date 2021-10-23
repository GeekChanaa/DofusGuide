import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';

export const AppRoutes: Routes= [
  {
    path : '' , 
    component : PagesComponent,
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },{
    path : 'auth',
    component : AuthComponent,
    loadChildren : () => import('./auth/auth.module')
      .then(m => m.AuthModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule{
}
