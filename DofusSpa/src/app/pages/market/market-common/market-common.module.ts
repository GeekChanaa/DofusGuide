import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCommonComponent } from './market-common.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    MarketCommonComponent
 ],
  imports: [
    CommonModule,
  ],
  exports : [
    FooterComponent,
  ],
})
export class MarketCommonModule { }
