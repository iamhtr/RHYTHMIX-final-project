// signup.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/validators/check.validator';
import { AuthService } from '../auth.service'// Import AuthService

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Set title of the page
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  register() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authService.signupUser(userData).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          // Handle success, e.g., redirect to login page
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error, e.g., display an error message
        }
      );
    }
  }
}
