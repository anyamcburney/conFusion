import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule
  // and so on...
} from "@angular/material";

const MAT_MODULES  = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule
  // and so on...
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MaterialModule { }