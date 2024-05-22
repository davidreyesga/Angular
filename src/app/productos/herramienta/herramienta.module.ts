import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HerramientaComponent } from './herramienta.component';
import { HerramientaRoutingModule } from './herramienta-routing.module';



@NgModule({
  declarations: [
    HerramientaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HerramientaRoutingModule,
  ]
})
export class HerramientaModule { }
