import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WikipediaCommonComponent } from './wikipedia-common.component';
import { WikipediaItemComponent } from './wikipedia-item/wikipedia-item.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule
  ],
  declarations: [
      WikipediaCommonComponent,
      WikipediaItemComponent
  ],
  exports : [
    WikipediaItemComponent
  ]
})
export class WikipediaCommonModule { }
