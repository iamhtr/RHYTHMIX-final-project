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
  registerForm!: FormGroup;
  registrationSuccess = false; // Thêm thuộc tính để theo dõi việc đăng ký thành công

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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
          this.registrationSuccess = true; // Đặt biến thành true khi đăng ký thành công
          this.clearForm(); // Gọi phương thức để xoá nội dung trong ô đăng ký
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error, e.g., display an error message
        }
      );
    }
  }

  clearForm() {
    // Xoá nội dung trong các ô đăng ký
    this.registerForm.reset();
  }
}