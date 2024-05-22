import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesComponent } from './viajes.component';
import { RouterModule } from '@angular/router';
import { ViajesRoutingModule } from './viajes-routing.module';


@NgModule({
  declarations: [
    ViajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ViajesRoutingModule,
  ]
})
export class ViajesModule { }
