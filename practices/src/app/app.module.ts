import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontComponent } from './google/font/font.component';
import { FormComponent } from './onewaydatabingi/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FontComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
