
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/auth.service';

@Injectable()
export class TokenInterceptorService  implements HttpInterceptor {

    constructor(private injector:Injector){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService=this.injector.get(AuthenticationService)

        let tokenizedReq=req.clone({
            headers:req.headers.set('Authorization', 'Bearer ' +authService.getToken())
        })
        return next.handle(tokenizedReq)
 
    }
}