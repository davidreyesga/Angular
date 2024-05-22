import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuguetesComponent } from './juguetes.component';

const routes: Routes = [
    { path: '', component: JuguetesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JuguetesRoutingModule { }
