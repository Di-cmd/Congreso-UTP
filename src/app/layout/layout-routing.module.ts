import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }, 
  {
    path:'autores',
    component:AutoresComponent
  }, 
  {
    path:'evento',
    component:EventosComponent
  }, 
  {
    path:'pagos',
    component:PagosComponent
  
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
