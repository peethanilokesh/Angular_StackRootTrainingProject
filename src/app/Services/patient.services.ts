import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatient } from '../Models/Patient/patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddPatient } from '../Models/Patient/addPatient';
import { Router } from '@angular/router';
import { IEditPatient } from '../Models/Patient/editPatient';

@Injectable({providedIn: 'root'})
export class PatientService {
    constructor(private httpClient: HttpClient,
            private router: Router) { }
    
    baseApiUrl: string = environment.badeApiUrl + "patient/";

    GetPatients(): Observable<any[]>{
        return this.httpClient.get<any[]>(this.baseApiUrl);
    }

    GetPatientById(id: number): Observable<IPatient>{

        var url : string = this.baseApiUrl + id.toString();
        return this.httpClient.get<IPatient>(url);
    }

    
    AddPatient(newPatient: IAddPatient) : Observable<any>{

        // console.log(newPatient);
        var response = this.httpClient.post<any>(this.baseApiUrl ,newPatient);
        
       // this.router.navigate(['/patientList']);

        return response;
    }


    idOfPatientToBeEdited : number = 0;

    PassIdToEditComponent(id: number){

        // console.log("in book services id to be edited : ")
        // console.log(id);

        this.idOfPatientToBeEdited =id;

        this.router.navigate(['/editPatient']);

    }

    EditPatient(newPatient: IEditPatient) : Observable<any>{

        // console.log("in edit book services")
        // console.log(newPatient);

        var suffix: string = this.baseApiUrl + this.idOfPatientToBeEdited.toString();

        var response = this.httpClient.put<any>(suffix, newPatient);
        // console.log(response);

       //  this.router.navigate(['/patientList']);

        return response;
    }


    DeletePatient(idOfPatientToBeDeleted: number) : Observable<any>{

        var suffix: string = this.baseApiUrl + idOfPatientToBeDeleted.toString();

        return  this.httpClient.delete<any>(suffix);
    //     console.log(response);

    //    //  this.router.navigate(['/patientList']);


    //     return response;
    }


    
  
    
   


}