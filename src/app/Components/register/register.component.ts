import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/Models/Authentication/register';
import { AuthenticationService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }
  registerDetails:IRegister={
    userName:'',
    email:'',
    password:''
}
  ngOnInit(): void {
  }
  register(){
    this.authService.Register(this.registerDetails).subscribe(
      res=>{
       
        this.router.navigate(['/login'])
    })
  }

}
