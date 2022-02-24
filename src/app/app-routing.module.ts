import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AddPatientComponent } from './Components/patient/add-patient/add-patient.component';
import { PatientsListComponent } from './Components/patient/patients-list/patients-list.component';

const routes: Routes = [
  {path : 'login', component:AuthenticationComponent},
  {path : 'home', component:HomeComponent},

  {path: 'patientList', component: PatientsListComponent},
  {path: 'addPatient', component: AddPatientComponent},
  
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
