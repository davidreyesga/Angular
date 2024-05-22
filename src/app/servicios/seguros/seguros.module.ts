import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { RouterModule } from '@angular/router';
import { SegurosRoutingModule } from './seguros-routing.module';



@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SegurosRoutingModule
  ]
})
export class SegurosModule { }