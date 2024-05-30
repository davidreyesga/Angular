import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  segurosOpciones: string[] = [];
  telefoniaOpciones: string[] = [];
  viajesOpciones: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToProductos() {
    this.router.navigate(['../productos']);
  }

  actualizarSegurosOpciones(opciones: string[]) {
    this.segurosOpciones = opciones;
  }

  actualizarTelefoniaOpciones(opciones: string[]) {
    this.telefoniaOpciones = opciones;
  }

  actualizarViajesOpciones(opciones: string[]) {
    this.viajesOpciones = opciones;
  }
}
