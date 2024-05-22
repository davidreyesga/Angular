import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [ProductosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
