import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {
  @Output() servicioChange = new EventEmitter<string[]>();

  seguros: string[] = ['Seguro de vida', 'Seguro de salud', 'Seguro de auto'];

  constructor() {}

  ngOnInit(): void {
    this.servicioChange.emit(this.seguros);
  }
}
