import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  invalidCredentials: boolean = false;

  private profiles = [
    { email: 'david@tienda.com', password: 'david' },
    { email: 'tigre@tienda.com', password: 'tigre' },
    { email: 'cliente@tienda.com', password: 'cliente' },
    { email: 'clienta@tienda.com', password: 'clienta' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  goToServicios() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    // Comprueba si el usuario y la contraseña coinciden con los datos almacenados en sessionStorage
    const sessionStorageEmail = sessionStorage.getItem('userAPI');
    const sessionStoragePassword = sessionStorage.getItem('passwordAPI');

    const user = this.profiles.find(profile => profile.email === email && profile.password === password)
      || (email === sessionStorageEmail && password === sessionStoragePassword);

    this.invalidCredentials = user ? false : true;

    if (user) {
      this.router.navigate(['/characters'], { queryParams: { email } });
    }
  }
}
