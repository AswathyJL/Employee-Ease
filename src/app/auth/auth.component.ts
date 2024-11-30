import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginForm:FormGroup

  constructor(private fb:FormBuilder, private router:Router){
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*")]]
    })
  }

  login(){
    if(this.loginForm.valid)
    {
      alert(`Login successfull`)
      this.router.navigate(['/employee']);
    }
    else {
      alert("Invalid Form")
    }
  }
}
