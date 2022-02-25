import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AddPatientComponent } from './Components/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './Components/patient/delete-patient/delete-patient.component';
import { EditPatientComponent } from './Components/patient/edit-patient/edit-patient.component';

import { PatientsListComponent } from './Components/patient/patients-list/patients-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path : 'login', component:AuthenticationComponent},
  {path : 'register', component:RegisterComponent},
  
  {path : 'home', component:HomeComponent, canActivate: [AuthGuard]},

  {path: 'patientList', component: PatientsListComponent,canActivate: [AuthGuard]},
  {path: 'addPatient', component: AddPatientComponent,canActivate: [AuthGuard]},
  {path:'delete',component: DeletePatientComponent,canActivate: [AuthGuard]},
  {path: 'editPatient',component: EditPatientComponent,canActivate: [AuthGuard]},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
