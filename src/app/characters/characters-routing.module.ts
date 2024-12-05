import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { AuthGuard } from '../guards/auth.guard'; 

const routes: Routes = [
    { path: '', component: CharactersComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }
