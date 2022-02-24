import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../Models/Authentication/login';
import { ILoginRes } from '../Models/Authentication/loginRes';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    baseAuthenticationUrl:string='http://localhost:9290/api/authentication/';


    constructor(private httpClient: HttpClient,private router:Router) { }
    login(loginData:ILogin){
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