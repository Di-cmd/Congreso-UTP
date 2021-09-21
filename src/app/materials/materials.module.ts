import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';

// Aqui se importan todos los elementos de angular materials 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
 
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
   

  ]
})
export class MaterialsModule { }
