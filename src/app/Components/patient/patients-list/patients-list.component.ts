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
    private router: Router) { }

    d = new Date(2018, 11, 24, 10, 33, 30, 0);

  patients: IPatient[] = [{
    PatientId: 1,
    PatientName: "some", 
    PatientAge: 20,
    PatientGender: "some",
    Department: "some",
    DoctorName: "some",
    DoctorFee: 200,
    RegisterDate: this.d,
    CreatedBy: "some"
  },
  {
    PatientId: 10,
    PatientName: "xomething", 
    PatientAge: 20,
    PatientGender: "some",
    Department: "some",
    DoctorName: "some",
    DoctorFee: 200,
    RegisterDate: this.d,
    CreatedBy: "some"
  }];
  searchText: string = "";
  
  isPatientDataAvailable: boolean = false;

  ngOnInit(): void {

    this.patientServices.GetPatients()
    .subscribe((data: IPatient[]) =>
    {
        this.isPatientDataAvailable = true;
        console.log(data);
        this.patients = data;
    }
    );
  }

  onClickEdit(id: number){
    console.log(id)

    this.patientServices.PassIdToEditComponent(id);
    
  }

  onClickDelete(id : number){
    console.log(id);
    this.patientServices.PassIdToDeleteComponent(id);
  }


  isIdSortedAsc : boolean = false;

  onClickId(){
    console.log("clicked")

    if(this.isIdSortedAsc){
      this.patients.sort((a, b) => {return b.PatientId  - a.PatientId});
      this.isIdSortedAsc = false;
    }

    else{
      this.isIdSortedAsc = true;
      this.patients.sort((a, b) => {return a.PatientId  - b.PatientId});
    }
  }

  isNameSortedAsc : boolean = false;
  
  onClickName(){
    console.log("clicked")

    if(this.isNameSortedAsc){
      this.patients.sort((a, b) => {
        if(a.PatientName < b.PatientName)
        return -1;

        return 1;
      });
      this.isNameSortedAsc = false;
    }

    else{
      this.isNameSortedAsc = true;
      this.patients.sort((a, b) => {
        if(a.PatientName < b.PatientName)
        return 1;

        return -1;
      });
    }
  }

}
