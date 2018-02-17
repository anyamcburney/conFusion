import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {HttpModule} from "@angular/http"
import {MaterialModule} from './material.module'
import {FlexLayoutModule} from "@angular/flex-layout"
import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent, ValuesPipe } from './menu/dishdetail/dishdetail.component'
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    ValuesPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule

  ],
  providers:  [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
