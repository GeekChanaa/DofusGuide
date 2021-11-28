import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const PagesRoutes: Routes = [
    { path : '' , component : IndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class ArchiMonstresRoutingModule{
}
