import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentationDesignComponent } from './documentation-design/documentation-design.component';

@NgModule({
  declarations: [	
    AppComponent,
      DocumentationDesignComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
