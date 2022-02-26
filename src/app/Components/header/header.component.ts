import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Models/Authentication/login';
import { AuthenticationService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedInUserName =localStorage.getItem('user')

  constructor(private authService:AuthenticationService) { 
    // this.loggedInUserName=this.authService.logginDetails

  }

  ngOnInit(): void {
    // console.log(this.loggedInUserName)
  }

  


  logout() {
    this.authService.logOut();
  }


}
