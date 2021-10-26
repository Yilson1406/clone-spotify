import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor( private _cookies:CookieService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // try {
    //   const token = this._cookies.get('token')
    //   let newRequest = request
    //   newRequest = request.clone(
    //     {
    //       setHeaders: {
    //         authorization: `Bearer ${token}`,
    //         CUSTOM_HEADER: 'HOLA'
    //       }
    //     }
    //   )

    //   return next.handle(newRequest);

    // } catch (e) {
    //   console.log('🔴🔴🔴 Ojito error', e)
    //   return next.handle(request);
    // }
    try {
      const token = this._cookies.get('token')
      let newREquest = request
      newREquest = request.clone(
        {
          setHeaders:{
            authorization:`Bearer ${token}`
          }
        }
      )
      return next.handle(newREquest);
    } catch (error) {
      console.log(error);
      return next.handle(request);

    }
  }
}
