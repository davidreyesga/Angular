import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup; 
  invalidCredentials: boolean = false; 

  private profiles = [
    { userAPI: 'david@tienda.com', passwordAPI: 'david' },
    { userAPI: 'tigre@tienda.com', passwordAPI: 'tigre' },
    { userAPI: 'cliente@tienda.com', passwordAPI: 'cliente' },
    { userAPI: 'clienta@tienda.com', passwordAPI: 'clienta' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userAPI = sessionStorage.getItem('userAPI');
      const passwordAPI = sessionStorage.getItem('passwordAPI');

      if (userAPI && passwordAPI) {
        this.loginForm.patchValue({
          email: userAPI,
          password: passwordAPI
        });
      }
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  goToServicios() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    let savedProfiles = [];
    let sessionProfile = null;

    if (isPlatformBrowser(this.platformId)) {
      savedProfiles = JSON.parse(localStorage.getItem('profiles') || '[]');

      const userAPI = sessionStorage.getItem('userAPI');
      const passwordAPI = sessionStorage.getItem('passwordAPI');

      if (userAPI && passwordAPI) {
        sessionProfile = { userAPI, passwordAPI };
      }
    }

    const allProfiles = [...this.profiles, ...savedProfiles];

    if (sessionProfile) {
      allProfiles.push(sessionProfile);
    }

    const user = allProfiles.find(profile =>
      profile.userAPI === email && profile.passwordAPI === password
    );

    this.invalidCredentials = !user;

    if (user) {
      this.authService.login();
      this.router.navigate(['/characters'], { queryParams: { email } });
    }
  }
}
