import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { SegurosComponent } from './seguros/seguros.component';
import { TelefoniaComponent } from './telefonia/telefonia.component';
import { ViajesComponent } from './viajes/viajes.component';

@NgModule({
  declarations: [
    ServiciosComponent,
    SegurosComponent,
    TelefoniaComponent,
    ViajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
