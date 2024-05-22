import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElectronicaComponent } from './electronica.component';
import { ElectronicaRoutingModule } from './electronica-routing.module';



@NgModule({
  declarations: [
    ElectronicaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ElectronicaRoutingModule,
  ]
})
export class ElectronicaModule { }
