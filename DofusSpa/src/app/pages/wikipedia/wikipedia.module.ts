import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikipediaComponent } from './wikipedia.component';
import { RouterModule } from '@angular/router';
import { WikipediaRoutingModule } from './wikipedia.routing';
import { IndexComponent } from './index/index.component';
import { PagesModule } from '../pages.module';
import { PagesCommonModule } from '../common/pages-common.module';
import { HttpClientModule } from '@angular/common/http';
import { ClassesComponent } from './classes/classes.component';
import { JobsComponent } from './jobs/jobs.component';
import { MonstersComponent } from './monsters/monsters.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { SetsComponent } from './sets/sets.component';
import { PetsComponent } from './pets/pets.component';
import { MountsComponent } from './mounts/mounts.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { ResourcesComponent } from './resources/resources.component';
import { SkinEquipmentsComponent } from './skin-equipments/skin-equipments.component';
import { CompanionsComponent } from './companions/companions.component';
import { IdolsComponent } from './idols/idols.component';
import { HavenBagsComponent } from './haven-bags/haven-bags.component';
import { HarnessesComponent } from './harnesses/harnesses.component';


@NgModule({
  declarations: [
      WikipediaComponent,
      IndexComponent,
      ClassesComponent,
      JobsComponent,
      MonstersComponent,
      WeaponsComponent,
      EquipmentsComponent,
      SetsComponent,
      PetsComponent,
      MountsComponent,
      ConsumablesComponent,
      ResourcesComponent,
      SkinEquipmentsComponent,
      CompanionsComponent,
      IdolsComponent,
      HavenBagsComponent,
      HarnessesComponent
   ],
  imports: [
    CommonModule,
    WikipediaRoutingModule,
    RouterModule,
    PagesCommonModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class WikipediaModule { }
