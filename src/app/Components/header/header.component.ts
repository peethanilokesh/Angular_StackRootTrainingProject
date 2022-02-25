import { Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/Models/Authentication/login';
import { AuthenticationService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  loggedInUserName:string='';

  ngOnInit(): void {
    this.loggedInUserName=this.authService.logginDetails
  }

  


  logout() {
    this.authService.logOut();
  }


}
