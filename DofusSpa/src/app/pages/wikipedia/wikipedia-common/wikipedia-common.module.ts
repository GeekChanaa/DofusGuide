import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WikipediaCommonComponent } from './wikipedia-common.component';
import { WikipediaListItemComponent } from './wikipedia-list-item/wikipedia-list-item.component';
import { MatRippleModule } from '@angular/material/core';
import { WikipediaConditionsItemComponent } from './wikipedia-item/wikipedia-conditions-item/wikipedia-conditions-item.component';
import { WikipediaDescriptionItemComponent } from './wikipedia-item/wikipedia-description-item/wikipedia-description-item.component';
import { WikipediaEffectsItemComponent } from './wikipedia-item/wikipedia-effects-item/wikipedia-effects-item.component';
import { WikipediaRecipeItemComponent } from './wikipedia-item/wikipedia-recipe-item/wikipedia-recipe-item.component';
import { WikipediaStatsItemComponent } from './wikipedia-item/wikipedia-stats-item/wikipedia-stats-item.component';
import { WikipediaItemComponent } from './wikipedia-item/wikipedia-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [
      WikipediaCommonComponent,
      WikipediaListItemComponent,
      WikipediaConditionsItemComponent,
      WikipediaDescriptionItemComponent,
      WikipediaEffectsItemComponent,
      WikipediaRecipeItemComponent,
      WikipediaStatsItemComponent,
      WikipediaItemComponent
  ],
  exports : [
    WikipediaListItemComponent,
    WikipediaConditionsItemComponent,
    WikipediaDescriptionItemComponent,
    WikipediaEffectsItemComponent,
    WikipediaRecipeItemComponent,
    WikipediaStatsItemComponent,
    WikipediaItemComponent
  ]
})
export class WikipediaCommonModule { }
