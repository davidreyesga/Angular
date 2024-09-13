import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { MatTableModule } from '@angular/material/table'; // Importa Angular Material Table

@NgModule({
    declarations: [CharactersComponent],
    imports: [
    CommonModule,
    CharactersRoutingModule,
    MatTableModule // Asegúrate de importar este módulo para las tablas
    ]
})
export class CharactersModule { }