import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';
import { SegurosComponent } from './seguros/seguros.component';
import { TelefoniaComponent } from './telefonia/telefonia.component';
import { ViajesComponent } from './viajes/viajes.component';

const routes: Routes = [
    { path: '', component: ServiciosComponent },
    { path: 'seguros', component: SegurosComponent },
    { path: 'telefonia', component: TelefoniaComponent },
    { path: 'viajes', component: ViajesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiciosRoutingModule { }
