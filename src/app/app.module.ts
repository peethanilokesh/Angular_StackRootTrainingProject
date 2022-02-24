import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AuthneticationComponent } from './Components/authnetication/authnetication.component';
import { AuthenticationComponent } from './Components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthneticationComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
