import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phone: [''],
      address: [''],
      country: ['', Validators.required],
      newsletter: [false],
      terms: [false, Validators.requiredTrue],
      range: [0] // Aquí está el control para el rango de edad
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
