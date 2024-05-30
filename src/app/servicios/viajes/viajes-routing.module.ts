import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajesComponent} from './viajes.component';

const routes: Routes = [
    { path: '../viajes', component: ViajesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViajesRoutingModule { }
