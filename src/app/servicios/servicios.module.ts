import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';
import { ServiciosRoutingModule } from './servicios-routing.module';

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
