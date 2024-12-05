// src/app/services/auth.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private isLoggedIn = false; // Estado privado de autenticación

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica si el código se está ejecutando en el navegador
    if (isPlatformBrowser(this.platformId)) {
    const loggedIn = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = loggedIn === 'true';
    } else {
    this.isLoggedIn = false;
    }
}

/**
 * Método para autenticar al usuario
 */
login(): void {
    this.isLoggedIn = true;
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('isLoggedIn', 'true');
    }
}

/**
 * Método para cerrar la sesión del usuario
 */
logout(): void {
    this.isLoggedIn = false;
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('isLoggedIn', 'false');
    // Elimina los perfiles almacenados si es necesario
    // localStorage.removeItem('profiles');
    }
}

/**
 * Método para verificar si el usuario está autenticado
 */
isAuthenticated(): boolean {
    return this.isLoggedIn;
}
}
