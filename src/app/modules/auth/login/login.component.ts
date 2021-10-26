import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession:boolean = false
  constructor(private _auth:AuthService,
              private router:Router,
              private cookie:CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }
  sendLogin(): void {
   const {email,password}= this.formLogin.value;
    this._auth.login(email,password).then(user=>{
      this.cookie.set('token',user.tokenSession)
      this.router.navigate(['tracks'])
    }).catch(error=>{
      this.errorSession = true;
    })
  }

}
