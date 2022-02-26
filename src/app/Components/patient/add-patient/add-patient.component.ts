import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAddPatient } from 'src/app/Models/Patient/addPatient';
import { PatientService } from 'src/app/Services/patient.services';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientServices : PatientService,
    private router: Router) { }

    newPatient : IAddPatient = {
      PatientName: '', 
      PatientAge: 0,
      PatientGender: 'Female',
      Department: 'ENT',
      DoctorName: '',
      DoctorFee: 0
    }

  ngOnInit(): void {
  }


  onAddPatient(){

    // console.log(this.newPatient);

    this.patientServices.AddPatient(this.newPatient)
    .subscribe((data : any) =>
    {
      // console.log("in add patient");
      // console.log(data);
      this.router.navigate(['/patientList'])
    });

  }
}
