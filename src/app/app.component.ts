import { Component } from '@angular/core';
import { AuthenticationService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hospital-Management-UI';
  constructor(private authService:AuthenticationService){

  }
  isNavigationVisible():boolean
  {
    // console.log(this.authService.loggedIn())
    return this.authService.loggedIn()
  }

}
