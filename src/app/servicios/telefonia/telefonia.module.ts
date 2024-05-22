import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TelefoniaComponent } from './telefonia.component';
import { TelefoniaRoutingModule } from './telefonia-routing.module';


@NgModule({
  declarations: [
    TelefoniaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TelefoniaRoutingModule
  ]
})
export class TelefoniaModule { }
