import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, HostListener  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor(private router: Router) { }
  
  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    if (this.isBrowser()) {
      alert('ngOnChanges');
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    if (this.isBrowser()) {
      alert('ngOnInit');
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    if (this.isBrowser()) {
      alert('ngDoCheck');
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    if (this.isBrowser()) {
      alert('ngAfterContentInit');
    }
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    if (this.isBrowser()) {
      alert('ngAfterContentChecked');
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    if (this.isBrowser()) {
      alert('ngAfterViewInit');
    }
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    if (this.isBrowser()) {
      alert('ngAfterViewChecked');
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.isBrowser()) {
      $event.returnValue = 'Are you sure you want to leave?';
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    if (this.isBrowser()) {
      alert('ngOnDestroy');
      if (!confirm('Los Productos son mejores que los servicios, ahora no tendras ninguno...')) {
        throw new Error('Navigation cancelled');
      }
    }
  }
  goToServicios() {
    this.router.navigate(['/']);
  }
}