import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPatient } from 'src/app/Models/Patient/patient';
import { PatientService } from 'src/app/Services/patient.services';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  constructor(private patientServices: PatientService,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

     }

    d = new Date(2018, 11, 24, 10, 33, 30, 0);

  patients: IPatient[] = [];

  searchText: string = "";
  
  isPatientDataAvailable: boolean = false;

  GetPatientRefress(){
   
  }
  ngOnInit(): void {

   
   this.patientServices.GetPatients()
   .subscribe((data : any[]) =>
   {
       this.isPatientDataAvailable = true;
       console.log(data);
       this.patients = data;
       
   }
   );
    console.log("after init");
    console.log(this.patients);
  }

  onClickEdit(id: number){
    console.log("clicked edit");
  
   console.log(id)

   
   this.patientServices.PassIdToEditComponent(id);


    
  }

  onClickDelete(id : number){
    console.log("in on click delete");
    console.log(id);

    this.patientServices.DeletePatient(id)
    .subscribe((data : any)=>{
     // console.log("deleted the patient");
     // console.log(data);
      
     this.ngOnInit();
     
    })

    
    this.GetPatientRefress();
   
  }


  isIdSortedAsc : boolean = false;

  onClickId(){
    console.log("clicked")

    if(this.isIdSortedAsc){
      this.patients.sort((a, b) => {return b.patientId  - a.patientId});
      this.isIdSortedAsc = false;
    }

    else{
      this.isIdSortedAsc = true;
      this.patients.sort((a, b) => {return a.patientId  - b.patientId});
    }
  }

  isNameSortedAsc : boolean = false;
  
  onClickName(){
    console.log("clicked")

    if(this.isNameSortedAsc){
      this.patients.sort((a, b) => {
        if(a.patientName < b.patientName)
        return -1;

        return 1;
      });
      this.isNameSortedAsc = false;
    }

    else{
      this.isNameSortedAsc = true;
      this.patients.sort((a, b) => {
        if(a.patientName < b.patientName)
        return 1;

        return -1;
      });
    }
  }

}
