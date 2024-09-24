// Importa Router desde '@angular/router'
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    characters: any[] = [];

    constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {}

    ngOnInit(): void {
        this.rickAndMortyService.getCharacters().subscribe(response => {
        this.characters = response.results;
        });
    }

    redirectToLogin(character: any): void {
        // Guarda el nombre y el planeta del personaje en localStorage
        sessionStorage.setItem('user', character.name);
        sessionStorage.setItem('password', character.origin.name);

        // Redirige al usuario al login
        this.router.navigate(['/login']);
    }
}
