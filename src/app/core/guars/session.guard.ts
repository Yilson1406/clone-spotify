import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private _cookies:CookieService,private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.checkcookies();
  }

  checkcookies():boolean{
    try {

      const token = this._cookies.check('token')
      if (!token) {
        this.router.navigate(['/auth'])
      }
      return token;



    } catch (error) {
      console.log(error);

      return false;
    }

  }

}
