import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentationDesignComponent } from './documentation-design/documentation-design.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [			
    AppComponent,
      DocumentationDesignComponent,
      DashboardComponent,
      PagesComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
