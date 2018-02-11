import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatToolbarModule
  // and so on...
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout"
import { AppComponent } from './app.component';

import 'hammerjs'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
