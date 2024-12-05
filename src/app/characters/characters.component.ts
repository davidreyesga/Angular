import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface Profile {
    userAPI: string;
    passwordAPI: string;
}

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
characters: any[] = []; 

constructor(
    private rickAndMortyService: RickAndMortyService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object 
) {}

ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(response => {
    this.characters = response.results;
    });
}

redirectToLogin(character: any): void {
    if (isPlatformBrowser(this.platformId)) {

    let profiles: Profile[] = JSON.parse(localStorage.getItem('profiles') || '[]');
    let newProfile: Profile = {
        userAPI: character.name,
        passwordAPI: character.origin.name
    };

    if (!profiles.some(profile =>
        profile.userAPI === newProfile.userAPI &&
        profile.passwordAPI === newProfile.passwordAPI
    )) {
        profiles.push(newProfile); 
        localStorage.setItem('profiles', JSON.stringify(profiles)); 
    }


    sessionStorage.setItem('userAPI', newProfile.userAPI);
    sessionStorage.setItem('passwordAPI', newProfile.passwordAPI);
    }

    this.router.navigate(['/login']);
}
}
