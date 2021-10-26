import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private _http:HttpClient) { }
  login(email:string, password:string):Promise<any>{
    const objeto={
      email:email,
      password:password
    }
    return this._http.post(this.URL+'/auth/login',objeto).toPromise();
  }
}
