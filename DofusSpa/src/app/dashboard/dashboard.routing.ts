import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumablesComponent } from './consumables/consumables.component';
import { ClassesComponent } from './classes/classes.component';
import { DecorsComponent } from './decors/decors.component';
import { EquipmentProductsComponent } from './equipment-products/equipment-products.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { FollowersComponent } from './followers/followers.component';
import { ForumCategoriesComponent } from './forum-categories/forum-categories.component';
import { ForumReportCommentsComponent } from './forum-report-comments/forum-report-comments.component';
import { ForumReportRepliesComponent } from './forum-report-replies/forum-report-replies.component';
import { ForumReportsComponent } from './forum-reports/forum-reports.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { GroundsComponent } from './grounds/grounds.component';
import { HarnessesComponent } from './harnesses/harnesses.component';
import { HarvestsComponent } from './harvests/harvests.component';
import { HavenBagsComponent } from './haven-bags/haven-bags.component';
import { HomeComponent } from './home/home.component';
import { IdolsComponent } from './idols/idols.component';
import { LocationsComponent } from './locations/locations.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MountsComponent } from './mounts/mounts.component';
import { PetsComponent } from './pets/pets.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { ProductsComponent } from './products/products.component';
import { ProfessionsComponent } from './professions/professions.component';
import { ResourcesComponent } from './resources/resources.component';
import { RolesComponent } from './roles/roles.component';
import { SetsComponent } from './sets/sets.component';
import { SpellsComponent } from './spells/spells.component';
import { UsersComponent } from './users/users.component';

export const PagesRoutes: Routes= [
    {path : '' , component : HomeComponent},
    {
      path : 'classes' , component : ClassesComponent, 
      loadChildren : () => import('./classes/classes.module')
        .then(m => m.ClassesModule)
    },
    {
      path : 'consumables' , component : ConsumablesComponent, 
      loadChildren : () => import('./consumables/consumables.module')
        .then(m => m.ConsumablesModule)
    },
    {
      path : 'decors' , component : DecorsComponent, 
      loadChildren : () => import('./decors/decors.module')
        .then(m => m.DecorsModule)
    },
    {
      path : 'equipment-products' , component : EquipmentProductsComponent, 
      loadChildren : () => import('./equipment-products/equipment-products.module')
        .then(m => m.EquipmentProductsModule)
    },
    {
      path : 'equipments' , component : EquipmentsComponent, 
      loadChildren : () => import('./equipments/equipments.module')
        .then(m => m.EquipmentsModule)
    },
    {
      path : 'followers' , component : FollowersComponent, 
      loadChildren : () => import('./followers/followers.module')
        .then(m => m.FollowersModule)
    },
    {
      path : 'forum-categories' , component : ForumCategoriesComponent, 
      loadChildren : () => import('./forum-categories/forum-categories.module')
        .then(m => m.ForumCategoriesModule)
    },
    {
      path : 'forum-reports' , component : ForumReportsComponent, 
      loadChildren : () => import('./forum-reports/forum-reports.module')
        .then(m => m.ForumReportsModule)
    },
    {
      path : 'forum-report-comments' , component : ForumReportCommentsComponent, 
      loadChildren : () => import('./forum-report-comments/forum-report-comments.module')
        .then(m => m.ForumReportCommentsModule)
    },
    {
      path : 'forum-report-replies' , component : ForumReportRepliesComponent, 
      loadChildren : () => import('./forum-report-replies/forum-report-replies.module')
        .then(m => m.ForumReportRepliesModule)
    },
    {
      path : 'furnitures' , component : FurnituresComponent, 
      loadChildren : () => import('./furnitures/furnitures.module')
        .then(m => m.FurnituresModule)
    },
    {
      path : 'grounds' , component : GroundsComponent, 
      loadChildren : () => import('./grounds/grounds.module')
        .then(m => m.GroundsModule)
    },
    {
      path : 'harnesses' , component : HarnessesComponent, 
      loadChildren : () => import('./harnesses/harnesses.module')
        .then(m => m.HarnessesModule)
    },
    {
      path : 'harvests' , component : HarvestsComponent, 
      loadChildren : () => import('./harvests/harvests.module')
        .then(m => m.HarvestsModule)
    },
    {
      path : 'haven-bags' , component : HavenBagsComponent, 
      loadChildren : () => import('./haven-bags/haven-bags.module')
        .then(m => m.HavenBagsModule)
    },
    {
      path : 'idols' , component : IdolsComponent, 
      loadChildren : () => import('./idols/idols.module')
        .then(m => m.IdolsModule)
    },
    {
      path : 'locations' , component : LocationsComponent, 
      loadChildren : () => import('./locations/locations.module')
        .then(m => m.LocationsModule)
    },
    {
      path : 'monsters' , component : MonstersComponent, 
      loadChildren : () => import('./monsters/monsters.module')
        .then(m => m.MonstersModule)
    },
    {
      path : 'mounts' , component : MountsComponent, 
      loadChildren : () => import('./mounts/mounts.module')
        .then(m => m.MountsModule)
    },
    {
      path : 'pets' , component : PetsComponent, 
      loadChildren : () => import('./pets/pets.module')
        .then(m => m.PetsModule)
    },
    {
      path : 'privileges' , component : PrivilegesComponent, 
      loadChildren : () => import('./privileges/privileges.module')
        .then(m => m.PrivilegesModule)
    },
    {
      path : 'equipments' , component : EquipmentsComponent, 
      loadChildren : () => import('./equipments/equipments.module')
        .then(m => m.EquipmentsModule)
    },
    {
      path : 'products' , component : ProductsComponent, 
      loadChildren : () => import('./products/products.module')
        .then(m => m.ProductsModule)
    },
    {
      path : 'professions' , component : ProfessionsComponent, 
      loadChildren : () => import('./professions/professions.module')
        .then(m => m.ProfessionsModule)
    },
    {
      path : 'resources' , component : ResourcesComponent, 
      loadChildren : () => import('./resources/resources.module')
        .then(m => m.ResourcesModule)
    },
    {
      path : 'roles' , component : RolesComponent, 
      loadChildren : () => import('./roles/roles.module')
        .then(m => m.RolesModule)
    },
    {
      path : 'sets' , component : SetsComponent, 
      loadChildren : () => import('./sets/sets.module')
        .then(m => m.SetsModule)
    },
    {
      path : 'spells' , component : SpellsComponent, 
      loadChildren : () => import('./spells/spells.module')
        .then(m => m.SpellsModule)
    },
    {
      path : 'users' , component : UsersComponent, 
      loadChildren : () => import('./users/users.module')
        .then(m => m.UsersModule)
    },
]

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{
}
