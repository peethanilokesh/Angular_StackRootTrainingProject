import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../Models/Authentication/login';
import { ILoginRes } from '../Models/Authentication/loginRes';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { IRegister } from '../Models/Authentication/register';
=======
import { Observable } from 'rxjs';
>>>>>>> 05a227477ab207ae9fc0fd652bf248e22ff94c3c

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    baseAuthenticationUrl:string= environment.badeApiUrl+ 'authentication/';
    logginDetails:string =''

    constructor(private httpClient: HttpClient,private router:Router) { }
    login(loginData:ILogin){
        this.logginDetails=loginData.userName
        //console.log(this.logginDetails)
        return this.httpClient.post<ILoginRes>(this.baseAuthenticationUrl + 'login', loginData);
    }
<<<<<<< HEAD
    Register(RegisterData:IRegister){
        return this.httpClient.post<any>(this.baseAuthenticationUrl + 'register',RegisterData );
    }
=======
    
    
>>>>>>> 05a227477ab207ae9fc0fd652bf248e22ff94c3c
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