import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { MatTableModule } from '@angular/material/table'; 

@NgModule({
    declarations: [CharactersComponent],
    imports: [
    CommonModule,
    CharactersRoutingModule,
    MatTableModule 
    ]
})
export class CharactersModule { }