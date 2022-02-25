import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../Models/Authentication/login';
import { ILoginRes } from '../Models/Authentication/loginRes';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    baseAuthenticationUrl:string= environment.badeApiUrl+ 'authentication/';
    logginDetails:string =''

    constructor(private httpClient: HttpClient,private router:Router) { }
    login(loginData:ILogin){
        this.logginDetails=loginData.userName
        return this.httpClient.post<ILoginRes>(this.baseAuthenticationUrl + 'login', loginData);
    }
    getToken() {
        return localStorage.getItem('token')
    }


    loggedIn() {
        return !!localStorage.getItem('token')
    }
    logOut()
    {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }

}