import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketCommonComponent } from './market-common.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    MarketCommonComponent
 ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    FooterComponent,
  ],
})
export class MarketCommonModule { }
