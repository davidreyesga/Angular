import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelefoniaComponent } from './telefonia.component';
const routes: Routes = [
    { path: '', component: TelefoniaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TelefoniaRoutingModule { }
