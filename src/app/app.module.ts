import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { PatientsListComponent } from './Components/patients-list/patients-list.component';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
=======
import { AddPatientComponent } from './Components/patients/add-patient/add-patient.component';
>>>>>>> c8341c6f2e4f019a8640cf9a1f0d1ab59d9cc5dc

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
<<<<<<< HEAD
    PatientsListComponent,
<<<<<<< HEAD
PageNotFoundComponent
=======
AddPatientComponent
>>>>>>> c8341c6f2e4f019a8640cf9a1f0d1ab59d9cc5dc
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
