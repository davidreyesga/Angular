import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicioList: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  onServicioChange(servicios: string[]) {
    setTimeout(() => {
      this.servicioList = [...this.servicioList, ...servicios];
    });
  }
  goToSeguros() {
    this.router.navigate(['./seguros'], { relativeTo: this.route });
  }

  goToTelefonia() {
    this.router.navigate(['./telefonia'], { relativeTo: this.route });
  }

  goToViajes() {
    this.router.navigate(['./viajes'], { relativeTo: this.route });
  }
  goToProductos() {
    this.router.navigate(['../productos']);
  }
}
