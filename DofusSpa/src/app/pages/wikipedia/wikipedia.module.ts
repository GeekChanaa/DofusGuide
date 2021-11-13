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
import { MatMenuModule } from '@angular/material/menu';
import { SortingFilterComponent } from './wikipedia-common/sorting-filter/sorting-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FilteringFilterComponent } from './wikipedia-common/filtering-filter/filtering-filter.component';
import { FormsModule } from '@angular/forms';
import { EquipmentComponent } from './equipments/equipment/equipment.component';

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
      ProfessionsComponent,
      SortingFilterComponent,
      FilteringFilterComponent,
      EquipmentComponent
   ],
  imports: [
    CommonModule,
    WikipediaRoutingModule,
    RouterModule,
    PagesCommonModule,
    HttpClientModule,
    WikipediaCommonModule,
    MatPaginatorModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [
  ]
})
export class WikipediaModule { }
