import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiMonstresComponent } from './archi-monstres/archi-monstres.component';
import { BlogComponent } from './blog/blog.component';
import { CompetitionRoomsComponent } from './competition-rooms/competition-rooms.component';
import { DressingRoomComponent } from './dressing-room/dressing-room.component';
import { HdvPricesComponent } from './hdv-prices/hdv-prices.component';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { WorkshopComponent } from './workshop/workshop.component';

export const PagesRoutes: Routes= [
    {path : '' , component : HomeComponent},
    {
      path : "wikipedia" , 
      component : WikipediaComponent,
      loadChildren : () => import('./wikipedia/wikipedia.module')
        .then(m => m.WikipediaModule)
    },
    {
      path : "workshop" , 
      component : WorkshopComponent,
      loadChildren : () => import('./workshop/workshop.module')
        .then(m => m.WorkshopModule)
    },
    {
      path : "market" , 
      component : MarketComponent,
      loadChildren : () => import('./market/market.module')
        .then(m => m.MarketModule)
    },
    {
      path : "hdv-prices" , 
      component : HdvPricesComponent,
      loadChildren : () => import('./hdv-prices/hdv-prices.module')
        .then(m => m.HdvPricesModule)
    },
    {
      path : "dressing-room" , 
      component : DressingRoomComponent,
      loadChildren : () => import('./dressing-room/dressing-room.module')
        .then(m => m.DressingRoomModule)
    },
    {
      path : "competition-rooms" , 
      component : CompetitionRoomsComponent,
      loadChildren : () => import('./competition-rooms/competition-rooms.module')
        .then(m => m.CompetitionRoomsModule)
    },
    {
      path : "blog" , 
      component : BlogComponent,
      loadChildren : () => import('./blog/blog.module')
        .then(m => m.BlogModule)
    },
    {
      path : "bank" , 
      component : WikipediaComponent,
      loadChildren : () => import('./bank/bank.module')
        .then(m => m.BankModule)
    },
    {
      path : "archi-monstres" , 
      component : ArchiMonstresComponent,
      loadChildren : () => import('./archi-monstres/archi-monstres.module')
        .then(m => m.ArchiMonstresModule)
    },
]

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule{
}
