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
        this.newPatient.DoctorFee = data.doctorFee;
          this.newPatient.PatientName = data.patientName;
          this.newPatient.PatientAge = data.patientAge;
          this.newPatient.PatientGender = data.patientGender;
          this.newPatient.Department = data.department;
          this.newPatient.DoctorName = data.doctorName;
          

          // console.log("in constructor of editComponent");
          // console.log(this.newPatient);
      });

      // console.log("in edit init");
      // console.log(this.newPatient);
     }

  

  ngOnInit(): void {    
  }

  onEditPatient(){
    // console.log(this.newPatient);

    this.patientService.EditPatient(this.newPatient)
    .subscribe((data : any) =>
    {
     // console.log("in subscribed");
      this.router.navigate(['/patientList'])
    });
  }

}
