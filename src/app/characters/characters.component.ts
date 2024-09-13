import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
    characters: any[] = [];

    constructor(private rickAndMortyService: RickAndMortyService) {}

    ngOnInit(): void {
        this.rickAndMortyService.getCharacters().subscribe(response => {
        this.characters = response.results;
        });
    }
}
