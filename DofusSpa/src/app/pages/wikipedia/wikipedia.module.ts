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
import { WikipediaCommonModule } from './wikipedia-common/wikipedia-common.module';
import { ProfessionsComponent } from './professions/professions.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
      WikipediaComponent,
      IndexComponent,
      ClassesComponent,
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
      HarnessesComponent,
      ProfessionsComponent
   ],
  imports: [
    CommonModule,
    WikipediaRoutingModule,
    RouterModule,
    PagesCommonModule,
    HttpClientModule,
    WikipediaCommonModule,
    MatPaginatorModule,
    MatRippleModule
  ],
  providers: [
  ]
})
export class WikipediaModule { }
