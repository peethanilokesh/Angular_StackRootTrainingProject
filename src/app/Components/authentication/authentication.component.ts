import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/Models/Authentication/login';
import { AuthenticationService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }
  loginDetails:ILogin={
    userName:'',
    password:''
}


  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.loginDetails).subscribe(
      res=>{
        // console.log(res.token)
        if(res.token=="Wroung")
        {
          alert("Wrong Credentials!!!!")
        }
        else{
          localStorage.setItem('token',res.token)
          localStorage.setItem('user',res.username)
        this.router.navigate(['/home'])
        }
    })

  }
  toregister(){
    this.router.navigate(['/register'])
  }

}
