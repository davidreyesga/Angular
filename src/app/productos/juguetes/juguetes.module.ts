import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JuguetesComponent } from './juguetes.component';
import { JuguetesRoutingModule } from './juguetes-routing.module';



@NgModule({
  declarations: [
    JuguetesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JuguetesRoutingModule
  ]
})
export class JuguetesModule { }
