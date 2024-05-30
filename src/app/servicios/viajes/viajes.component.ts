import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  opciones: string[] = ['Viaje nacional', 'Viaje internacional', 'Crucero'];

  @Output() opcionesChange = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {
    this.opcionesChange.emit(this.opciones);
  }
}
