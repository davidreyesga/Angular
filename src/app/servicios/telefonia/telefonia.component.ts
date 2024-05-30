import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {
  opciones: string[] = ['Plan básico', 'Plan familiar', 'Plan ilimitado'];

  @Output() opcionesChange = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit() {
    this.opcionesChange.emit(this.opciones);
  }
}
