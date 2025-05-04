import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';
declare function signup ():void
declare function login ():void
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm! : FormGroup
users: any={}
  constructor (private fb: FormBuilder, private loginService: LoginService, private router: Router) {}
  ngOnInit () {
    signup(),
    login()

    this.loginForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]],
      code: ['',[Validators.required]]
    });
  }

  signup(id:any){
    if (this.loginForm.valid && this.loginForm.value.code === '450') {
      this.loginService.signup(this.loginForm.value).subscribe(
        (data)=>{
          console.log(data.message);
          this.router.navigate([``])
        }
      )
    } else {
      alert('input empty or code incorrect')
    }
  }

  login(){
    this.loginService.login(this.users).subscribe(
      (data)=>{
        if (data.message == '0') {
          console.log('email incorrect');
        } else if (data.message == '1') {
          console.log('password incorrect')
        } else {
          localStorage.setItem('token', JSON.stringify(data.use))
          this.router.navigate([`/home`])
        }
      }
    )
    
  }


}
