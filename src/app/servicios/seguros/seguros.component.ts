import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {
  opciones: string[] = ['Seguro de vida', 'Seguro de salud', 'Seguro de auto'];

  @Output() opcionesChange = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {
    this.opcionesChange.emit(this.opciones);
  }
}
