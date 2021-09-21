import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { AutoresComponent } from './autores/autores.component';
import { EventosComponent } from './eventos/eventos.component';
import { PagosComponent } from './pagos/pagos.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [
    HomeComponent,
    AutoresComponent,
    EventosComponent,
    PagosComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialsModule
  ]
})
export class LayoutModule { }
