import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/validators/confirm-password.validator';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //set title of page
  public constructor(private titleService: Title){
    this.titleService.setTitle("Sign up - Rhythmix"); 
  }

  fb = inject(FormBuilder);

  registerForm !: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    },
    {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    }
    
    )
  }
  register(){
    console.log(this.registerForm.value)
  }
}
