import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'servicios', loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: 'productos/electronica', loadChildren: () => import('./productos/electronica/electronica.module').then(m => m.ElectronicaModule) },
  { path: 'productos/herramienta', loadChildren: () => import('./productos/herramienta/herramienta.module').then(m => m.HerramientaModule) },
  { path: 'productos/juguetes', loadChildren: () => import('./productos/juguetes/juguetes.module').then(m => m.JuguetesModule)},
  { path: 'servicios/seguros', loadChildren: () => import('./servicios/seguros/seguros.module').then(m=> m.SegurosModule)},
  { path: 'servicios/viajes', loadChildren: () => import('./servicios/viajes/viajes.module').then(m=> m.ViajesModule)},
  { path: 'servicios/telefonia', loadChildren: () => import('./servicios/telefonia/telefonia.module').then(m=> m.TelefoniaModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
