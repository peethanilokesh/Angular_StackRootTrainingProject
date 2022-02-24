import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { PatientsListComponent } from './Components/patients-list/patients-list.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
<<<<<<< HEAD
    PatientsListComponent,
PageNotFoundComponent
=======
    HomeComponent
>>>>>>> 6f19c8948d2a0bc15092631148fdcd2c70f7354a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
