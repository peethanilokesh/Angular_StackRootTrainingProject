import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { AuthenticationComponent } from './Components/authentication/authentication.component';

import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

import { DeletePatientComponent } from './Components/patient/delete-patient/delete-patient.component';
import { EditPatientComponent } from './Components/patient/edit-patient/edit-patient.component';
import { PatientsListComponent } from './Components/patient/patients-list/patients-list.component';
import { AddPatientComponent } from './Components/patient/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    PageNotFoundComponent,
    HomeComponent,
    EditPatientComponent,
    PatientsListComponent,
    DeletePatientComponent,
    AddPatientComponent,
    RegisterComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
