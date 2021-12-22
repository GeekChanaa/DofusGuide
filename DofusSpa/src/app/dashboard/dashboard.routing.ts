import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentsComponent } from './equipments/equipments.component';
import { HomeComponent } from './home/home.component';

export const PagesRoutes: Routes= [
    {path : '' , component : HomeComponent},
    {
      path : 'equipments' , component : EquipmentsComponent, 
      loadChildren : () => import('./equipments/equipments.module')
        .then(m => m.EquipmentsModule)
    },
]

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{
}
