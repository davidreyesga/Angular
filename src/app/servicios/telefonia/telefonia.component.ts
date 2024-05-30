import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-telefonia',
  templateUrl: './telefonia.component.html',
  styleUrls: ['./telefonia.component.css']
})
export class TelefoniaComponent implements OnInit {
  @Output() servicioChange = new EventEmitter<string[]>();

  telefonia: string[] = ['Plan de telefonía móvil', 'Internet de alta velocidad'];

  constructor() {}

  ngOnInit(): void {
    this.servicioChange.emit(this.telefonia);
  }
}
