import { Component, OnInit } from '@angular/core';
import {Patient} from '../../../entry/patient';
import { FormBuilder, Validators } from '@angular/forms'; 
import {UtilService} from '../../../../services/util.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.css']
})
export class CreateInfoComponent implements OnInit {
  todaydate;
  patientForm;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private utils : UtilService) { }  

  genders = ['- choose', 'Male', 'Female', 'Others'];
  submitted = false;

  ngOnInit() {
    //this.todaydate = this.utils.currentDate();
    this.patientForm = this.formBuilder.group({
      id:[null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      gender: [''],
      dob: [this.todaydate, Validators.required],
      address: [''],
    });
  }
  onSubmit() {
    console.log(this.patientForm);
    if(this.patientForm.valid){
      alert('User form is valid!!')
     
    } else {
      alert('User form is not valid!!')
    }
  }

  

}
