import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { CompanionsComponent } from './companions/companions.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { HarnessesComponent } from './harnesses/harnesses.component';
import { HavenBagsComponent } from './haven-bags/haven-bags.component';
import { IdolsComponent } from './idols/idols.component';
import { IndexComponent } from './index/index.component';
import { ProfessionsComponent } from './professions/professions.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MountsComponent } from './mounts/mounts.component';
import { PetsComponent } from './pets/pets.component';
import { ResourcesComponent } from './resources/resources.component';
import { SetsComponent } from './sets/sets.component';
import { SkinEquipmentsComponent } from './skin-equipments/skin-equipments.component';
import { WeaponsComponent } from './weapons/weapons.component';
import { EquipmentComponent } from './equipments/equipment/equipment.component';
import { WeaponComponent } from './weapons/weapon/weapon.component';
import { PetComponent } from './pets/pet/pet.component';
import { ClasseComponent } from './classes/classe/classe.component';
import { ProfessionComponent } from './professions/profession/profession.component';
import { MonsterComponent } from './monsters/monster/monster.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { MountComponent } from './mounts/mount/mount.component';
import { HarnessComponent } from './harnesses/harness/harness.component';

export const PagesRoutes: Routes = [
    { path : '' , component : IndexComponent},
    { path : 'classes' , component : ClassesComponent},
    { path : 'companions' , component : CompanionsComponent},
    { path : 'consumables' , component : ConsumablesComponent},
    { path : 'equipments' , component : EquipmentsComponent},
    { path : 'equipment/:id' , component : EquipmentComponent},
    { path : 'harnesses' , component : HarnessesComponent},
    { path : 'haven-bags' , component : HavenBagsComponent},
    { path : 'idols' , component : IdolsComponent},
    { path : 'professions' , component : ProfessionsComponent},
    { path : 'monsters' , component : MonstersComponent},
    { path : 'mounts' , component : MountsComponent},
    { path : 'pets' , component : PetsComponent},
    { path : 'resources' , component : ResourcesComponent},
    { path : 'sets' , component : SetsComponent},
    { path : 'skin-equipments' , component : SkinEquipmentsComponent},
    { path : 'weapons' , component : WeaponsComponent},
    { path : 'weapon/:id' , component : WeaponComponent},
    { path : 'pet/:id' , component : PetComponent},
    { path : 'classes/:id' , component : ClasseComponent},
    { path : 'professions/:id' , component : ProfessionComponent},
    { path : 'monsters/:id' , component : MonsterComponent},
    { path : 'resources/:id' , component : ResourceComponent},
    { path : 'mounts/:id' , component : MountComponent},
    { path : 'harnesses/:id' , component : HarnessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class WikipediaRoutingModule{
}
