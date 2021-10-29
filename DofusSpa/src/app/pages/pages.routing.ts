import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';

export const PagesRoutes: Routes= [
    {path : '' , component : HomeComponent},
    {
      path : "wikipedia" , 
      component : WikipediaComponent,
      loadChildren : () => import('./wikipedia/wikipedia.module')
        .then(m => m.WikipediaModule)
    }
]

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule{
}
