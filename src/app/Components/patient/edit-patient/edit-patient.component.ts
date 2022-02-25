import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEditPatient } from 'src/app/Models/Patient/editPatient';
import { IPatient } from 'src/app/Models/Patient/patient';
import { PatientService } from 'src/app/Services/patient.services';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  newPatient : IEditPatient = {
    PatientName: '', 
    PatientAge: 0,
    PatientGender: '',
    Department: '',
    DoctorName: '',
    DoctorFee: 0
  }
  constructor(private patientService : PatientService,
    private router: Router) {
      this.patientService.GetPatientById(patientService.idOfPatientToBeEdited)
      .subscribe((data: IPatient) =>{
          this.newPatient.PatientName = data.PatientName;
          this.newPatient.PatientAge = data.PatientAge;
          this.newPatient.PatientGender = data.PatientGender;
          this.newPatient.Department = data.Department;
          this.newPatient.DoctorName = data.DoctorName;
          this.newPatient.DoctorFee = data.DoctorFee;
      });
     }

  

  ngOnInit(): void {    
  }

  onEditPatient(){
    console.log(this.newPatient);

    this.patientService.EditPatient(this.newPatient)
    .subscribe((data : any) =>
    {
      console.log(data);
      this.router.navigate(['/patientList'])
    });
  }

}
