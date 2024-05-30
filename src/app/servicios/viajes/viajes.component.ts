import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  @Output() servicioChange = new EventEmitter<string[]>();

  viajes: string[] = ['Paquete de viaje a Europa', 'Crucero por el Caribe'];

  constructor() {}

  ngOnInit(): void {
    this.servicioChange.emit(this.viajes);
  }
}
